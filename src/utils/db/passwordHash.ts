import bcrypt from "bcrypt"

const saltRounds = 10

export const encrypt = async(password: string) => {
  try{
    const hashPassword = await bcrypt.hash(password, saltRounds)
    return hashPassword
  }
  catch(e){
    console.log(e);
    throw e
  }
}

export const verifyPassword = async(inputPassword: string, userPassword: string) => {
  try{
    const isMatch = await bcrypt.compare(inputPassword, userPassword)
  
    if(!isMatch) return false
  
    return true
  }
  catch(e){
    console.log(e)
    throw e
  }
}