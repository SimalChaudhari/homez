import React from 'react';
import Slider from 'react-slick';
import { ImArrowUpRight2 } from 'react-icons/im';
import { FaBed, FaBath } from 'react-icons/fa';
import { BiRuler } from 'react-icons/bi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import G1 from '../../assets/images/g1.jpg';
import G2 from '../../assets/images/g2.jpg';
import G3 from '../../assets/images/g3.jpg';
import G4 from '../../assets/images/g4.jpg';

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
  const settings = {
    dots: false,
    infinite: false,
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
    <div className='bg-white py-8'>
      <div className='lg:max-w-customContainer2 md:max-w-[960px] sm:max-w-[720px] mx-auto px-4'>

        {/* Header */}
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h3 className='font-semibold text-3xl'>Discover Our Featured Listings</h3>
            <p className='text-sm'>Aliquam lacinia diam quis lacus euismod</p>
          </div>
          <div className='flex items-center text-custome-black hover:text-custome-red cursor-pointer'>
            <p className='font-medium'>See All Properties</p>
            <ImArrowUpRight2 className="text-lg ml-2 mb-2" />
          </div>
        </div>

        {/* Featured Carousel */}
        <Slider {...settings}>
          {propertyData.map((property, index) => (
            <div key={index} className='p-4 featuredcard'>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                
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
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-1">{property.title}</h4>
                  <p className="text-sm text-gray-500">{property.location}</p>
                  <div className="flex items-center text-gray-600 text-sm mt-2 space-x-4">
                    <span className="flex items-center"><FaBed className="mr-1" />{property.beds}</span>
                    <span className="flex items-center"><FaBath className="mr-1" />{property.baths}</span>
                    <span className="flex items-center"><BiRuler className="mr-1" />{property.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeFeaturedListings;
