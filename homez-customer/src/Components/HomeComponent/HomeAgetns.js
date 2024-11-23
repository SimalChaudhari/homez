import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testi1 from '../../assets/images/team1.jpg';
import testi2 from '../../assets/images/team2.jpg';
import testi3 from '../../assets/images/team3.jpg';
import testi4 from '../../assets/images/team4.jpg';
import testi5 from '../../assets/images/team5.jpg';
import agent6 from '../../assets/images/agent6.jpg';
import agent7 from '../../assets/images/agent7.jpg';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const CityMapData = [
    {
        image: testi1,
        location: "Arlene McCoy",
        desc: "Broker",
    },
    {
        image: testi2,
        location: "Esther Howard",
        desc: "Broker",
    },
    {
        image: testi3,
        location: "Cody Fisher",
        desc: "Broker",
    },
    {
        image: testi4,
        location: "Bessie Cooper",
        desc: "Broker",
    },
    {
        image: testi5,
        location: "Guy Hawkins",
        desc: "Broker",
    },
    {
        image: agent6,
        location: "Arlene McCoy",
        desc: "Broker",
    },
    {
        image: agent7,
        location: "Esther Howard",
        desc: "Broker",
    },
];

function HomeAgetns() {

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
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
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
            {
                breakpoint: 576, // For smaller phones
                settings: {
                    slidesToShow: 2, // Show 2 slides
                },
            },
            {
                breakpoint: 375, // For extra small phones
                settings: {
                    slidesToShow: 1, // Show 1 slide
                },
            },
        ],
    };

    return (

        <div className="bg-white lg:py-20 py-8 overflow-hidden">
            <div className="lg:max-w-customContainer2 md:max-w-[960px] sm:max-w-[720px] mx-auto px-4">

                {/* Header */}
                <div className="lg:flex items-center justify-between mb-6">
                    <div>
                        <h3 className="font-semibold lg:text-3xl text-2xl">Our Exclusive Agetns</h3>
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
                        <div key={index} className="bg-white rounded-lg overflow-hidden p-2">
                            {/* Image Section */}
                                <img src={property.image} alt={property.location} className="mt-5 w-full h-full object-contain rounded-xl" />

                            {/* Details Section */}
                            <div className="lg:mt-5 mt-2 space-y-2 text-left ml-3">
                                <h4 className="font-semibold lg:text-base text-sm mb-1">{property.location}</h4>
                                <p className="lg:text-sm text-xs text-custome-black">{property.desc}</p>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default HomeAgetns