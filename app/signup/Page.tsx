import React from 'react'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <form className="flex flex-col w-1/2 mt-8" action="/api/signup" method="POST">
        <label htmlFor="name" className="text-lg mb-2">Name</label>
        <input type="text" id="name" name="name" className="border p-2" />
        <label htmlFor="email" className="text-lg mb-2">Email</label>
        <input type="email" id="email" name="email" className="border p-2" />
        <label htmlFor="password" className="text-lg mb-2">Password</label>
        <input type="password" id="password" name="password" className="border p-2" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
          Sign Up
        </button>
      </form>
    </div>
  )
}
