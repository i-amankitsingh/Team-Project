import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Client = () => {
    const options = {
        responsive : {
            0:{
                items : 1
            },
            1000:{
                items : 2
            }
        }
    }
    return (
        <>
            <section className="w-3/4 m-auto my-10 text-center mt-28">
                <h2 className="text-3xl font-bold text-center my-2">CLIENT SAY ABOUT ME</h2>
                <p className="md:w-1/2 w-full text-gray-500 m-auto mt-5 mb-28">Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast
                    beginning signs open god you're gathering ithe</p>
                
                <OwlCarousel className='owl-theme' loop margin={20} nav autoplay {...options}>
                    <div className="testimonial md:flex gap-5 shadow-xl p-5 bg-white">
                        <img src="img/sachin.png" className="rounded-md" id="img" />
                        <div className="text-left">
                            <label className="font-medium text-2xl mb-5 block">Sachin Chauhan</label>
                            <p>
                            "I recently had the pleasure of working with TeamDev on the development of my personal portfolio website, and I am thrilled with the outcome! The entire experience was seamless, 
                            <details>
                            <summary>Read More..</summary>
                            from the initial consultation to the final launch, and the final product is everything I hoped for and more.
                            </details>
                            </p>
                        </div>
                    </div>

                    <div className="testimonial md:flex gap-5  shadow-xl p-5 bg-white">
                    <img src="img/shubham.webp" className=" rounded-md" id="img" />
                    <div className="text-left">
                        <label className="font-medium text-2xl mb-5 block">Shubham Rawat</label>
                        <p>
                        We hired TeamDev to build our e-commerce platform from scratch, and we couldn't be happier with the results! From the initial consultation to the final deployment, the entire process was smooth, professional, and exceeded our expectations.
                        </p>
                    </div>
                </div>

                {/* <div className="testimonial md:flex gap-5 shadow-xl p-5 bg-white">
                    <img src="img/acc.jpg" className="rounded-md" id="img" />
                    <div className="text-left">
                        <label className="font-medium text-2xl mb-5 block">Kajal Rawat</label>
                        <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                    </div>
                </div> */}
                </OwlCarousel>
            </section>
        </>
    )
}

export default Client