// src/pages/Auth/PageNotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
// import NotFound from "../../assets/video/404.mp4";
import NotFound from "../../assets/images/error_page_img.svg";
import { ImArrowUpRight2 } from 'react-icons/im';

function PageNotFound() {
    return (
        <div className="lg:flex items-center justify-evenly min-h-screen bg-white px-4 py-12 text-custome-black">
            <div className="text-center">
                <img src={NotFound} alt="NotFound" />
            </div>
            <div className="text-left">
                <h1 className='erro_code'><span className='text-custome-red' >40</span>4</h1>
                <h6 className='lg:text-3xl text-xl font-semibold'>Oops! It looks like you're lost.</h6>
                <p className='text-sm my-5'>The page you're looking for isn't available. Try to search again
                    or use the go to.</p>
                <a
                    href="/"
                    className="inline-flex items-center justify-center  lg:px-6 lg:py-3 rounded-lg font-medium Footer-btn"
                >
                    Go Back To Homepages
                    <ImArrowUpRight2 className="ml-2" />
                </a>
            </div>
        </div>
    );
}

export default PageNotFound;
