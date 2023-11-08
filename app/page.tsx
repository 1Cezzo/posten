'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { saveUserData } from '../fireBaseFunctions' // Import the Firebase functions

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      const message = saveUserData(email, password) // Save user data to Firebase
      setEmail('')
      setPassword('')
      setSuccessMessage(await message)
      setErrorMessage('')
    } catch (error) {
      console.error(error)
      setErrorMessage('An error occurred')
      setSuccessMessage('')
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="p-4">
        <Image src="/posten_logo.svg" alt="Posten Logo" width={300} height={100} />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-5xl font-bold mb-8">Hello Laszlo Erdodi</h1>
        <h2 className="text-3xl font-semibold mb-4">Log in to Posten</h2>
        <form className="flex flex-col w-full max-w-xs" onSubmit={handleSubmit}>
          <label htmlFor="email" className="mb-2">
            Email:
          </label>
          <input type="email" id="email" className="p-2 mb-4" value={email} onChange={handleEmailChange} />
          <label htmlFor="password" className="mb-2">
            Password:
          </label>
          <input type="password" id="password" className="p-2 mb-4" value={password} onChange={handlePasswordChange} />
          <button className="bg-blue-500 text-white p-2 rounded-lg">Log In</button>
        </form>
        {successMessage && successMessage.length > 0 && (
          <p className="text-green-600 mt-4">{successMessage}</p>
        )}
        {errorMessage && errorMessage.length > 0 && (
          <p className="text-red-600 mt-4">{errorMessage}</p>
        )}
        <p className="mt-4">
        Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
