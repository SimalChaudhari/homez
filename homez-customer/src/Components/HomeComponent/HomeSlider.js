import React, { useRef, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoHomeOutline, IoWifi } from "react-icons/io5";
import { PiBuildingApartment } from 'react-icons/pi';
import { GiChestnutLeaf, GiFamilyHouse } from 'react-icons/gi';
import { SiHomeadvisor, SiHomebridge } from 'react-icons/si';

// Example data for the slider
const propertyData = [
    { icon: <IoHomeOutline />, title: "Houses", properties: "22 Properties" },
    { icon: <PiBuildingApartment />, title: "Apartments", properties: "22 Properties" },
    { icon: <IoWifi />, title: "Office", properties: "22 Properties" },
    { icon: <GiChestnutLeaf />, title: "Villa", properties: "22 Properties" },
    { icon: <SiHomeadvisor />, title: "Townhome", properties: "22 Properties" },
    { icon: <GiFamilyHouse />, title: "Bungalow", properties: "22 Properties" },
    { icon: <SiHomebridge />, title: "Loft", properties: "22 Properties" },
];

function HomeSlider() {
    const sliderRef = useRef(null);

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Apply padding when hoverCss exists in the slider
    useEffect(() => {
        const sliderDivs = document.querySelectorAll('.slick-track div');
        sliderDivs.forEach(div => {
            if (div.querySelector('.hoverCss')) {
                div.style.padding = '4px';
            }
        });
    }, []);

    return (
        <div className="px-4">
            <div className="lg:max-w-customContainer2 md:max-w-[960px] sm:max-w-[720px] mx-auto ">
                <Slider ref={sliderRef} {...settings} className='py-5'>
                    {propertyData.map((property, index) => (
                        <div key={index} className="hoverCss bg-white text-custome-black rounded-lg p-4 shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-custome-red hover:text-white text-center ">
                            <div className="flex justify-start ml-4">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full p-2 icon_bg">
                                    {/* Use Icon here */}
                                    <property.icon.type className="w-8 h-8" />
                                </div>
                            </div>
                            <div className='text-left ml-4 space-y-3'>
                                <h3 className="font-semibold text-sm mb-1">{property.title}</h3>
                                <p className="text-sm">{property.properties}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default HomeSlider;
