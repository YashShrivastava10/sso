import { SiGithub } from "@icons-pack/react-simple-icons"
import { AuthType } from "../types/FromType"

const GithubAuth = ({ status }: { status: AuthType }) => {
  return (
    <div className="w-full flex gap-2 p-4 border text-accent border-accent hover:bg-accent hover:text-black text-17 rounded-lg justify-center items-center cursor-pointer" title="Continue with Github">
      <SiGithub size={17}/>
      <span>Github</span>
    </div>
  )
}

export default GithubAuth