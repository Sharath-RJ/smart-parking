import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import API from '../../context/API'
import { useLandOwner } from '../../context/context'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const AdminPrivate = () => {
    const bool = localStorage.getItem('token') ? true : false;
    const [auth, setAuth] = useState(true);
    const { setLandOwner } = useLandOwner()
    useEffect(()=>{
        const getUser = async() => {
            try{
                const {data} = await API.get('/landOwner/get-landOwner')
                setAuth(true)
                setLandOwner(data.user)
            }catch(error){
                // setAuth(false)
                toast.error(error.response && error.response.data.message)
            }
        }
        getUser()
    }, [])
    console.log(auth);
  return (auth ? <Outlet /> : <Navigate to="/login" />)
}

export default AdminPrivate