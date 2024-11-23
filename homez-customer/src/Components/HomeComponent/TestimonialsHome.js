import React, { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import testi1 from '../../assets/images/testi1.png';
import testi2 from '../../assets/images/testi2.png';
import testi3 from '../../assets/images/testi3.png';
import testi4 from '../../assets/images/testi4.png';
import testi5 from '../../assets/images/testi5.png';

function TestimonialsHome() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [testimonial, setTestimonial] = useState({
        quote: "Another fantastic testimonial! This workshop has helped me improve my design skills significantly. I'm really grateful for the opportunity.",
        name: "Ella Johnson",
        designation: "UX Designer, Google",
    });

    const testimonialsData = [
        {
            quote: "Another fantastic testimonial! This workshop has helped me improve my design skills significantly. I'm really grateful for the opportunity.",
            name: "Ella Johnson",
            designation: "UX Designer, Google",
            avatar: testi2,
        },
        {
            quote: "What a great experience! I have visited one of the workshops and attended a masterclass, and both were super useful for young designers.",
            name: "Ali Tufan",
            designation: "Product Manager, Apple Inc",
            avatar: testi1,
        },
        {
            quote: "Another fantastic testimonial! This workshop has helped me improve my design skills significantly. I'm really grateful for the opportunity.",
            name: "Ella Johnson",
            designation: "UX Designer, Google",
            avatar: testi5,
        },
        {
            quote: "What a great experience! I have visited one of the workshops and attended a masterclass, and both were super useful for young designers.",
            name: "Ali Tufan",
            designation: "Product Manager, Apple Inc",
            avatar: testi3,
        },
        {
            quote: "Another fantastic testimonial! This workshop has helped me improve my design skills significantly. I'm really grateful for the opportunity.",
            name: "Ella Johnson",
            designation: "UX Designer, Google",
            avatar: testi4,
        },
    ];

    return (
        <div className="bg-white py-8 overflow-hidden">
            <div className="text-custome-black lg:max-w-customContainer md:max-w-[960px] sm:max-w-[720px] mx-auto px-4 bg-custome-white-back rounded-xl lg:pt-32 pt-12 lg:pb-20 pb-10">
                <div className="flex justify-center">
                    <div className="lg:w-1/2 lg:px-5">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h4 className="text-2xl lg:text-3xl font-semibold">Testimonials</h4>
                            <p className="text-xs lg:text-sm text-custome-black my-3">10,000+ unique online course list designs</p>
                        </div>

                        {/* Testimonial Content */}
                        <div className="text-center">
                            <div className="flex justify-center items-center text-4xl lg:text-5xl text-gray-300 mb-6">
                                <FaQuoteLeft />
                            </div>
                            <p className="text-base lg:text-lg text-gray-700 font-medium mb-6 testi-text">
                                {testimonial.quote}
                            </p>
                            <h5 className="h6">{testimonial.name}</h5>
                            <p className="design mt-3">{testimonial.designation}</p>
                        </div>

                        {/* Profile Avatars in Grid */}
                        <div className="tab-list position-relative mt-10">
                            <ul className="nav nav-pills justify-content-center gap-4" id="pills-tab" role="tablist">
                                {testimonialsData.map((item, index) => (
                                    <li className="nav-item" role="presentation" key={item.id}>
                                        <img
                                            key={index}
                                            src={item.avatar}
                                            alt={item.name}
                                            className={`rounded-full cursor-pointer border-2 transition-all duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-50'
                                                }`}
                                            onClick={() => {
                                                setActiveIndex(index);
                                                setTestimonial({
                                                    quote: item.quote,
                                                    name: item.name,
                                                    designation: item.designation,
                                                });
                                            }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsHome;
