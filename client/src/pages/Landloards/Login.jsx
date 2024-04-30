import React, { useState } from 'react'
import { toast } from 'react-toastify'
import API from '../../context/API'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email:"",
    password:""
  })
  const on_change = (e) => {
    const {name, value} = e.target
    setData((old_data)=>{
      return {
        ...old_data,
        [name]:value
      }
    })
  }
  const login = async(e)=> {
    e.preventDefault()
    console.log(data);
    try{
      const response = await API.post('landOwner/login', data)
      localStorage.setItem('token',response.data.token)
      toast.success("login successfull")
      navigate('/dashboard')
    }catch(error){
      toast.error(error)
    }
  }

  return (
   <div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="container max-w-md">
    <div class="bg-gray-200 rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={login}>
        <div class="mb-4">
          <input type="text" value={data.email} onChange={on_change} id="username" name="email" placeholder="email" required class="p-3 border border-gray-300 rounded-md transition duration-300 focus:border-gray-500 focus:outline-none w-full"/>
        </div>
        <div class="mb-4">
          <input type="password" value={data.password} onChange={on_change} id="password" name="password" placeholder="Password" required class="p-3 border border-gray-300 rounded-md transition duration-300 focus:border-gray-500 focus:outline-none w-full"/>
        </div>
        <div>
          <button type="submit" class="bg-gray-700 text-white py-3 px-4 rounded-md transition duration-300 hover:bg-gray-600 w-full">Login</button>
        </div>
        <Link to='/register'>Dont have an account ? Register</Link>
      </form>
    </div>
  </div>
</div>

  )
}

export default Login
