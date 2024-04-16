import React from "react";
import './ProjectStyle.css';

const img = [
    { url: 'src/assets/project/web/hillansh.jpeg', link: 'https://www.hillansh.com', name: 'Hillansh', about: 'Adventure Company Website' },
    { url: 'src/assets/project/web/cart.png', link: 'http://www.itcourses.free.nf/index.html', name: 'Course', about: 'Course Portfolio' },
    { url: 'src/assets/project/web/portfolio.png', link: 'http://himanshunegi.000.pe', name: 'Personal Portfolio', about: 'Personal Portfolio' },
    { url: 'src/assets/project/graphic/img1.jpg', link: 'http://himanshunegi.000.pe/#portfolio', name: 'Cold Drink', about: 'Cold Drink Comapny' },
    { url: 'src/assets/project/graphic/img2.jpg', link: 'http://himanshunegi.000.pe/#portfolio', name: 'Food Banner', about: 'Food Company Banner' },
    { url: 'src/assets/project/graphic/cover page.jpg', link: 'http://himanshunegi.000.pe/#portfolio', name: 'Cover Page', about: 'Notebook Cover Page Design' },
    { url: 'src/assets/project/cad/iimg1.jpg', link: 'http://himanshunegi.000.pe/#portfolio', name: 'Interior Design', about: 'Kitchen Interior Design' },
    { url: 'src/assets/project/cad/iimg2.jpg', link: 'http://himanshunegi.000.pe/#portfolio', name: 'House Interior', about: 'Drawing Room Interior Design' },
    { url: 'src/assets/project/cad/eimg1.jpg', link: 'http://himanshunegi.000.pe/#portfolio', name: 'House Exterior', about: 'House Exterior Design' },
]

// const imgData = []

// for(let i=0; i<img.length; i++){
//     imgData.push(img[Math.round(Math.random() * img.length - 1)])
// }

function shuffleArray(array) {
    for (let i = img.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [img[i], img[j]] = [img[j], img[i]];
    }
    return img;
  }

let imgData = shuffleArray(img)

const All = () => {
    return (
        <>
            {/* <h1 className="w-full bg-green-500 text-center text-xl py-10">All</h1> */}
            <div className="my-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {
                    imgData.map((data) => (
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

export default All