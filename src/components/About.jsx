import React from "react";
import BreadCrumb from "./BreadCrumb";
import AboutUs from './Home/AboutUs'
import Client from './Home/Client'


const About = () => {
    return (

        // <h1 className="text-center bg-green-600 py-8">This Is About Page</h1>
        <>
            <BreadCrumb about='ABOUT US' loc='Home - About' />
            <AboutUs />
            <Client />
        </>

    )
}

export default About