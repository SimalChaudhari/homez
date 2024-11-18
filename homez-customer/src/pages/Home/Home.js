import React from "react";
import { DreamHome, ExploreCities, HomeFeaturedListings, HomeHeroComponent, RealtonHelp } from "../../Components";
import "./HomeCss.css"
import "./CustomSliderCss.css"

const Home = () => {
  return (
    <div className="lg:pt-24 pt-28">

      <HomeHeroComponent />

      <HomeFeaturedListings />

      <ExploreCities />

      <RealtonHelp />

      <DreamHome />

    </div>
  );
};

export default Home;
