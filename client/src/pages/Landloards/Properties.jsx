import { Link } from "react-router-dom"
import Layout from "../../components/Admin/Layout"
import { useState } from "react"


const Properties = ()=> {
    const [properties, setProperties] = useState()
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold">Properties</h2>
                    <Link to="/dashboard/addProperty"><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add Property
                    </button></Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border border-gray-800">
                        <thead>
                            <tr className="bg-gray-800 text-gray-100">
                                <th className="py-2 px-4 border-b border-gray-800">
                                    Property ID
                                </th>
                                <th className="py-2 px-4 border-b border-gray-800">
                                    Property Name
                                </th>
                                <th className="py-2 px-4 border-b border-gray-800">
                                    No of Slot
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-200 hover:text-gray-800">
                                <td className="py-2 px-4 border-b border-l border-gray-800 text-center">
                                    74t349uue0wiw-0
                                </td>
                                <td className="py-2 px-4 border-b border-l border-gray-800 text-center">
                                    web3456
                                </td>
                                <td className="py-2 px-4 border-b border-l border-gray-800 text-center">
                                    40
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default Properties