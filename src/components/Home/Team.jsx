import React from "react";

const teamData = [
    {img : 'img/me.jpg', name : 'Ankit Singh', about : 'Crafting intuitive and responsive user interfaces with HTML, CSS, and JavaScript to ensure an engaging and seamless user experience.', role : 'Front End Developer', instagram : 'https://www.instagram.com/itz.____ankit/', twitter : '', linkedin : 'www.linkedin.com/in/ankit-singh-jethuri', github : 'https://github.com/i-amankitsingh'},
    {img : 'img/member2.jpg', name : 'Jagdeesh Bhandari', about : 'Building robust and scalable server-side applications, managing databases, and ensuring seamless integration with front-end systems for optimal performance.', role : 'Back End Developer', instagram : 'https://www.instagram.com/0_jagdeesh_9?igsh=MXV4dWJ2dDg3NHpodA==', twitter : 'https://twitter.com/_Jagdeesh_5', linkedin : 'www.linkedin.com/in/jagdeesh09', github : 'https://github.com/Jagdeesh9'},
    {img : 'img/member3.jpg', name : 'Himanshu Negi', about : 'Creating visually stunning and impactful designs, from branding to digital graphics, to effectively communicate your message and captivate your audience.', role : 'Graphic/CAD Designer', instagram : 'https://www.instagram.com/himanshu_negi021?igsh=czI0YnJ1OXZpa3c0', twitter : 'https://www.facebook.com/profile.php?id=100070406466136&mibextid=ZbWKwL', linkedin : '', github : 'http://himanshunegi.000.pe'}
]


const Team = () => {
    return (
        <>
            <h2 className="text-4xl font-bold mt-10 mb-7 text-center">OUR TEAM</h2>
            <p className="text-center text-gray-500 w-1/2 m-auto mb-5">
            Meet our team of experts, dedicated to delivering exceptional digital solutions. Each member brings unique skills in web development, SEO, graphic design, and CAD design to ensure your project's success.
            </p>
            <section className="w-3/4 m-auto mt-28 md:flex gap-10">
                {
                    teamData.map((data) => (
                        <div className="flex-1 bg-white my-5">
                    <div className="w-full relative overflow-hidden" id="team-card">
                        <img src={data.img} className="rounded-md w-full aspect-square" />
                        <div className="w-full flex justify-center gap-5 absolute" id="icon-div">
                            <a href={data.instagram} target="_blank" className="text-2xl text-pink-600"><i className="fa fa-instagram"></i></a>
                            <a href={data.twitter} target="_blank" className="text-2xl text-sky-400"><i className="fa fa-twitter"></i></a>
                            <a href={data.linkedin} target="_blank" className="text-2xl text-blue-500" ><i className="fa fa-linkedin"></i></a>
                            <a href={data.github} target="_blank" className="text-2xl"><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                    <div className="px-3 pb-4 rounded-md">
                        <span className="text-2xl block px-1 pt-2">{data.name}</span>
                        <span className="text-lg text-gray-400">{data.role}</span>
                        <p className="mt-2">
                            {data.about}
                        </p>
                    </div>
                </div>
                    ))
                }           
            </section>
        </>
    )
}

export default Team