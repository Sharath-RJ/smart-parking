import React from 'react'

const Dashboard = () => {
  return (
      <div className="flex">
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
                              <button className="flex items-center w-full bg-gray-700 hover:bg-gray-600 rounded-lg p-2 transition-colors duration-300">
                                  <span className="mr-2">Dashboard</span>
                              </button>
                          </li>
                          <li>
                              <button className="flex items-center w-full bg-gray-700 hover:bg-gray-600 rounded-lg p-2 transition-colors duration-300">
                                  <span className="mr-2">Property</span>
                              </button>
                          </li>
                          <li>
                              <button className="flex items-center w-full bg-gray-700 hover:bg-gray-600 rounded-lg p-2 transition-colors duration-300">
                                  <span className="mr-2">Device</span>
                              </button>
                          </li>
                      </ul>
                      {/* Logout Button */}
                      <div className="mt-8">
                          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                              Logout
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="w-3/4 h-screen">
              <div className="flex w-full md:w-3/4">
                  <main className="flex flex-wrap justify-center p-4 w-full">
                      <div className="w-full md:w-1/3 p-2">
                          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                              <h3 className="text-dark-blue text-xl font-bold mb-2">
                                  Total Plots Available
                              </h3>
                              <span className="text-4xl text-dark-blue font-bold">
                                  120
                              </span>
                          </div>
                      </div>

                      <div className="w-full md:w-1/3 p-2">
                          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                              <h3 className="text-dark-blue text-xl font-bold mb-2">
                                  Vehicles Parked
                              </h3>
                              <span className="text-4xl text-dark-blue font-bold">
                                  57
                              </span>
                          </div>
                      </div>

                      <div className="w-full md:w-1/3 p-2">
                          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                              <h3 className="text-dark-blue text-xl font-bold mb-2">
                                  Available Parking Slots
                              </h3>
                              <span className="text-4xl text-dark-blue font-bold">
                                  63
                              </span>
                          </div>
                      </div>
                  </main>
              </div>
          </div>
      </div>
  )
}

export default Dashboard
