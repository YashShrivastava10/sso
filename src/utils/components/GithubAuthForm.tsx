import { SiGithub } from "@icons-pack/react-simple-icons"
import { signIn } from "@/auth"

const GithubAuthForm = () => {

  const handleGithubAuth = async () => {
    "use server"
    await signIn("github")
  }

  return (
    <form className="w-full gap-2 p-4 border text-accent border-accent hover:bg-accent hover:text-black text-17 rounded-lg cursor-pointer" title="Continue with Github" action={handleGithubAuth}>
      <button className="w-full flex gap-2 justify-center items-center">
        <SiGithub size={17} />
        <span>Github</span>
      </button>
    </form>
  )
}

export default GithubAuthForm