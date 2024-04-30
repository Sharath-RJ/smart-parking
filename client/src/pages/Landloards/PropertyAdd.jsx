import Layout from "../../components/Admin/Layout"

const PropertyAdd = () => {
    return (
        <Layout>
      <div class="bg-white shadow-md rounded px-8 py-6 w-96">
        <h2 class="text-center text-lg font-semibold mb-4">Add Your Property Here</h2>
        <form>
             <div class="mb-4">
                <label for="propertyName" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="propertyName" name="propertyName" class="form-field shadow-sm mt-1 border-2 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"/>
            </div>
            <div class="mb-4">
                <label for="spaceType" class="block text-sm font-medium text-gray-700">Space Type</label>
                <input type="text" id="spaceType" name="spaceType" class="form-field shadow-sm mt-1 border-2 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"/>
            </div>
            <div class="mb-4">
                <label for="spaceAvailable" class="block text-sm font-medium text-gray-700">Space Available</label>
                <input type="text" id="spaceAvailable" name="spaceAvailable" class="form-field border-2 shadow-sm mt-1 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"/>
            </div>
            <div class="mb-4">
                <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                <input type="text" id="location" name="location" class="form-field shadow-sm border-2 mt-1 block w-full rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200"/>
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