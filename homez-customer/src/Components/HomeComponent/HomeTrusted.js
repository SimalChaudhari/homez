import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AMZ from '../../assets/images/AMZ.png';
import AM from '../../assets/images/AM.png';
import CS from '../../assets/images/CS.png';
import DR from '../../assets/images/DR.png';
import SP from '../../assets/images/SP.png';
import LO from '../../assets/images/LO.png';

const CityMapData = [
    {
        image: AMZ,
    },
    {
        image: AM,
    },
    {
        image: CS,
    },
    {
        image: DR,
    },
    {
        image: SP,
    },
    {
        image: LO,
    },
];

function HomeTrusted() {

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // For tablets or medium-sized screens
                settings: {
                    slidesToShow: 4, // Show 4 slides
                },
            },
            {
                breakpoint: 768, // For smaller tablets or large phones
                settings: {
                    slidesToShow: 3, // Show 3 slides
                },
            },
            // {
            //     breakpoint: 576, // For smaller phones
            //     settings: {
            //         slidesToShow: 2, // Show 2 slides
            //     },
            // },
            {
                breakpoint: 375, // For extra small phones
                settings: {
                    slidesToShow: 2, // Show 1 slide
                },
            },
        ],
    };

    return (

        <div className="bg-white lg:py-20 py-8 overflow-hidden">
            <div className="lg:max-w-customContainer2 md:max-w-[960px] sm:max-w-[720px] mx-auto px-4">

                <p className='text-center font-semibold text-sm mb-10'>Trusted by the world’s best</p>
                {/* Slider */}
                <Slider {...settings} ref={sliderRef}>
                    {CityMapData.map((property, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden p-2">
                            {/* Image Section */}
                            <div className='flex items-center justify-center'>
                                <img src={property.image} alt={property.location} className="mt-5 w-auto h-auto object-contain" />
                            </div>

                        </div>

                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default HomeTrusted