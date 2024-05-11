import React, {useEffect} from "react"
import Navbar from "../src/components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root