
import { auth } from "@/auth"
import { GithubAuthForm, GoogleAuthForm, CredentialAuthForm } from "@/utils/components"
import { displayForm } from "@/utils/formUtils"
import { AuthType } from "@/utils/types/FromType"
import Image from "next/image"

// let REDIRECT_URL = ""

const AuthLayout = async ({ status, searchParams }: { status: AuthType, searchParams: Record<string, string> }) => {

  // REDIRECT_URL = searchParams.redirect ? searchParams.redirect : REDIRECT_URL

  return (
    <div className="flex items-center p-6 h-full w-full">

      <section className="h-full w-1/2 lg:w-3/5 hidden md:block relative rounded-3xl overflow-hidden">
        <Image src="/314871.jpg" alt="Image" fill style={{ objectFit: "cover" }} priority />
      </section>

      <section className="h-full w-full md:w-1/2 lg:w-2/5">
        <div className="h-full w-full flex flex-col gap-6 items-center px-20 py-4">

          <h2>{displayForm[status].label}</h2>

          <div className="flex gap-4 w-full">

            <GoogleAuthForm />

            <GithubAuthForm />

          </div>

          <div className="w-full flex items-center relative my-2">
            <hr className="w-full border border-white/30" />
            <label className="text-11 font-thin px-4 absolute bg-primary left-1/2 transform -translate-x-1/2">Or</label>
          </div>

          <CredentialAuthForm status={status} />

        </div>
      </section>

    </div>
  )
}

export default AuthLayout