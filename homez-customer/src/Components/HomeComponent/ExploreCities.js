import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { ImArrowUpRight2 } from 'react-icons/im'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import City_Map from '../../assets/images/city_map.jpg';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const CityMapData = [
    {
        image: City_Map,
        location: "Los Angeles",
        desc: "12 Properties",
    },
    {
        image: City_Map,
        location: "Miami",
        desc: "8 Properties",
    },
    {
        image: City_Map,
        location: "New York",
        desc: "15 Properties",
    },
    {
        image: City_Map,
        location: "Chicago",
        desc: "10 Properties",
    },
];

function ExploreCities() {

    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to move to the previous slide
    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    // Function to move to the next slide
    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    // Function to handle custom dot clicks
    const handleDotClick = (index) => {
        sliderRef.current.slickGoTo(index);
        setCurrentSlide(index); // Update current slide state
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (

        <div className="bg-white py-8 overflow-hidden">
            <div className="lg:max-w-customContainer2 md:max-w-[960px] sm:max-w-[720px] mx-auto px-4">

                {/* Header */}
                <div className="lg:flex items-center justify-between mb-6">
                    <div>
                        <h3 className="font-semibold lg:text-3xl text-2xl">Explore Cities</h3>
                        <p className="text-sm">Aliquam lacinia diam quis lacus euismod</p>
                    </div>
                    <div className="flex items-center cursor-pointer lg:mt-0 mt-9 space-x-6">
                        <BsArrowLeft size={20} onClick={handlePrev} />
                        {/* Custom Dots */}
                        <div className="flex space-x-2 items-center">
                            {CityMapData.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-black h-1 p-1" : "bg-gray-300 h-[.20rem] p-[.20rem] "
                                        }`}
                                    onClick={() => handleDotClick(index)}
                                ></div>
                            ))}
                        </div>
                        <BsArrowRight size={20} onClick={handleNext} />
                    </div>
                </div>

                {/* Slider */}
                <Slider {...settings} ref={sliderRef}>
                    {CityMapData.map((property, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden">

                            {/* Image Section */}
                            <img src={property.image} alt={property.location} className="w-auto h-auto object-contain" />


                            {/* Details Section */}
                            <div className=" mt-5 space-y-2">
                                <h4 className="font-semibold text-base mb-1">{property.location}</h4>
                                <p className="text-sm text-gray-500">{property.desc}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default ExploreCities