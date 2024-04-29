import React from 'react'

const Login = () => {
  return (
   <div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="container max-w-md">
    <div class="bg-gray-200 rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-semibold mb-4 text-center">Login</h2>
      <form>
        <div class="mb-4">
          <input type="text" id="username" name="username" placeholder="Username" required class="p-3 border border-gray-300 rounded-md transition duration-300 focus:border-gray-500 focus:outline-none w-full"/>
        </div>
        <div class="mb-4">
          <input type="password" id="password" name="password" placeholder="Password" required class="p-3 border border-gray-300 rounded-md transition duration-300 focus:border-gray-500 focus:outline-none w-full"/>
        </div>
        <div>
          <button type="submit" class="bg-gray-700 text-white py-3 px-4 rounded-md transition duration-300 hover:bg-gray-600 w-full">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default Login
