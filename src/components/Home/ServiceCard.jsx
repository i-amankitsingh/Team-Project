import React from "react";

const ServiceCard = ({img, title, para}) => {
    return (
        <>
            <div className="w-full text-center bg-gray-100 px-5 py-5 hover:bg-white hover:shadow-2xl">
                <img src={img} className="m-auto block my-5" />
                <div>
                    <label className="text-xl font-bold">{title}</label>
                    <p className="my-5 text-gray-500">
                        {para}
                    </p>
                </div> 
            </div>
        </>
    )
}

export default ServiceCard