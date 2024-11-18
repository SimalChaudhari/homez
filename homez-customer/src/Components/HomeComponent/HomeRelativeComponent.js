import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

function HomeRelativeComponent() {
    const [activeTab, setActiveTab] = useState('Sold');
    const [selectedCity, setSelectedCity] = useState('Mumbai');
    const [showHomeDropdown, setShowHomeDropdown] = useState(false);

    const cities = [
        'Mumbai', 'Bengaluru', 'Hyderabad', 'Pune', 'Chennai', 'Delhi',
        'Gurgaon', 'Noida', 'Kolkata', 'Ahmedabad', 'Thane', 'Navi Mumbai'
    ];
    return (
        <div className=' max-w-screen-customWidth xl:max-w-customContainer lg:max-w-customContainer md:max-w-[960px] sm:max-w-[720px] mx-auto flex items-center justify-between'>


            <div className="p-4 w-full ">
                {/*
                <div className="p-4 absolute w-full top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                 */}
                <div className=' max-w-screen-customWidth  mx-auto'>
                    {/* Tab Section */}
                    <div className="text-white flex justify-center space-x-8 mb-4">
                        {['Buy', 'Rent', 'Sold'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`${activeTab === tab ? 'border-b-2 border-white p-4' : 'p-4'
                                    } text-white font-medium`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Search Section */}
                    <div className="flex items-center justify-center py-4 px-4">
                        <div className="flex flex-col md:flex-row items-center bg-white lg:rounded-full rounded-2xl p-4 md:p-6 w-full md:w-3/4 lg:w-2/4 shadow-lg space-y-10 md:space-y-0 md:space-x-4">

                            {/* City Dropdown */}
                            <div className="relative group w-full md:w-auto lg:border-b-[0px] border-b-[1px] ">
                                <button
                                    onClick={() => setShowHomeDropdown(!showHomeDropdown)}
                                    className="flex items-center justify-between w-full md:w-auto py-2 px-4 rounded-full transition-all duration-300 ease-in-out text-gray-700 font-medium focus:outline-none"
                                >
                                    {selectedCity} <IoIosArrowDown className="text-lg ml-1" />
                                </button>
                                {showHomeDropdown && (
                                    <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-10 w-full md:w-48">
                                        <ul className="py-2 text-gray-700 font-medium">
                                            {cities.map((city) => (
                                                <button
                                                    key={city}
                                                    onClick={() => {
                                                        setSelectedCity(city);
                                                        setShowHomeDropdown(false);
                                                    }}
                                                    className="block text-left w-full px-4 py-2 hover:bg-gray-100 text-gray-700"
                                                >
                                                    {city}
                                                </button>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Search Input */}
                            <div className="w-full flex-grow lg:border-b-[0px] border-b-[1px] ">
                                <input
                                    type="text"
                                    placeholder="Search for locality, landmark, project, or builder"
                                    className="w-full px-4 py-2 rounded-full outline-none text-gray-700 placeholder-gray-400"
                                />
                            </div>

                            {/* Search Button */}
                            <button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2 font-medium  w-auto">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomeRelativeComponent