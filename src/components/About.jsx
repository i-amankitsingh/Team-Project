import React from "react";
import BreadCrumb from "./BreadCrumb";
import AboutUs from './Home/AboutUs'
import Client from './Home/Client'


const About = () => {
    return (
        <>
            <BreadCrumb about='ABOUT US' loc='Home - About' />
            <AboutUs />
            <Client />
        </>
    )
}

export default About