import React from "react";

const teamData = [
    {},
    {},
    {}
]

const Team = () => {
    return (
        <>
            <section className="w-3/4 m-auto mt-28 md:flex gap-10">
                {
                    teamData.map((data) => (
                        <div className="flex-1 bg-white my-5">
                    <div className="w-full relative overflow-hidden" id="team-card">
                        <img src="img/me.jpg" className="rounded-md" />
                        <div className="w-full flex justify-center gap-5 absolute" id="icon-div">
                            <a href="https://instagram.com" className="text-2xl text-pink-600"><i className="fa fa-instagram"></i></a>
                            <a href="https://instagram.com" className="text-2xl text-sky-400"><i className="fa fa-twitter"></i></a>
                            <a href="https://instagram.com" className="text-2xl text-blue-500" ><i className="fa fa-linkedin"></i></a>
                            <a href="https://instagram.com" className="text-2xl"><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                    <div className="px-3 pb-4 rounded-md">
                        <span className="text-2xl block px-1 pt-2">Ankit Jethuri</span>
                        <span className="text-lg text-gray-400">Front End Developer</span>
                        <p className="mt-2">
                        Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast beginning signs open god you're gathering ithe
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