import React from "react";
import BreadCrumb from "./BreadCrumb";
import HomeService from './Home/Service'
import Client from './Home/Client'

const Service = () => {
    
    return (
        <>
            <BreadCrumb about='SERVICES' loc='Home - Services' />
            <HomeService />
            <Client />
        </>
    )
}

export default Service