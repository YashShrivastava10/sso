import { login, signup } from "@/actions/auth"
import { FirstLastNameFormField, FormField, GithubAuth, GoogleAuth, ProfileImage } from "@/utils/components"
import { displayForm } from "@/utils/formUtils"
import { AuthType } from "@/utils/types/FromType"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

let REDIRECT_URL = ""

const AuthLayout = ({ status, searchParams }: { status: AuthType, searchParams: Record<string, string> }) => {

  REDIRECT_URL = searchParams.redirect ? searchParams.redirect : REDIRECT_URL

  const handleSubmit = async(formData: FormData) => {
    "use server"
    if(status === "login"){
      const email = formData.get("email") as string
      const password = formData.get("password") as string
  
      const response = await login(email, password)
      if(!response.status){
        console.log(response.message)
        return
      }
      console.log(response.user);
    }
    else{
      const firstName = formData.get("firstName") as string
      const lastName = formData.get("lastName") as string
      const email = formData.get("email") as string
      const password = formData.get("password") as string

      const response = await signup(firstName, lastName, email, password)
      if(!response.status){
        console.log(response.message)
        return
      }
      console.log(response.user);
    }

    if(REDIRECT_URL) redirect(REDIRECT_URL)
  }

  return (
    <div className="flex items-center p-6 h-full w-full">

      <section className="h-full w-1/2 lg:w-3/5 hidden md:block relative rounded-3xl overflow-hidden">
        <Image src="/314871.jpg" alt="Image" fill style={{ objectFit: "cover" }} priority />
      </section>

      <section className="h-full w-full md:w-1/2 lg:w-2/5">
        <form className="h-full w-full flex flex-col gap-6 items-center px-20 py-4" action={handleSubmit}>

          <h2>{displayForm[status].label}</h2>

          <div className="flex gap-4 w-full">
            <div className="flex w-1/2">
              <GoogleAuth status={status}/>
            </div>
            <div className="flex w-1/2">
              <GithubAuth status={status} />
            </div>
          </div>

          <div className="w-full flex items-center relative my-2">
            <hr className="w-full border border-white/30"/>
            <label className="text-11 font-thin px-4 absolute bg-primary left-1/2 transform -translate-x-1/2">Or</label>
          </div>

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
      </section>

    </div>
  )
}

export default AuthLayout