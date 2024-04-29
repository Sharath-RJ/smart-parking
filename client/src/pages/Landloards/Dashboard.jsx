import React from 'react'

const Dashboard = () => {
  return (
      <div class="flex flex-col min-h-screen bg-light-blue">
          <nav class="bg-dark-blue py-2 px-4 text-white flex justify-between items-center">
              <h1>Admin Panel</h1>
              <ul class="flex space-x-4">
                  <li>
                      <button class="text-white hover:text-gray-200">
                          Settings
                      </button>
                  </li>
                  <li>
                      <button class="text-white hover:text-gray-200">
                          Help
                      </button>
                  </li>
              </ul>
          </nav>

          <main class="flex flex-wrap justify-center p-4">
              <div class="w-full md:w-1/3 p-2">
                  <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                      <h3 class="text-dark-blue text-xl font-bold mb-2">
                          Total Plots Available
                      </h3>
                      <span class="text-4xl text-dark-blue font-bold">120</span>
                  </div>
              </div>

              <div class="w-full md:w-1/3 p-2">
                  <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                      <h3 class="text-dark-blue text-xl font-bold mb-2">
                          Vehicles Parked
                      </h3>
                      <span class="text-4xl text-dark-blue font-bold">57</span>
                  </div>
              </div>

              <div class="w-full md:w-1/3 p-2">
                  <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                      <h3 class="text-dark-blue text-xl font-bold mb-2">
                          Available Parking Slots
                      </h3>
                      <span class="text-4xl text-dark-blue font-bold">63</span>
                  </div>
              </div>
          </main>
      </div>
  )
}

export default Dashboard
