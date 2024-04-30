import { toast } from "react-toastify"
import Layout from "../../components/Admin/Layout"
import { useEffect, useState } from "react"
import API from "../../context/API"
const DeviceAdd = () => {
    const [name, setName] = useState()
    const [propertyId, setPropertyId] = useState()
    const [properties, setProperties] = useState()
    useEffect(()=>{
        const getProperty = async() => {
            try{
                // const response = await API.get('property/getPropertiesByUser')
                // console.log(response);
                // setProperties(response.data.properties)
            }catch(error){
                console.log(error);
                toast.error(error)
            }
        }
        getProperty()
    })
    const add_device = async(e) => {
        e.preventDefault()
        try{
            await API.post('device/addDevice', {name, propertyId})
            toast.success("device added")
        }catch(error){
            console.log(error);
            toast.error(error)
        }
    }
    return (
        <Layout>
            <div class="bg-white shadow-md rounded px-8 py-6 w-96">
                <h2 class="text-center text-lg font-semibold mb-4">
                    Add Your Device Here
                </h2>
                <form>
                    <div class="mb-4" onSubmit={add_device}>
                        <label
                            for="propertyName"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            onChange={(e)=>{setName(e.target.value)}}
                            value={name}
                            type="text"
                            id="propertyName"
                            name="name"
                            class="form-field shadow-sm mt-1 border-2 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"
                        />
                        {/* <select name="property" onChange={(e)=>{setPropertyId(e.target.value)}} id="">
                            {properties && properties.map((property)=>{
                                <option value={property._id}>{property.name}</option>
                            })}
                        </select> */}
                        <input
                            onChange={(e)=>{setPropertyId(e.target.value)}}
                            value={propertyId}
                            type="text"
                            id="propertyName"
                            name="propertyId"
                            class="form-field shadow-sm mt-1 border-2 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"
                        />
                    </div>

                    <div class="flex items-center justify-between">
                        <button
                            type="submit"
                            class="bg-blue-500 hover:bg-blue-600 text-white border-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default DeviceAdd
