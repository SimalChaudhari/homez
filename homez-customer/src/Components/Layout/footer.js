import React from "react";
import FooterMainComponent from "../FooterComponent/FooterMainComponent";
import FooterRelaiveComponent from "../FooterComponent/FooterRelaiveComponent";

const Footer = () => {
  return (

    <div className="bg-custome-black lg:pb-20 pb-8 overflow-hidden relative">


      <div className="bg-white lg:h-56 h-[10.3rem]"></div>

      <div className="p-4"> <FooterRelaiveComponent /></div>

      <FooterMainComponent />
    </div>
  );
};

export default Footer;
