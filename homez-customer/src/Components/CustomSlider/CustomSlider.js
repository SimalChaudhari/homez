import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomSliderCss.css";

// Import custom icons or use a library like react-icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function CustomSlider({ images, hoverEffect = false, settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ]
} }) {
  const sliderRef = useRef(null);

  // Function to move to the previous slide
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  // Function to move to the next slide
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>

      {/* Custom Left Arrow */}
      {settings.CustomeArrows && (
        <div className="arrow-left" onClick={handlePrev}>
          <IoIosArrowBack size={25} color="#fff" />
        </div>
      )}

      <Slider ref={sliderRef} {...settings}>
        {images && images.map((image, index) => (
          <div key={index} className="slide-item">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`rounded-lg shadow-md w-full h-auto ${hoverEffect ? 'hover-effect' : ''}`}
            />
          </div>
        ))}
      </Slider>

      {/* Custom Right Arrow */}

      {settings.CustomeArrows && (
        <div className="arrow-right" onClick={handleNext}>
          <IoIosArrowForward size={25} color="#fff" />
        </div>
      )}
    </div>
  );
}

export default CustomSlider;
