import React from 'react'

const Login = () => {
  return (
    <div className=' h-screen w-screen container flex items-center justify-center'>
      <form className='form w-84 bg-red-300 h-auto p-4' >
        <div className="head">
          <h1>LOGIN FORM</h1>
        </div>
        <div className="">
          <label htmlFor="email">
            name
          </label>
          <input className=' w-full border-2 border-black' type="text" id='email' placeholder='name' />
        </div>
        <div className="">
          <label htmlFor="password">
            password
          </label>
          <input type="password" id='password' placeholder='password' />
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Login
