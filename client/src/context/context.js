import { createContext, useContext, useState } from "react"

export const context = createContext()

const ContextProvider = ({ children }) => {
    const [landOwner, setLandOwner] = useState({})
    return (
        <context.Provider value={{landOwner, setLandOwner}}>
            {children}
        </context.Provider>
    )
}

export const useLandOwner = () => useContext(context)

export default ContextProvider