import React from 'react';
import Fiend_image from '../../assets/images/about_2.png';
import Element_image from '../../assets/images/element-1.png';
import { GoArrowUpRight } from "react-icons/go";
import { LiaBedSolid } from "react-icons/lia";
import { PiShower } from 'react-icons/pi';
import { LuExternalLink } from "react-icons/lu";
import { MdPlayCircle } from "react-icons/md";
import { ImArrowUpRight2 } from 'react-icons/im';

function DreamHome() {
    return (
        <div className="bg-white py-8 overflow-hidden">
            <div className="text-custome-black lg:max-w-customContainer2 md:max-w-[960px] sm:max-w-[720px] mx-auto px-4 rounded-lg lg:pt-32 pt-12 lg:pb-20 pb-10">
                <div className="md:flex justify-between items-center">
                    <div className="relative w-full flex justify-center">
                        {/* Rotating background image */}
                        <img
                            src={Element_image}
                            alt="Element_image"
                            className="absolute lg:-bottom-5 -bottom-20 lg:left-32 -right-10 z-0 animate-spin-slow"
                            width="193"
                            height="193"
                        />

                        {/* Foreground image */}
                        <img
                            src={Fiend_image}
                            alt="Fiend_image"
                            className="z-2 relative w-full h-full"
                            width="591"
                            height="768"
                        />
                        {/* Watch Video Button */}
                        <button className="absolute top-10 lg:right-5 -right-3 bg-white rounded-xl shadow-lg p-4 flex items-center lg:space-x-8 space-x-2 z-2">
                            <div className="lg:w-20 w-10 lg:h-20 h-10 rounded-full flex items-center justify-center border-2 border-custome-black">
                                <MdPlayCircle color='#000' className='lg:text-7xl text-4xl' />
                            </div>
                            <span className="font-medium text-gray-700">Watch <br /> Video</span>
                        </button>
                        {/* Floating Card */}
                        <div className="absolute lg:bottom-10 -bottom-20 lg:left-10 left-2 bg-white shadow-lg rounded-lg lg:px-7 px-4 lg:py-5 py-2 z-2 animate-move-up-down">
                            <h3 className="font-semibold text-sm lg:my-3 my-1">Equestrian Family Home</h3>
                            <p className="text-sm text-gray-500 lg:my-3 my-1">New York City, CA, USA</p>
                            <div className="flex items-center text-sm text-gray-600 lg:space-x-5 space-x-2 lg:my-2 my-1">

                                <span className='flex items-center gap-1'><LiaBedSolid className="mr-1" /> 1 bed</span>
                                <span className='flex items-center gap-1'><PiShower className="mr-1" /> 2 bath</span>
                                <span className='flex items-center gap-1'><LuExternalLink className="mr-1" /> 1200 sqft</span>

                            </div>
                            <a
                                href="#"
                                className="font-medium flex items-center space-x-1 text-sm my-5"
                            >
                                <span>View House</span>

                                <GoArrowUpRight />

                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:mt-0 mt-32">
                        <div className='lg:ml-[20.66666667%]  lg:space-y-10 space-y-5'>
                            <div className='lg:space-y-10 space-y-3'>
                                <h2 className='lg:text-3xl text-2xl font-semibold'>With Us Help You Find Your Dream Home</h2>
                                <p>As the complexity of buildings to increase, the field of architecture.</p>
                            </div>

                            <div className='space-y-1'>
                                <h2 className='lg:text-5xl text-2xl font-semibold'>400</h2>
                                <p className='text-sm'>Stores around the world</p>
                            </div>

                            <div className='space-y-1'>
                                <h2 className='lg:text-5xl text-2xl font-semibold'>200+</h2>
                                <p className='text-sm'>Stores around the world</p>
                            </div>

                            <div className='space-y-1'>
                                <h2 className='lg:text-5xl text-2xl font-semibold'>1k+</h2>
                                <p className='text-sm'>Stores around the world</p>
                            </div>

                            <div className=''>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center Dream-btn"
                                >
                                    See More
                                    <ImArrowUpRight2 className="ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DreamHome;
