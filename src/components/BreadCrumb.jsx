import React from "react";

const BreadCrumb = ({about, loc}) => {
    return (
        <>
            <div className="bg-[url('img/subscribe-bg.png.webp')] md:w-3/4 w-full bg-no-repeat bg-cover m-auto mb-36 py-48">
                <h1 className="text-white text-center text-6xl font-medium">{about}</h1>
                <span className="text-center block text-white my-5">{loc}</span>
            </div>
        </>
    )
}

export default BreadCrumb