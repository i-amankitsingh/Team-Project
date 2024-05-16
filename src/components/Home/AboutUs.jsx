import React from "react";

const AboutUs = () => {
    return (
        <>
            <section className="lg:flex py-3 px-10 justify-center items-center gap-10">
                <div className="lg:w-1/2 w-full">
                    <img src="img/about-us.png.webp" />
                </div>
                <div className="lg:w-1/2 w-full px-5">
                    <div className="">
                        <h2 className="text-3xl font-bold my-5">LET'S INTRODUCED ABOUT OURSELVES</h2>
                        <p className="text-lg text-gray-500">
                        We are a dedicated team offering comprehensive digital solutions. Our expertise spans website development with robust backend systems, graphic design, and CAD design, ensuring tailored, high-quality services for our clients.
                        </p>
                        <p className="text-lg text-gray-500 my-5">
                        
                        We are a versatile team specializing in website development with robust backend solutions, graphic design, and CAD design. We cater to diverse client needs, delivering high-quality, tailored services to enhance their digital presence and design projects. Our expertise ensures comprehensive solutions from concept to execution, providing seamless and innovative results.
                        </p>
                        <button className="bg-gradient-to-r from-custom-blue to-custom-purple hover:from-transparent border border-custom-blue border-2 hover:to-transparent text-white hover:text-black py-3 px-10 rounded transition-colors duration-500">DOWNLOAD CV</button>
                    </div>
                </div>
            </section>
            <main className="lg:flex py-3 px-10 justify-cente items-center gap-12">
                <div className="lg:w-1/2 w-full flex lg:justify-end justify-center">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5" id="company-logo">
                        <div className="py-3">
                            <img src="img/Company1.jpg"  />
                        </div>
                        <div className="py-3">
                        <img src="img/Company2.jpg" />
                        </div>
                        <div className="py-3">
                        <img src="img/Company3.png" />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full lg:my-0 my-10 flex justify-center items-center flex-col">
                    <div className="relative">
                        <img src="img/client-info-bg.png.webp" />
                        <div className="flex absolute top-0 ml-12 gap-5 mt-10">
                            <span className="text-7xl font-bold text-custom-purple">10</span>
                            <span className="text-lg font-bold w-10 block">Years Experience Working</span>
                        </div>
                    </div>
                    <div className="flex my-10">
                        <i className="fa fa-phone text-6xl"></i>
                        <div className="mx-5">
                            <a href="tel: +91 6397022305" className="block text-custom-purple">CALL US NOW</a>
                            <a href="tel: +91 6397022305" className="text-lg font-bold">+91 6397022305</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutUs