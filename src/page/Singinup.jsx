import React from 'react'

export default function singinup() {
  return (
    <div>
      <h1>this is sign up page </h1>
        <form className="flex flex-col w-1/3 mx-auto mt-4">
            <label htmlFor="email" className="mb-2 font-bold">Email:</label>
            <input type="email" id="email" className="border p-2 mb-4" placeholder="Enter your email" />
            <label htmlFor="password" className="mb-2 font-bold">Password:</label>
            <input type="password" id="password" className="border p-2 mb-4" placeholder="Enter your password" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Signup</button>
        </form>
    </div>
  )
}
