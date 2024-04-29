import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between py-4 px-16 bg-black text-white font-sans'>
        <h1 className=' text-3xl font-bold'>Smart-Park</h1>
        <ul className="list flex gap-4 text-2xl">
        <li>Home</li>
        <li>Devices</li>
        <li>Profile</li>
        <li>Logout</li>
        </ul>
    </div>
  )
}

export default Navbar
