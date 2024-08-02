"use server"

import { connectDB } from "@/db"
import { generateToken } from "@/utils/db/token"

const connection = connectDB()

export const login = async(email: string, password: string) => {
  try{
    const collection = (await connection).collection("users")
    const result = await collection.findOne({ email })

    if(!result) return { user: null, status: false, message: "InvalidUser"}

    if(result.password !== password) return { user: null, status: false, message: "Invalid Password"}

    const { _id, ...data } = result
    const token = await generateToken(email)

    return { user: { ...data, token }, status: true, message: "Logged In"}
  }
  catch(e){
    console.log(e)
    return { user: null, status: false, message: "Error while logging.."}
  }
}

export const signup = async(firstName: string, lastName: string, email: string, password: string) => {
  try{
    const collection = (await connection).collection("users")
    const user = await collection.findOne({ email })

    if(user) return { user: null, status: false, message: "User already exsist"}

    const result = await collection.insertOne({ firstName, lastName, email, password, createdAt: new Date() })

    if(!result.acknowledged) return { user: null, status: false, message: "Error while signing up.." }

    const updatedUser = await collection.findOne({ email })

    if(!updatedUser) return { user: null, status: false, message: "Error while signing up.." }

    const { _id, ...data } = updatedUser

    const token = await generateToken(email)
    
    return { user: { ...data, token }, status: true, message: "Account created" }
  }
  catch(e){
    console.log(e);
    return { user: null, status: false, message: "Error while signing up.."}
  }
}