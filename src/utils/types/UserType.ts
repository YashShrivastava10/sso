export type User = {
  email: string,
  firstName: string,
  lastName: string,
  createdAt: Date,
  token: string,
}

export type Response = {
  user: User | null,
  status: boolean,
  message: string
}