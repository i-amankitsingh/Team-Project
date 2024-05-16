import React from "react";
import ServiceCard from "./ServiceCard";

const data = [
    {img: 'img/s1.png.webp', title:'WEB DEVELOPMENT', para:'Providing robust and scalable website solutions with a focus on user experience, performance, and seamless functionality.'},
    {img: 'img/s2.png.webp', title:'SEO OPTIMIZATION', para:' Enhancing online visibility through strategic search engine optimization techniques to drive organic traffic and improve rankings.'},
    {img: 'img/s3.png.webp', title:'GRAPHIC DESIGN', para:'Creating visually compelling designs that effectively communicate your brand’s message and engage your audience.'},
    {img: 'img/s4.png.webp', title:'CAD DESIGN', para:'Delivering precise and innovative CAD design services for various engineering, architectural, and product development projects.'},
]

const Service = () => {
    return (
        <>
            <h2 className="text-4xl font-bold mt-10 mb-7 text-center">SERVICE OFFERS</h2>
            <p className="text-center text-gray-500 w-1/2 m-auto mb-10">
            We offer a comprehensive suite of services including web development, SEO, graphic design, and CAD design. Our team ensures high-quality, tailored solutions to meet all your digital and design needs.
            </p>
            <main className="md:w-3/4 w-full m-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 px-12 my-10">
                <ServiceCard img={data[0].img} title={data[0].title} para={data[0].para} />
                <ServiceCard img={data[1].img} title={data[1].title} para={data[1].para} />
                <ServiceCard img={data[2].img} title={data[2].title} para={data[2].para} />
                <ServiceCard img={data[3].img} title={data[3].title} para={data[3].para} />
            </main>
        </>
    )
}

export default Service