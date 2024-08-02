import { User, Response } from "@/utils/types/UserType"

export const createSuccessResponse = (user: User, message: string) => {
  const response: Response = { user, status: true, message }
  return response
}

export const createFailResponse = (message: string) => {
  const response: Response = { user: null, status: false, message }
  return response
}