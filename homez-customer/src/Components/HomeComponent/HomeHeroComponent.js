import React, { useRef, useState } from 'react';
import HomeRelativeComponent from './HomeRelativeComponent';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeSlider from './HomeSlider';

// Example images array for the slider (you can replace these with your own images)
const images = [
    "https://homez-appdir.vercel.app/images/icon/property-rent-2.svg",
    "https://homez-appdir.vercel.app/images/icon/property-rent-2.svg",
    "https://homez-appdir.vercel.app/images/icon/property-rent-2.svg",
    "https://homez-appdir.vercel.app/images/icon/property-rent-2.svg",
    "https://homez-appdir.vercel.app/images/icon/property-rent-2.svg",
    "https://homez-appdir.vercel.app/images/icon/property-rent-2.svg",
    "https://homez-appdir.vercel.app/images/icon/property-rent-2.svg",
    "https://homez-appdir.vercel.app/images/icon/property-rent-2.svg",
    "https://homez-appdir.vercel.app/images/icon/property-rent-2.svg",
];

function HomeHeroComponent() {
    const sliderRef = useRef(null);
    const [hoverEffect, setHoverEffect] = useState(false);

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <div className='relative'>
            <div>
                {/* Hero Banner (Image) */}
                <div className="home2-hero-banner bdrs12"></div>

                {/* Content Section */}
                <div className='text-white h-[650px] relative z-1'>
                    <div>
                        <HomeRelativeComponent />
                    </div>

                    <div className="max-w-screen-customWidth xl:max-w-customContainer lg:max-w-customContainer md:max-w-[960px] sm:max-w-[720px] mx-auto flex flex-col items-center lg:mt-20 font-Poppins px-8">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2">Find Your Dream Home</h1>
                        <p className="text-lg lg:mb-10">Let’s find a home that’s perfect for you</p>
                    </div>
                    <div className="lg:mt-52 -mt-4">
                        {/* Centered Slider Container */}
                        <HomeSlider />
                    </div>

                </div>
            </div>

            {/* Additional Section (for spacing or other content) */}
            <div className='h-96 bg-white'>
            </div>
        </div>
    );
}

export default HomeHeroComponent;
