import React, { useState, useTransition } from "react";
import All from "./Project/All";
import Web from './Project/Web'
import Graphic from './Project/Graphic'
import CAD from './Project/CAD'



const Work = () => {
    // const [show, setShow] = useState(<All />)
    // const Project = (num) => {
    //     if(num === 2){
    //         setShow(<Web />)
    //     }
    //     else if(num === 3){
    //         setShow(<Graphic />)
    //     }
    //     else if(num === 4){
    //         setShow(<CAD />)
    //     }
    //     else{
    //         setShow(<All />)
    //     }
    // }

    const [category, setCategory] = useState('all')

    const showProject = (cat) => {
        setCategory(cat)
    }
    return (
        <>
            <section className="w-3/4 m-auto mt-28">
                <h2 className="text-3xl font-bold">QUALITY WORK</h2>
                <h2 className="text-3xl font-bold">RECENTLY DONE PROJECT</h2>
                <div className="my-10">
                    <ul className="md:flex lg:leading-none leading-10 gap-10">
                        <li className={`font-bold cursor-pointer ${category === 'all'? 'text-[#4458dc]' : 'text-black'}`} onClick={() => showProject('all')}>
                            All
                        </li>
                        <li className={`font-bold cursor-pointer ${category === 'web'? 'text-[#4458dc]' : 'text-black'}`} onClick={() => showProject('web')}>
                            
                                Web Developement
                            
                        </li>
                        <li className={`font-bold cursor-pointer ${category === 'graphic'? 'text-[#4458dc]' : 'text-black'}`} onClick={() => showProject('graphic')}>
                                Graphic Desing
                        </li>
                        <li className={`font-bold cursor-pointer ${category === 'cad'? 'text-[#4458dc]' : 'text-black'}`} onClick={() => showProject('cad')}>
                                CAD Design
                        </li>
                    </ul>
                </div>
                <div className="my-10">
                    {/* {show} */}
                    {category === 'all' && <All />}
                    {category === 'web' && <Web />}
                    {category === 'graphic' && <Graphic />}
                    {category === 'cad' && <CAD />}
                </div>
            </section>
        </>
    )
}

export default Work