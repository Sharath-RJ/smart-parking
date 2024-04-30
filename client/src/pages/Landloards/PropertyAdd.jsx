import { toast } from "react-toastify"
import Layout from "../../components/Admin/Layout"
import API from "../../context/API"
import { useEffect, useState } from "react"

const PropertyAdd = () => {
    const [data, setData] = useState({
        name:"",
        spaceType:"",
        spaceAvailable:"",
        longitude:"",
        latitude:""
    })
    useEffect(() => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setData((prev)=>({...prev, longitude, latitude}))
            },
            (error) => {
              console.error("Error getting location:", error.message);
            }
          );
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }, []);
    const on_change = (e) => {
        const {name, value} = e.target
        setData((old_data)=>{
            return {
                ...old_data,
                [name]:value
            }
        })
    }
    function clearInput(){
        setData({
            name:"",
            spaceType:"",
            spaceAvailable:"",
            longitude:"",
            latitude:""
        })
    }
    const add_property = async(e)=> {
        e.preventDefault()
        console.log(data);
        try{
            const res = await API.post('property/addProperty', data)
            toast.success("property added")
            clearInput()
        }catch(error){
            toast.error(error)
        }
    }
    return (
        <Layout>
      <div class="bg-white shadow-md rounded px-8 py-6 w-96">
        <h2 class="text-center text-lg font-semibold mb-4">Add Your Property Here</h2>
        <form onSubmit={add_property}>
             <div class="mb-4">
                <label for="propertyName" class="block text-sm font-medium text-gray-700">Name</label>
                <input value={data.name} onChange={on_change} type="text" id="propertyName" name="name" class="form-field shadow-sm mt-1 border-2 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"/>
            </div>
            <div class="mb-4">
                <label for="spaceType" class="block text-sm font-medium text-gray-700">Space Type : sf, ms</label>
                <input value={data.spaceType} onChange={on_change} type="text" id="spaceType" name="spaceType" class="form-field shadow-sm mt-1 border-2 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"/>
            </div>
            <div class="mb-4">
                <label for="spaceAvailable" class="block text-sm font-medium text-gray-700">Space Available</label>
                <input value={data.spaceAvailable} onChange={on_change} type="text" id="spaceAvailable" name="spaceAvailable" class="form-field border-2 shadow-sm mt-1 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"/>
            </div>
            <div class="mb-4">
                <label for="location" class="block text-sm font-medium text-gray-700">longitude</label>
                <input value={data.longitude} onChange={on_change} type="number" id="location" name="longitude" class="form-field shadow-sm border-2 mt-1 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"/>
            </div>
            <div class="mb-4">
                <label for="location" class="block text-sm font-medium text-gray-700">latitude</label>
                <input value={data.latitude} onChange={on_change} type="number" id="location" name="latitude" class="form-field shadow-sm border-2 mt-1 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"/>
            </div>
            <div class="flex items-center justify-between">
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white border-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </div>
        </form>
    </div>
    </Layout>
    )
}

export default PropertyAdd