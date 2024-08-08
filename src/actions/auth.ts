"use server"

import { connectDB } from "@/db"
import { encrypt, verifyPassword } from "@/utils/db/passwordHash"
import { createFailResponse, createSuccessResponse } from "@/utils/db/response"
import { User } from "@/utils/types/UserType"

const connection = connectDB()

export const login = async (email: string, inputPassword: string) => {
  try {
    // fetch collection
    const collection = (await connection).collection("users")

    // Check if user exist in db
    const result = await collection.findOne({ email })

    if (!result) return createFailResponse("Invalid User")

    // If user exist, check if password is correct
    if (!await verifyPassword(inputPassword, result.password)) createFailResponse("Invalid Password")

    // format data & genearate token
    let { _id, password, ...data } = result

    return createSuccessResponse(data as User, "Logged In")
  }
  catch (e) {
    console.log(e)
    return createFailResponse("Error while logging..")
  }
}

export const signup = async (firstName: string, lastName: string, email: string, password: string) => {
  try {
    // fetch collection
    const collection = (await connection).collection("users")

    // Check if user exist in db
    const user = await collection.findOne({ email })

    if (user) return createFailResponse("User already exsist")

    // If user exist, hash password
    const hashedPassword = await encrypt(password)
    if (!hashedPassword) return createFailResponse("Error while signing up..")

    // update db
    const createdAt = new Date()
    const result = await collection.insertOne({ firstName, lastName, email, password: hashedPassword, createdAt })

    if (!result.acknowledged) return createFailResponse("Error while signing up..")

    // format data & genearate token
    const data = { email, firstName, lastName, createdAt }

    return createSuccessResponse(data as User, "Account created")
  }
  catch (e) {
    console.log(e);
    return createFailResponse("Error while signing up..")
  }
}

export const googleLogin = async (email: string, firstName: string, lastName: string) => {
  try {
    // fetch collection
    const collection = (await connection).collection("users")

    // Check if user exist in db
    const result = await collection.findOne({ email })

    // user is not present, signup
    if (!result) {
      const createdAt = new Date()
      const result = await collection.insertOne({ firstName, lastName, email, createdAt })

      if (!result.acknowledged) return createFailResponse("Error while signing up..")

      const data = { email, firstName, lastName, createdAt }

      return createSuccessResponse(data as User, "Account created")
    }

    // user is present, login
    // format data & genearate token
    let { _id, ...data } = result

    return createSuccessResponse(data as User, "Logged In")
  }
  catch (e) {
    console.log(e)
    return createFailResponse("Error while logging..")
  }
}