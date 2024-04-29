import React from "react";
import ServiceCard from "./ServiceCard";

const data = [
    {img: 'img/s1.png.webp', title:'WEB DEVELOPMENT', para:'Creeping for female light years that lesser can\'t evening heaven isn\'t bearing tree'},
    {img: 'img/s2.png.webp', title:'SEO OPTIMIZATION', para:'Creeping for female light years that lesser can\'t evening heaven isn\'t bearing tree'},
    {img: 'img/s3.png.webp', title:'GRAPHIC DESIGN', para:'Creeping for female light years that lesser can\'t evening heaven isn\'t bearing tree'},
    {img: 'img/s4.png.webp', title:'CAD DESIGN', para:'Creeping for female light years that lesser can\'t evening heaven isn\'t bearing tree'},
]

const Service = () => {
    return (
        <>
            <h2 className="text-4xl font-bold mt-10 mb-7 text-center">SERVICE OFFERS</h2>
            <p className="text-center text-gray-500 w-1/2 m-auto mb-10">
            Is give may shall likeness made yielding spirit a itself togeth created after sea
            is in beast beginning signs open god you're gathering ithe
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