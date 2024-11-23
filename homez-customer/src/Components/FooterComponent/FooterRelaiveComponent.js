import React from 'react'
import Footer_Img from '../../assets/images/footer_img.png';
import { ImArrowUpRight2 } from "react-icons/im";

function FooterRelaiveComponent() {
    return (
        <div className='relative'>

            <div className="bg-white flex items-center justify-center">
                <div className="lg:max-w-customContainer mx-auto bg-custome-red text-white w-full rounded-xl overflow-hidden absolute lg:p-[5.6rem] p-10 flex items-center justify-between">
                    {/* Text Section */}
                    <div className="max-w-md space-y-4 z-1 lg:ml-24 md:ml-10">
                        <h5 className="text-2xl lg:text-4xl font-semibold">
                            Start Listing or Buying a Property With Realton
                        </h5>
                        <p className="text-sm lg:text-base">
                            Talk to our experts or Browse through more properties.
                        </p>
                        <a
                            href="/house-details"
                            className="inline-flex items-center justify-center  lg:px-6 lg:py-3 rounded-lg font-medium Footer-btn"
                        >
                            Learn More
                            <ImArrowUpRight2 className="ml-2" />
                        </a>
                    </div>

                    {/* Image Section */}
                    <div className="absolute right-0 lg:flex items-end justify-end hidden">
                        <img
                            src={Footer_Img}
                            alt="Footer Image"
                            className="w-full h-full object-cover lg:object-contain"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FooterRelaiveComponent