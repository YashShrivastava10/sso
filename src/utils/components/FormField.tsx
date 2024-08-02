"use client"

import { useState } from "react"
import { PasswordStatusType } from "../types/FromType"
import { visibilityStatus } from "../formUtils"

const FormField = ({ label, id, placeholder }: {
  label: string,
  id: string,
  placeholder: string,
}) => {

  const [passwordStatus, setPasswordStatus] = useState<PasswordStatusType>("hide")

  const CurrentIcon = visibilityStatus[passwordStatus].Icon

  const handlePasswordStatus = () => {
    const status = passwordStatus === "hide" ? "show" : "hide"
    setPasswordStatus(status)
  }

  return (
    <div className="flex flex-col gap-2 w-full relative">
      <label htmlFor={id} className="text-13 font-normal">{label}</label>
      <input id={id} name={id} placeholder={placeholder} type={id === "email" ? "email" : visibilityStatus[passwordStatus].type} className="h-10 w-full text-white outline-none border border-white/10 focus:border-accent bg-grey pl-4 rounded-lg placeholder" required />
      {id === "password" && <CurrentIcon size={20} className="absolute right-4 top-[38px] cursor-pointer text-accent" onClick={handlePasswordStatus}/>}
    </div>
  )
}

export default FormField