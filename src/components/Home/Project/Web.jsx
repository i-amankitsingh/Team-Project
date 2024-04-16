import React from "react";
import './ProjectStyle.css'

const img = [
    { url: 'src/assets/project/web/hillansh.jpeg', link: 'https://www.hillansh.com', name: 'Hillansh', about: 'Adventure Company Website' },
    { url: 'src/assets/project/web/cart.png', link: 'http://www.itcourses.free.nf/index.html', name: 'Course', about: 'Course Portfolio' },
    { url: 'src/assets/project/web/portfolio.png', link: 'http://himanshunegi.000.pe', name: 'Personal Portfolio', about: 'Personal Portfolio' },
]

const Web = () => {
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

export default Web