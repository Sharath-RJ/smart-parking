import React, { useState } from "react"
import API from '../../context/API'
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
const Register = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
        ownerContact:"",
        ownerAddress:""
    })
    const on_change = (e) => {
        const { name, value } = e.target
        setData((prev) => ({ ...prev, [name]: value }))
    }
    const register = async(e)=> {
        e.preventDefault()
        console.log('submitting ',data);
        try{
            await API.post('/landOwner/register', data)
            toast.success("registration successfull")
            navigate('/login')
        }catch(error){
            toast.error(error)
        }
    }
    return (
        <div className=" bg-blue-200 p-8 rounded-lg shadow-lg ">
            <div className=" bg-white w-4/6 rounded-sm mx-auto my-4 p-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    Registration Form
                </h2>
                <form onSubmit={register}>
                    <div className="grid grid-cols gap-4">
                        <div className="col-span-3 sm:col-span-1">
                            <label
                                for="ownerName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                onChange={on_change}
                                value={data.name}
                                type="text"
                                name="name"
                                id="ownerName"
                                autocomplete="ownerName"
                                className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <label
                                for="ownerContact"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Contact
                            </label>
                            <input
                                onChange={on_change}
                                value={data.ownerContact}
                                type="text"
                                name="ownerContact"
                                id="ownerName"
                                autocomplete="ownerName"
                                className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <label
                                for="locationAddress"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Address
                            </label>
                            <input
                                onChange={on_change}
                                value={data.ownerAddress}
                                type="text"
                                name="ownerAddress"
                                id="locationAddress"
                                autocomplete="locationAddress"
                                className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <label
                                for="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                onChange={on_change}
                                value={data.email}
                                type="text"
                                name="email"
                                id="email"
                                autocomplete="email"
                                className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <label
                                for="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                password
                            </label>
                            <input                                
                            onChange={on_change}
                                value={data.password}
                                type="text"
                                name="password"
                                id="password"
                                autocomplete="email"
                                className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button
                            type="submit"
                            class="inline-flex justify-center items-center w-1/4 px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 ease-in-out"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
