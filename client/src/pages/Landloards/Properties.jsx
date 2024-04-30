import { Link } from "react-router-dom"
import Layout from "../../components/Admin/Layout"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import API from "../../context/API"


const Properties = ()=> {
    const [properties, setProperties] = useState()
    useEffect(()=>{
        async function getProperties(){
            try{
                const res = await API.get('property/getPropertiesByUser')
                setProperties(res.data.properties)
            }catch(error){
                toast.error(error)
            }
        }
        getProperties()
    },[])
    console.log(properties);
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
                            {properties && properties.map((property)=>{
                                return (
                                    
                                <tr className="hover:bg-gray-200 hover:text-gray-800">
                                    <td className="py-2 px-4 border-b border-l border-gray-800 text-center">
                                        {property._id}
                                    </td>
                                    <td className="py-2 px-4 border-b border-l border-gray-800 text-center">
                                        {property.name}
                                    </td>
                                    <td className="py-2 px-4 border-b border-l border-gray-800 text-center">
                                        {property.devices.length}
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default Properties