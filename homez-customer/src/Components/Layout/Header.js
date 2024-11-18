import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaBook, FaRegUserCircle, FaAngleDown } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCallOutline, IoCloseOutline } from "react-icons/io5";
import Logo from '../../assets/images/header_logo.svg';
import DarkLogo from '../../assets/images/header_Dark_logo.svg';
import WhiteMenu from '../../assets/images/nav_icon_white.svg';
import DarkMenu from '../../assets/images/nav_icon_dark.svg';
import { ImArrowUpRight2 } from "react-icons/im";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);  // Track scroll state

  // Scroll event listener to track scroll position
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);  // Clean up event listener on component unmount
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProductsDropdown = () => setIsProductsOpen(!isProductsOpen);
  const toggleCategoryDropdown = () => setIsCategoryOpen(!isCategoryOpen);

  return (
    <header className={`fixed top-0 left-0 w-full z-20 font-semibold transition-all duration-300 ease-in-out shadow-lg ${scrolled ? 'bg-white text-custome-black' : 'bg-custome-black text-white'}`}>
      <div className="max-w-screen-customWidth xl:max-w-customContainer lg:max-w-customContainer md:max-w-[960px] sm:max-w-[720px] mx-auto flex items-center justify-between py-4 px-4">

        <div className="flex items-center space-x-4 justify-center">
          <Link to="/" className="text-2xl font-bold">
            <img src={scrolled ? DarkLogo : Logo} alt="Logo" />
          </Link>

          <nav className="">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">

              <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul className="flex flex-col font-medium  mt-4  md:flex-row md:mt-0 md:text-sm  md:space-x-8 md:rtl:space-x-reverse">

                  <li className="relative group">
                    <button
                      id="dropdownNavbarLink"
                      className="flex items-center justify-between w-full py-2 px-4 rounded-full transition-all duration-300 ease-in-out hover:text-custome-red hover:bg-custome-hover-black"
                    >
                      Home
                      <IoIosArrowDown className="text-lg transition-transform duration-300 ease-in-out" />
                    </button>


                    <div
                      id="dropdownNavbar"
                      className="absolute hidden group-hover:flex flex-col z-10 font-normal bg-white w-48 text-custome-black divide-y divide-gray-100 rounded-lg shadow w-auro opacity-0 transform -translate-y-5 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      <ul className="py-2 text-custome-black font-medium" aria-labelledby="dropdownLargeButton">
                        <li>
                          <a href="#" className="block px-4 py-2 dark:hover:bg-custome-hover-red">Home v1</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 dark:hover:bg-custome-hover-red">Home v2</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 dark:hover:bg-custome-hover-red">Home v3</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 dark:hover:bg-custome-hover-red">Home v4</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 dark:hover:bg-custome-hover-red">Home v5</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 dark:hover:bg-custome-hover-red">Home v6</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 dark:hover:bg-custome-hover-red">Home v7</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 dark:hover:bg-custome-hover-red">Home v8</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 dark:hover:bg-custome-hover-red">Home v9</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 dark:hover:bg-custome-hover-red">Home v10</a>
                        </li>
                      </ul>
                    </div>


                  </li>

                  <li>
                    <a href="#" className="block py-2 px-4 rounded-full transition-all duration-300 ease-in-out hover:text-custome-red hover:bg-custome-hover-black">Blog</a>
                  </li>

                  <li>
                    <a href="#" className="block py-2 px-4 rounded-full transition-all duration-300 ease-in-out hover:text-custome-red hover:bg-custome-hover-black">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-4 text-sm">
          <div className="hidden md:flex gap-5">
            <Link to="/join" className="flex items-center hover:text-gray-400">
              <IoCallOutline className="mr-2 text-lg" /> {/* Add margin-right to space icon from text */}
              2 911 098 7654
            </Link>
            <Link to="/signin" className="flex items-center hover:text-gray-400">
              <FaRegUserCircle className="mr-2 text-lg" /> {/* Add margin-right to space icon from text */}
              Login / Register
            </Link>

            <button className={`ud-btn flex items-center space-x-4 ${scrolled ? 'hover:text-custome-white' : ''}`}>
              Add Property <ImArrowUpRight2 className="text-xl ml-2" />
            </button>

            <img src={scrolled ? DarkMenu : WhiteMenu} alt="Menu Icon" className="text-transparent" />

          </div>


          <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
            {isMenuOpen ? "" :
              <img src={scrolled ? DarkMenu : WhiteMenu} alt="WhiteMenu" className="text-transparent" />
            }
          </button>
        </div>

      </div>


      {/* Mobile Menu Slide-In from Left */}
      {isMenuOpen && (
        <nav className="fixed inset-0 z-50 bg-black bg-opacity-70 flex">
          <div className="bg-white text-custome-black w-[80%]  space-y-6 overflow-auto">
            <div className=" flex items-center justify-between bg-custome-hover-red px-6 py-3 border-b-[1px]">
              <div>
                <p className="text-lg">Welcome to Homez</p>
              </div>
              <div className="bg-custome-red rounded-full text-white p-3 font-bold text-xl cursor-pointer">
                <IoCloseOutline onClick={toggleMenu} />
              </div>
            </div>


            <div className=" font-medium">

              {/* Products Dropdown */}
              <div className="flex items-center p-6  justify-between cursor-pointer text-custome-black hover:bg-custome-hover-back hover:text-custome-red" onClick={toggleProductsDropdown}>
                <span className="flex items-center gap-2 text-center">
                  Home
                </span>
                {isProductsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {isProductsOpen && (
                <div className="">
                  <Link to="/" className="py-3 px-8 flex items-center gap-2 text-sm bg-white hover:bg-custome-hover-back hover:text-custome-red " onClick={toggleMenu}>
                    Home v1
                  </Link>
                  {/* Add other links as needed */}
                </div>
              )}

              <div className="hover:bg-custome-hover-back hover:text-custome-red p-6">
                <span className="flex items-center gap-2 text-center">
                  Blog
                </span>
              </div>


              <div className="hover:bg-custome-hover-back hover:text-custome-red p-6">
                <span className="flex items-center gap-2 text-center">
                  Contact Us
                </span>
              </div>

            </div>

          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
