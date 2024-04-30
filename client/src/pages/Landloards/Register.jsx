import React from "react"
const Register = () => {
    return (
        <div className=" bg-blue-200 p-8 rounded-lg shadow-lg ">
            <div className=" bg-white w-4/6 rounded-sm mx-auto my-4 p-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    Registration Form
                </h2>
                <form>
                    <div className="grid grid-cols gap-4">
                        <div className="col-span-3 sm:col-span-1">
                            <label
                                for="latiude"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Latitude
                            </label>
                            <input
                                type="text"
                                name="latitude"
                                id="latitude"
                                autocomplete="given-name"
                                className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <label
                                for="longitude"
                                className="block text-sm font-medium text-gray-700"
                            >
                                longitude
                            </label>
                            <input
                                type="text"
                                name="longitude"
                                id="longitude"
                                autocomplete="family-name"
                                className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <label
                                for="totalSpaceAvailable"
                                className="block text-sm font-medium text-gray-700"
                            >
                                totalSpaceAvailable
                            </label>
                            <input
                                type="text"
                                name="totalSpaceAvailable"
                                id="totalSpaceAvailable"
                                autocomplete="totalSpaceAvailable"
                                className="mt-1 border-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <label
                                for="ownerName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="ownerName"
                                id="ownerName"
                                autocomplete="ownerName"
                                className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <label
                                for="ownerContact"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Contact
                            </label>
                            <input
                                type="text"
                                name="ownerName"
                                id="ownerName"
                                autocomplete="ownerName"
                                className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <label
                                for="locationAddress"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                name="locationAddress"
                                id="locationAddress"
                                autocomplete="locationAddress"
                                className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <label
                                for="userName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                userName
                            </label>
                            <input
                                type="text"
                                name="userName"
                                id="userName"
                                autocomplete="userName"
                                className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <label
                                for="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                autocomplete="email"
                                className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button
                            type="submit"
                            class="inline-flex justify-center items-center w-1/4 px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 ease-in-out"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
