import React from "react";

const Slider = () => {
    return (
        <>
            <section className="w-full flex justify-center items-center gap-10 py-5 px-10">
                <div className="lg:w-auto w-full">
                    <h2 className="text-4xl font-bold flex align-middle ">Hello <span className="block ml-5">_______________________</span></h2>
                    <h1 className="text-6xl my-4">We Are TeamDev</h1>
                    <span className="text-2xl">Professional Web Devloper , Graphic Designer & Interior/Exterior Designer</span>
                    <div className="my-4">
                        <button className="bg-gradient-to-r from-custom-blue to-custom-purple hover:from-transparent border border-custom-blue border-2 hover:to-transparent text-white hover:text-black py-3 px-10 rounded transition-colors duration-500">HIRE US</button>
                        <a href="public/My CV.pdf" download><button className="border border-custom-purple border-2 py-3 px-10 ml-3 rounded bg-gradient-to-r hover:from-custom-purple hover:to-custom-blue hover:text-white transition-colors duration-500">GET CV</button></a>
                    </div>
                </div>
                <div className="lg:block hidden">
                    <img src='public/img/home-right.png.webp' />
                </div>
            </section>
        </>
    )
}

export default Slider