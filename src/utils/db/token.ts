"use server";

import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.JWT_SECRET_KEY !!

export const generateToken = async(email: string) => {
  const token = jwt.sign({ email }, SECRET_KEY)
  return token
}