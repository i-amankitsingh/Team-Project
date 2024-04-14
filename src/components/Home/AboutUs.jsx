import React from "react";
import './Style.css'

const AboutUs = () => {
    return (
        <>
            <section className="lg:flex py-3 px-10 justify-center items-center gap-10">
                <div className="lg:w-1/2 w-full">
                    <img src="src/assets/img/about-us.png.webp" />
                </div>
                <div className="lg:w-1/2 w-full px-5">
                    <div className="">
                        <h2 className="text-3xl font-bold my-5">LET'S INTRODUCED ABOUT OURSELVES</h2>
                        <p className="text-lg text-gray-500">
                        Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their. Beast creepeth. Fish days.
                        </p>
                        <p className="text-lg text-gray-500 my-5">
                        Is give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering whose gathered cattle let. Creature whales fruit unto meat the life beginning all in under give two.
                        </p>
                        <button className="bg-gradient-to-r from-custom-blue to-custom-purple hover:from-transparent border border-custom-blue border-2 hover:to-transparent text-white hover:text-black py-3 px-10 rounded transition-colors duration-500">DOWNLOAD CV</button>
                    </div>
                </div>
            </section>
            <main className="lg:flex py-3 px-10 justify-cente items-center gap-12">
                <div className="lg:w-1/2 w-full flex lg:justify-end justify-center">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5" id="company-logo">
                        <div className="py-3">
                            <img src="src/assets/img/company1.jpg"  />
                        </div>
                        <div className="py-3">
                        <img src="src/assets/img/company2.jpg" />
                        </div>
                        <div className="py-3">
                        <img src="src/assets/img/company3.png" />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full lg:my-0 my-10 flex justify-center items-center flex-col">
                    <div className="relative">
                        <img src="src/assets/img/client-info-bg.png.webp" />
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