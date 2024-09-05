import React, {useState } from "react";
import {Link, NavLink} from 'react-router-dom'
import Logo from '/img/logo.png'

const Navbar = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <>
            <nav className="w-full sticky top-0 z-10 flex lg:justify-around justify-between items-center lg:bg-gray-100 bg-black py-5 px-5">
                <div className="logo">
                    <Link to="/">
                         <img src={Logo} className="w-36" />
                    </Link>
                </div>
                <div className={`menu absolute lg:relative lg:mt-0 lg:top-0 lg:py-0 py-5 lg:w-auto left-0 top-12 mt-7 w-full ${toggle? 'transform scale-y-0 lg:scale-y-100' : 'transform scale-y-100'} origin-top  transition-transform duretion-500 ease transform-o px-5 lg:bg-transparent bg-black`}>
                    <ul className="sm:block lg:flex lg:gap-11 leading-10">
                        <li>
                            <NavLink to="/" className={({isActive}) => 
                                `font-medium text-sm ${isActive ? 'text-[#4458dc]' : 'text-white lg:text-black'}`
                            }>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive}) => 
                                `font-medium text-sm ${isActive ? 'text-[#4458dc]' : 'text-white lg:text-black'}`
                            }>
                                ABOUT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/service" className={({isActive}) => 
                                `font-medium text-sm ${isActive ? 'text-[#4458dc]' : 'text-white lg:text-black'}`
                            }>
                                SERVICE
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" className={({isActive}) => 
                                `font-medium text-sm ${isActive ? 'text-[#4458dc]' : 'text-white lg:text-black'}`
                            }>
                                PORTFOLIO
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({isActive}) => 
                                `font-medium text-sm ${isActive ? 'text-[#4458dc]' : 'text-white lg:text-black'}`
                            }>
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <button className="text-3xl text-white lg:hidden block" onClick={() => setToggle(toggle? false : true)}><i className="fa fa-bars"></i></button>
            </nav>
        </>
    )
}

export default Navbar;