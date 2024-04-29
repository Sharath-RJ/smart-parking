import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import API from '../../context/API'
import { useLandOwner } from '../../context/context'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const AdminPrivate = () => {
    const bool = localStorage.getItem('token') ? true : false;
    const [auth, setAuth] = useState(bool);
    const { setLandOwner } = useLandOwner()
    useEffect(()=>{
        const getUser = async() => {
            try{
                const {data} = await API.get('get-landowner')
                setAuth(true)
                setLandOwner(data.user)
            }catch(error){
                toast.error(error.response.data.message)
            }
        }
        getUser()
    }, [])
  return (
    auth ? <Outlet /> : Navigate('/login')
  )
}

export default AdminPrivate