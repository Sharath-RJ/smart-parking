import Layout from "../../components/Admin/Layout"

const DeviceAdd = () => {
    return (
        <Layout>
            <div class="bg-white shadow-md rounded px-8 py-6 w-96">
                <h2 class="text-center text-lg font-semibold mb-4">
                    Add Your Device Here
                </h2>
                <form>
                    <div class="mb-4">
                        <label
                            for="propertyName"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="propertyName"
                            name="propertyName"
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
