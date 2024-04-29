import React from "react";
import './ProjectStyle.css'

const img = [
    { url: 'project/graphic/img1.jpg', link: 'http://himanshunegi.000.pe/#portfolio', name: 'Cold Drink', about: 'Cold Drink Comapny' },
    { url: 'project/graphic/img2.jpg', link: 'http://himanshunegi.000.pe/#portfolio', name: 'Food Banner', about: 'Food Company Banner' },
    { url: 'project/graphic/cover page.jpg', link: 'http://himanshunegi.000.pe/#portfolio', name: 'Cover Page', about: 'Notebook Cover Page Design' },
]

const Graphic = () => {
    return (
        <>
            <div className="my-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {
                    img.map((data) => (
                        <div className="card">
                    <div className="card-header w-full relative">
                        <div className="overlay w-0 h-0 overflow-hidden flex items-center justify-center absolute cursor-pointer" style={{background : 'rgba(0,0,0,.4)'}} onClick={() => location.href=data.link}>
                            <span className="text-white text-8xl">+</span>
                        </div>
                        <img src={data.url} className="w-full" />
                    </div>
                    <div className="card-text w-full px-1 py-5">
                        <a href={data.link} className="curson-pointer"><label className="block text-2xl font-medium cursor-pointer">{data.name}</label>
                        <span className="text-gray-500">{data.about}</span></a>
                    </div>
                </div>
                    ))
                }
            </div>
        </>
    )
}

export default Graphic