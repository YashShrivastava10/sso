import NextAuth, { CredentialsSignin } from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { googleLogin, login } from "./actions/auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [ 
    Google({
      authorization: {
        params: {
          prompt: "select_account"
        }
      }
    }),
    Github,
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async({ email, password }) => {
        const response = await login(email as string, password as string)

        if(!response.status) throw new CredentialsSignin(response.message)
        
        return response.user
      }
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if(account?.provider === "google" || account?.provider === "github"){
        const firstName = profile?.given_name !!
        const lastName = profile?.family_name !!
        const email = profile?.email !!

        const response = await googleLogin(email, firstName, lastName)
        
        if(!response.status) return false

        return true
      }
      if(account?.provider === "credentials") return true

      return false
    },
  },
})