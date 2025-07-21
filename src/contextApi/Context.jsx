import React, { useState } from 'react'
import { createContext } from 'react'

export const addResponseContext = createContext()
export const editResponseContext = createContext()
export const authContext = createContext()


function Context({ children }) {

    const [addResponse, setAddResponse] = useState("")
    const [editResponse, setEditResponse] = useState("")
    const [authStatus, setAuthStatus] = useState(true)


    return (
        <>
            <authContext.Provider value={{ authStatus, setAuthStatus }}>
                <addResponseContext.Provider value={{ addResponse, setAddResponse }}>
                    <editResponseContext.Provider value={{ editResponse, setEditResponse }}>
                        {children}
                    </editResponseContext.Provider>
                </addResponseContext.Provider>
            </authContext.Provider>
        </>
    )
}

export default Context
