export type AuthType = "login" | "signup"

type FormType = {
  label: string,
  link: string,
  redirectLabel: string,
  rediectLinkLabel: string
}

export type DisplayFormType = {
  login: FormType,
  signup: FormType
}

export type PasswordStatusType = "show" | "hide"