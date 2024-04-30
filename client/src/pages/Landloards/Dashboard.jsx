import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Layout from '../../components/Admin/Layout'
import { useLandOwner } from '../../context/context'

const Dashboard = () => {
    const {landOwner} = useLandOwner()
    console.log(landOwner);
  return (
    <Layout>
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
    </Layout>
  )
}

export default Dashboard
