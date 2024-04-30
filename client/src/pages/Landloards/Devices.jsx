import React, { useEffect, useState } from 'react'
import Layout from '../../components/Admin/Layout'
import { Link } from 'react-router-dom'
import API from '../../context/API'
import { toast } from 'react-toastify'
const Devices = () => {
    const [data, setData]= useState()
    useEffect(()=>{
        async function getDevices(){
            try{
                const res = await API.get('device/getDevicesByUser')
                console.log(res);
                setData(res.data.devices)
            }catch(error){
                console.log(error);
                toast.error(error)
            }
        }
        getDevices()
    },[])
    console.log(data);
  return (
      <Layout>
          <div className="container mx-auto px-4 py-8">
              <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold">Devices</h2>
                  <Link to="/dashboard/addDevice"><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Add Device
                  </button></Link>
              </div>
              <div className="overflow-x-auto">
                  <table className="table-auto w-full border border-gray-800">
                      <thead>
                          <tr className="bg-gray-800 text-gray-100">
                              <th className="py-2 px-4 border-b border-gray-800">
                                  Device Name
                              </th>
                              <th className="py-2 px-4 border-b border-gray-800">
                                  Device ID
                              </th>
                              <th className="py-2 px-4 border-b border-gray-800">
                                  Property ID
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          {data && data.map((device, index )=>{
                              return (
                                  <tr key={index} className="hover:bg-gray-200 hover:text-gray-800">
                                      <td className="py-2 px-4 border-b border-l border-gray-800 text-center">
                                          {device.label}
                                      </td>
                                      <td className="py-2 px-4 border-b border-l border-gray-800 text-center">
                                          {device._id}
                                      </td>
                                      <td className="py-2 px-4 border-b border-l border-gray-800 text-center">
                                          {device.propertyId}
                                      </td>
                                  </tr>
                              )
                          })}
                          {/* Add more rows with data */}
                      </tbody>
                  </table>
              </div>
          </div>
      </Layout>
  )
}

export default Devices
