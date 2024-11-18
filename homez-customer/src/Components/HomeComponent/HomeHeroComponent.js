import React from 'react';
import HomeRelativeComponent from './HomeRelativeComponent';
import HomeSlider from './HomeSlider';

function HomeHeroComponent() {

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

                    <div className="max-w-screen-customWidth xl:max-w-customContainer lg:max-w-customContainer md:max-w-[960px] sm:max-w-[720px] mx-auto flex flex-col items-center lg:mt-20 font-Poppins px-4 mt-10">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2">Find Your Dream Home</h1>
                        <p className="text-lg lg:mb-10">Let’s find a home that’s perfect for you</p>
                    </div>
                    <div className="lg:mt-52 mt-10">
                        {/* Centered Slider Container */}
                        <HomeSlider />
                    </div>

                </div>
            </div>

            {/* Additional Section (for spacing or other content) */}
            <div className='lg:h-96 h-48 bg-white'>
            </div>
        </div>
    );
}

export default HomeHeroComponent;
