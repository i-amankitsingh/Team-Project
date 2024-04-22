import React from "react";
import BreadCrumb from "./BreadCrumb";
import Work from './Home/Work'


const Portfolio = () => {
    return (
        <>
            <BreadCrumb about='PORTFOLIO' loc='Home - Portfolio' />
            <Work /> 
        </>
    )
}

export default Portfolio