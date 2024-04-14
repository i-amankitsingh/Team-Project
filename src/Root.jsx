import React from "react"
import Navbar from "../src/components/Navbar"
import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Root