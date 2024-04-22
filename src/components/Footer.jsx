import React from "react";
import Logo from '../assets/img/logo.png.webp'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className="md:flex justify-around p-10">
                <div>
                    <img src={Logo} />
                    <div className="mt-16 mb-10">
                        <div className="flex gap-5">
                            <i className="fa fa-home text-[#4458dc] text-2xl"></i>
                            <div>
                                <strong className="block">Uttarakhand, India</strong>
                                <span>Rishikesh, Dehradun</span>
                            </div>
                        </div>
                        <div className="flex gap-5 my-5">
                            <i className="fa fa-phone text-[#4458dc] text-2xl"></i>
                            <div>
                                <strong className="block">+91 6397022305</strong>
                                <span>Mon to Sat 9am to 7pm</span>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <i className="fa fa-envelope text-[#4458dc] text-xl"></i>
                            <div>
                                <strong className="block">rixronger@gmail.com</strong>
                                <span>Send your query anytime.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:flex gap-8">
                    <ul className="space-y-4 mb-5">
                        <li className="font-medium">RESOURCES</li>
                        <li className="text-gray-500 font-medium">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="text-gray-500 font-medium">
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                    <ul className="space-y-4 mb-5">
                        <li className="font-medium">FOLLOW US</li>
                        <li className="text-gray-500 font-medium">
                            <Link to=''>GitHub</Link>
                        </li>
                        <li className="text-gray-500 font-medium">
                            <Link to=''>Discourd</Link>
                        </li>
                    </ul>
                    <ul className="space-y-4 mb-5">
                        <li className="font-medium">LEGAL</li>
                        <li className="text-gray-500 font-medium">
                            <Link to=''>Privacy Policy</Link>
                        </li>
                        <li className="text-gray-500 font-medium">
                            <Link to=''>Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="border border-t-gray-300 md:flex justify-around py-3 px-10">
                <span className="block sm:mb-0 mb-2">&copy; 2024 TeamDev. All Right Reserved.</span>
                <div className="text-gray-500 flex gap-5 text-lg">
                    <a href=""><i className="fa fa-instagram"></i></a>
                    <a href=""><i className="fa fa-whatsapp"></i></a>
                    <a href=""><i className="fa fa-linkedin"></i></a>
                    <a href=""><i className="fa fa-twitter"></i></a>
                </div>
            </div>
        </>
    )
}

export default Footer