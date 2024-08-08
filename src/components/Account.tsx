"use client"

import { handleLogout } from '@/actions/logout'
import { useRouter } from 'next/navigation'
import React from 'react'

// let REDIRECT_URL = ""

const Account = () => {

  const router = useRouter()
  // REDIRECT_URL = searchParams.redirect ? searchParams.redirect : REDIRECT_URL

  // const handleBack = () => {
  //   const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
  //     const [name, value] = cookie.split('=');
  //     acc[name] = value;
  //     return acc;
  //   }, {});

  //   console.log(cookies.redirect);
  //   const redirectUrl = decodeURIComponent(cookies.redirect);
  //   router.push(redirectUrl)


  // }

  return (
    <form className='h-full w-full flex flex-col items-center gap-6 px-4 py-10' action={handleLogout}>
      <h1>Account</h1>
      <button className='border text-accent border-accent hover:bg-accent hover:text-black text-17 rounded-lg p-4'>Sign out</button>
      {/* <button className='border p-4' type='button' onClick={handleBack}>Back to Website</button> */}
    </form>
  )
}

export default Account