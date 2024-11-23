import React from 'react'
import { FaFacebookF, FaGooglePlay, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from '../../assets/images/header_logo.svg';
import { ImAppleinc } from "react-icons/im";

function FooterMainComponent() {
  return (
    <div>

      <div className="bg-custome-black lg:mt-56 mt-36">
        <div className="lg:max-w-customContainer2 md:max-w-[960px] sm:max-w-[720px] mx-auto px-4">
          <footer className="text-white text-center">

            <div className="flex flex-wrap justify-between customeContainer mx-auto lg:px-0 px-2 py-6">

              <div className="flex flex-col items-start text-left lg:mt-0 mt-5 lg:w-[41.66666667%] w-full lg:px-5">
                <img src={Logo} alt="Logo" className="mb-10" />

                <div className="flex flex-wrap gap-10 mb-10">

                  <div className="space-y-2">
                    <p className="text-custome-footer-color text-sm">Total Free Customer Care</p>
                    <h6 className="info-phone">+(0) 123 050 945 02</h6>
                  </div>

                  <div className="space-y-2">
                    <p className="text-custome-footer-color text-sm">Need Live Support?</p>
                    <h6 className="info-phone">hi@homez.com</h6>
                  </div>

                </div>

                <h6 className="mt-5 font-semibold text-xl">Apps</h6>

                <div className="flex flex-wrap gap-6 lg:justify-center">

                  {/* Apple Store Button */}
                  <button className="mt-3 app-info p-2 flex items-center justify-center gap-5 px-7 py-3 hover:bg-custome-red">
                    <ImAppleinc className="text-3xl" />
                    <div className="space-y-1 text-center">
                      <p className="text-custome-footer-color text-xs">Download on the</p>
                      <h6 className="info-phone text-xs">Apple Store</h6>
                    </div>
                  </button>

                  {/* Google Play Button */}
                  <button className="mt-3 app-info p-2 flex items-center justify-center gap-5 px-7 py-3 hover:bg-custome-red">
                    <FaGooglePlay className="text-3xl" />
                    <div className="space-y-1 text-center">
                      <p className="text-custome-footer-color text-xs">Get it on</p>
                      <h6 className="info-phone text-xs">Google Play</h6>
                    </div>
                  </button>

                </div>

                <h6 className="mt-14 mb-9 font-semibold text-sm">Follow us on social media</h6>
                <div className="flex gap-7">
                  <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
                  <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
                  <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
                  <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer" />
                </div>

              </div>

              <div className="lg:w-[58.33333333%] w-full lg:px-5 lg:mt-0 mt-10">

                <div className=" pb-8 w-full">

                  <h6 className="mt-5 font-semibold text-base text-left mb-5">Keep Yourself Up to Date</h6>

                  <div className="relative w-full ">
                    {/* Input Field */}
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full input-info text-custome-footer-color text-sm py-6 px-10 pr-20 focus:outline-none"
                    />
                    {/* Subscribe Button */}
                    <button className="text-sm absolute top-1/2 right-3 transform -translate-y-1/2 text-white font-medium py-2 px-6 rounded-full transition duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between gap-10 lg:mt-0 mt-10">
                  <div className="text-left">
                    <p className="text-sm font-semibold mb-7">Popular Search</p>
                    <ul className="text-sm text-custome-footer-color cursor-pointer">
                      <li className="py-1 hover:text-white"><p className="py-2">Apartment for Rent</p></li>
                      <li className="py-1 hover:text-white"><p className="py-2">Apartment Low to Hide</p></li>
                      <li className="py-1 hover:text-white"><p className="py-2">Offices for Buy</p></li>
                      <li className="py-1 hover:text-white"><p className="py-2">Offices for Rent</p></li>
                    </ul>
                  </div>

                  <div className="text-left">
                    <p className="text-sm font-semibold mb-7">Quick Links</p>
                    <ul className="text-sm text-custome-footer-color cursor-pointer">
                      <li className="py-1 hover:text-white"><p className="py-2">Terms of Use</p></li>
                      <li className="py-1 hover:text-white"><p className="py-2">Privacy Policy</p></li>
                      <li className="py-1 hover:text-white"><p className="py-2">Pricing Plans</p></li>
                      <li className="py-1 hover:text-white"><p className="py-2">Our Services</p></li>
                      <li className="py-1 hover:text-white"><p className="py-2">Contact Support</p></li>
                      <li className="py-1 hover:text-white"><p className="py-2">Careers</p></li>
                      <li className="py-1 hover:text-white"><p className="py-2">FAQs</p></li>
                    </ul>
                  </div>

                  <div className="text-left">
                    <p className="text-sm font-semibold mb-7">Discover</p>
                    <ul className="text-sm text-custome-footer-color cursor-pointer">
                      <li className="py-1 hover:text-white"><p className="py-2">Miami</p></li>
                      <li className="py-1 hover:text-white"><p className="py-2">Los Angeles</p></li>
                      <li className="py-1 hover:text-white"><p className="py-2">Chicago</p></li>
                      <li className="py-1 hover:text-white"><p className="py-2">New York</p></li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>

          </footer>
          {/* Social Media Section */}
          <div className="mt-10 lg:flex justify-between items-center border-t border-gray-700 pt-6 space-y-3">
            <p className="text-sm text-gray-400">
              © Homez 2024 - All rights reserved
            </p>
            <div className="flex gap-4">
              <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
              <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMainComponent