// src/pages/Auth/PageNotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import NotFound from "../../assets/video/404.mp4";
import NotFoundGif from "../../assets/Gif/404.gif";

function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-12">
            <div className="text-center">
                {/* Video Section */}
                <div className="mb-6">
                    <video
                        src={NotFound}
                        autoPlay="true"
                        loop="true"
                        muted="true"
                    // className="w-40 h-40 mx-auto mb-6"
                    />
                </div>

                {/* Main Title */}
                {/*
                    <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
                */}

                {/* Description Text */}
                {/*
                    <p className="text-gray-500 mb-8">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                    </p>
                */}

                {/* Return to Home Button */}
                <Link to="/" className="inline-flex items-center px-6 py-3 bg-custome-black text-white text-sm font-medium rounded shadow hover:bg-custome-yellow hover:text-custome-black transition duration-300">
                    <FaHome className="mr-2" />
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}

export default PageNotFound;
