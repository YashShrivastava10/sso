export type User = {
  password: string
  email: string,
  firstName: string,
  lastName: string,
  createdAt: Date,
}

export type Response = {
  user: User | null,
  status: boolean,
  message: string
}