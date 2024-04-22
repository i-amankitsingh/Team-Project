import React from "react";

const Form = () => {
    return (
        <>
            <section className="py-20" id="form">
                <form action="https://api.web3forms.com/submit" method="POST" className="py-10 px-5 bg-red-00">
                <input type="hidden" name="access_key" value="1024f79a-3e8b-40af-b6e9-e4f6044f2dc1" />
                    <h1 className="text-center my-10 text-white text-5xl">Contact Us</h1>
                    <div>
                        <input type="text" name="Name" id="name" className="form-input border border-white outline-none w-full bg-transparent h-12 px-5 text-white block" required/>
                        <label htmlFor="name" className="form-label">Name</label>
                    </div>
                    <div>
                        <input type="email" name="Email" id="email" className="form-input border border-white outline-none w-full bg-transparent h-12 px-5 text-white block" required/>
                        <label htmlFor="email" className="form-label">Email</label>
                    </div>
                    <div>
                        <input type="tel" name="Mobile" id="mobile" className="form-input border border-white outline-none w-full bg-transparent h-12 px-5 text-white block" required/>
                        <label htmlFor="mobile" className="form-label">Mobile Number</label>
                    </div>
                    <div>
                        <input type="text" name="Subject" id="sub" className="form-input border border-white outline-none w-full bg-transparent h-12 px-5 text-white block" required/>
                        <label htmlFor="sub" className="form-label">Subject</label>
                    </div>
                    <div>
                        <textarea className="w-full bg-transparent outline-none border border-white h-40 p-3 text-white placeholder-white form-input" placeholder="Message Here...." name="Message">

                        </textarea>
                        {/* <label htmlFor="name" className="form-label">Name</label> */}
                    </div>
                    <div>
                        <input type="submit" value='Send Message' className="w-full bg-white py-3 text-lg mt-5 cursor-pointer rounded-3xl hover:bg-[#4458dc] hover:text-white" />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Form