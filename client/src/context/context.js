import { createContext, useContext, useState } from "react"

export const context = createContext()

const ContextProvider = ({ children }) => {
    const [landowner, setLandOwner] = useState({})
    return (
        <context.Provider value={{landowner, setLandOwner}}>
            {children}
        </context.Provider>
    )
}

export const useLandOwner = () => useContext(context)

export default ContextProvider