import React from 'react'
import Layout from '../../components/Admin/Layout'
import { Link } from 'react-router-dom'

const Devices = () => {
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
                          <tr className="hover:bg-gray-200 hover:text-gray-800">
                              <td className="py-2 px-4 border-b border-l border-gray-800 text-center">
                                  Device 1
                              </td>
                              <td className="py-2 px-4 border-b border-l border-gray-800 text-center">
                                  123456
                              </td>
                              <td className="py-2 px-4 border-b border-l border-gray-800 text-center">
                                  7890
                              </td>
                          </tr>
                          {/* Add more rows with data */}
                      </tbody>
                  </table>
              </div>
          </div>
      </Layout>
  )
}

export default Devices
