import React, { useRef } from 'react';
import Slider from 'react-slick';
import { ImArrowUpRight2 } from 'react-icons/im';
import { LiaBedSolid } from "react-icons/lia";
import { LuExternalLink, LuHeart } from "react-icons/lu";
import { PiShower } from 'react-icons/pi';
import { TbCopyPlus } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import G1 from '../../assets/images/g1.jpg';
import G2 from '../../assets/images/g2.jpg';
import G3 from '../../assets/images/g3.jpg';
import G4 from '../../assets/images/g4.jpg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Example data for featured properties
const propertyData = [
  {
    image: G1,
    title: "Equestrian Family Home",
    location: "New York City, CA, USA",
    price: "$14,000 / mo",
    beds: "1 bed",
    baths: "2 bath",
    area: "1200 sqft",
    featured: true,
  },
  {
    image: G2,
    title: "Luxury Villa in Rego Park",
    location: "Los Angeles City, CA, USA",
    price: "$82,000 / mo",
    beds: "2 bed",
    baths: "1 bath",
    area: "1300 sqft",
    featured: false,
  },
  {
    image: G3,
    title: "Equestrian Family Home",
    location: "Texas City, CA, USA",
    price: "$14,000 / mo",
    beds: "3 bed",
    baths: "3 bath",
    area: "1000 sqft",
    featured: true,
  },
  {
    image: G4,
    title: "Modern Apartment",
    location: "San Francisco, CA, USA",
    price: "$20,000 / mo",
    beds: "2 bed",
    baths: "2 bath",
    area: "1100 sqft",
    featured: false,
  },
];

function HomeFeaturedListings() {
  const sliderRef = useRef(null);

  // Function to move to the previous slide
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  // Function to move to the next slide
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-8 overflow-hidden">
      <div className="lg:max-w-customContainer2 md:max-w-[960px] sm:max-w-[720px] mx-auto px-4 relative">
        
        {/* Header */}
        <div className="lg:flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold lg:text-3xl text-2xl">Discover Our Featured Listings</h3>
            <p className="text-sm">Aliquam lacinia diam quis lacus euismod</p>
          </div>
          <div className="flex items-center text-custome-black hover:text-custome-red cursor-pointer lg:mt-0 mt-9">
            <p className="font-medium">See All Properties</p>
            <ImArrowUpRight2 className="text-lg" />
          </div>
        </div>

        {/* Featured Carousel */}
        <div className=" overflow-hidden">
          {/* Left Arrow */}
          <button
            className="arrow-left"
            onClick={handlePrev}
          >
            <IoIosArrowBack size={20} />
          </button>

          {/* Carousel */}
          <Slider {...settings} ref={sliderRef}>
            {propertyData.map((property, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg overflow-hidden">
                  
                  {/* Image Section */}
                  <div className="relative">
                    <img src={property.image} alt={property.title} className="w-full h-56 object-cover" />
                    {property.featured && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-0 rounded">
                        FEATURED
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 bg-white text-gray-800 font-semibold px-3 py-1 rounded">
                      {property.price}
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="p-4 mt-5 space-y-2">
                    <h4 className="font-semibold text-base mb-1">{property.title}</h4>
                    <p className="text-sm text-gray-500">{property.location}</p>
                    <div className="flex items-center text-gray-600 text-sm my-2 space-x-4">
                      <span className="flex items-center"><LiaBedSolid className="mr-1" />{property.beds}</span>
                      <span className="flex items-center"><PiShower className="mr-1" />{property.baths}</span>
                      <span className="flex items-center"><LuExternalLink className="mr-1" />{property.area}</span>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between text-custome-black text-sm my-2 space-x-4">
                      <div><p>For Rent</p></div>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center"><LuExternalLink className="mr-1" /></span>
                        <span className="flex items-center"><TbCopyPlus className="mr-1" /></span>
                        <span className="flex items-center"><LuHeart className="mr-1" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Right Arrow */}
          <button
            className="arrow-right"
            onClick={handleNext}
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeFeaturedListings;
