"use server"

import { signOut } from "@/auth"


export const handleLogout = async() => {
  await signOut({ redirect: true, redirectTo: '/login' })
}