import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLandOwner } from '../../context/context'
const Sidebar = () => {
    const { setLandOwner } = useLandOwner()
    const navigate = useNavigate()
    const logout = ()=> {
        localStorage.removeItem('token')
        setLandOwner(null)
        navigate('/login')
    }
  return (
    <div className="w-1/4 h-screen">
    <div className="bg-gray-800 text-gray-100 h-full w-64 fixed overflow-y-auto">
        {/* Sidebar Header */}
        <div className="flex items-center justify-center h-16 border-b border-gray-600">
            <span className="text-lg font-semibold">Admin Panel</span>
        </div>
        {/* Sidebar Content */}
        <div className="p-4">
            {/* Sidebar Links */}
            <ul className="space-y-4">
                <li>
                    <Link to='/dashboard' ><button className="flex items-center w-full bg-gray-700 hover:bg-gray-600 rounded-lg p-2 transition-colors duration-300">
                        <span className="mr-2">Dashboard</span>
                    </button></Link>
                </li>
                <li>
                    <Link to='/dashboard/properties' ><button className="flex items-center w-full bg-gray-700 hover:bg-gray-600 rounded-lg p-2 transition-colors duration-300">
                        <span className="mr-2">Property</span>
                    </button></Link>
                </li>
                <li>
                    <Link to='/dashboard/devices' ><button className="flex items-center w-full bg-gray-700 hover:bg-gray-600 rounded-lg p-2 transition-colors duration-300">
                        <span className="mr-2">Device</span>
                    </button></Link>
                </li>
            </ul>
            {/* Logout Button */}
            <div className="mt-8">
                <button onClick={logout} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                    Logout
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Sidebar
