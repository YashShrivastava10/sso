import React from 'react'
import Link from "next/link"
import { FirstLastNameFormField, FormField, ProfileImage } from '@/utils/components'
import { signup } from "@/actions/auth"
import { signIn } from "@/auth"
import { displayForm } from "@/utils/formUtils"
import { AuthType } from '@/utils/types/FromType'

const CredentialAuthForm = ({ status }: {status: AuthType}) => {

  const handleSubmit = async (formData: FormData) => {
    "use server"

    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string

    if (status === "login") {
      await signIn("credentials", { email, password })
    }
    else {
      const response = await signup(firstName, lastName, email, password)
      if (!response.status) {
        console.log(response.message)
        return
      }

      console.log(response.message);

      if(response.user){
        const email = response.user.email as string
        const password = response.user.password as string
        await signIn("credentials", { email, password })
      }
    }
  }

  return (
    <form className="w-full flex flex-col items-center gap-6" action={handleSubmit}>
      {status === "signup" && <ProfileImage />}
      <div className="flex flex-col gap-4 w-full">

        {status === "signup" &&
          <div className="flex gap-4 w-full">

            <FirstLastNameFormField label="First Name" placeholder="Yash" id="firstName" />

            <FirstLastNameFormField label="Last Name" placeholder="Shrivastava" id="lastName" />

          </div>
        }

        <FormField label="Email" id="email" placeholder="eg.shrivastavayash10@gmail.com" />

        <FormField label="Password" id="password" placeholder="Enter your password" />

        <button className="bg-accent hover:bg-accent-hover text-black w-full font-bold py-2 rounded-lg my-4">{displayForm[status].label}</button>

        <span className="text-12 text-center font-thin">
          {displayForm[status].redirectLabel + " "}
          <Link href={displayForm[status].link} className="font-bold text-accent">{displayForm[status].rediectLinkLabel}</Link>
        </span>

      </div>
    </form>
  )
}

export default CredentialAuthForm