import { DisplayFormType } from "./types/FromType";
import { Eye, EyeOff } from "lucide-react"

export const displayForm: DisplayFormType = {
  "login": {
    label: "Login",
    link: "/signup",
    redirectLabel: "Don't have an account ?",
    rediectLinkLabel: "Sign Up"
  },
  "signup": {
    label: "Sign Up",
    link: "/login",
    redirectLabel: "Already have an account ?",
    rediectLinkLabel: "Login"
  }
}

export const visibilityStatus = {
  "hide": {
    type: "password",
    Icon: EyeOff
  },
  "show": {
    type: "text",
    Icon: Eye
  }
}