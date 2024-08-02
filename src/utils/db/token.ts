"use server";

import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.JWT_SECRET_KEY !!

export const generateToken = (email: string) => {
  const token = jwt.sign({ email }, SECRET_KEY)
  console.log(token);
  return token
}