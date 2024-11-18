import React from 'react'
import image1 from '../../assets/images/property_buy_2.svg';
import image2 from '../../assets/images/property_sell_2.svg';
import image3 from '../../assets/images/property_rent_2.svg';
import { ImArrowUpRight2 } from 'react-icons/im';

function RealtonHelp() {

    const cardData = [
        {
            title: "Buy a property",
            description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
            buttonText: "Find a home",
            image: image1, // Corrected image path
        },
        {
            title: "Sell a property",
            description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
            buttonText: "Place an ad",
            image: image2, // Corrected image path
        },
        {
            title: "Rent a property",
            description: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
            buttonText: "Find a rental",
            image: image3, // Corrected image path
        },
    ];
    return (

        <div className="bg-white py-8 overflow-hidden">
            <div className="text-custome-black lg:max-w-customContainer md:max-w-[960px] sm:max-w-[720px] mx-auto px-4 bg-custome-hover-red rounded-lg lg:pt-32 pt-12 lg:pb-20 pb-10">
                <div className='flex flex-col items-center justify-center mb-10'>
                    <h2 className='font-semibold lg:text-3xl text-2xl'>See How Realton Can Help</h2>
                    <p className='font-normal text-sm'>Aliquam lacinia diam quis lacus euismod</p>
                </div>

                <div className="text-custome-black lg:max-w-customContainer2 md:max-w-[960px] sm:max-w-[720px] mx-auto lg:px-4 rounded-lg py-10">

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-4 max-w-7xl mx-auto">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 flex flex-col items-center text-center"
                            >
                                {/* Image */}
                                <img src={card.image} alt={card.title} className=" mb-6 max-h-[150px] max-w-[316px]" />

                                {/* Title */}
                                <h3 className="font-semibold text-lg mb-2 text-gray-800">{card.title}</h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm mb-6">{card.description}</p>

                                {/* Button */}
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center help-btn"
                                >
                                    {card.buttonText}
                                    <ImArrowUpRight2 className="ml-2" />
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RealtonHelp