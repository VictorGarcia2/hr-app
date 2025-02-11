import React from 'react'
import { Drawer } from '../Drawer'
import { Outlet } from 'react-router'

export default function AuthLayout() {
    return (
        <div className=''>
            <Drawer />
            <Outlet/>
        </div>
    )
}
