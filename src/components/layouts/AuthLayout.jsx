import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { Drawer } from '../Drawer'
import { getProfile } from '../../libs/axios/getProfile'
export const AuthContext = createContext()

export function AuthLayout() {
    const [profile, setProfile] = useState(null)

    useEffect(() => {
            getProfile()
                .then((response) => setProfile(response.data))
                .catch(error => console.log(error))

    }, [])
    return (

        <AuthContext.Provider value={{
            profile
        }}>
            {profile &&
            <div>
            <Drawer />
            <Outlet />
        </div>}
        </AuthContext.Provider>

    )
}