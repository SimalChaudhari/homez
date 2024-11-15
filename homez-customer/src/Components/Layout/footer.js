import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-custome-yellow py-4 text-custome-black text-center">

      <div className="grid md:grid-cols-2 customeContainer mx-auto lg:px-0 px-2 py-6">
        <div className="flex flex-col items-start max-w-[65%] text-left">
          <h2 className="text-3xl font-bold mb-10">logo</h2>
          <p className="text-sm">Study any topic, anytime. explore thousands of courses for the lowest price ever!</p>
        </div>
        <div className="grid grid-cols-2">
          <div className="text-left">
            <p className="text-xl mb-7">Connect with us</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><FaFacebookF className="text-base" /> <p>Facebook</p></li>
              <li className="flex items-center gap-2"><FaTwitter className="text-base" /> <p>Twitter</p></li>
              <li className="flex items-center gap-2"><FaLinkedin className="text-base" /> <p>LinkedIn</p></li>
            </ul>
          </div>

          <div className="text-left">
            <p className="text-xl mb-7">Help</p>
            <ul className="space-y-4 text-sm">
              <li>Contact us</li>
              <li>About us</li>
              <li>Privacy policy</li>
              <li>What is Boardflix</li>
            </ul>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
