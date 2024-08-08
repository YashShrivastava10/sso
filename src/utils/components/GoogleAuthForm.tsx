import { signIn } from "@/auth";
import { SiGoogle } from "@icons-pack/react-simple-icons"

const GoogleAuthForm = () => {

  const handleGoogleAuth = async () => {
    "use server"
    await signIn("google")
  }

  return (
    <form className="w-full gap-2 p-4 border text-accent border-accent hover:bg-accent hover:text-black text-17 rounded-lg cursor-pointer" title="Continue with Google" action={handleGoogleAuth}>
      <button className="w-full flex gap-2 justify-center items-center">
        <SiGoogle size={17} />
        <span>Google</span>
      </button>
    </form>
  )
}

export default GoogleAuthForm