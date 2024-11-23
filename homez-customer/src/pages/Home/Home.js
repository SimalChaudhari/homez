import React from "react";
import { DreamHome, ExploreCities, HomeAgetns, HomeFeaturedListings, HomeHeroComponent, HomeTrusted, RealtonHelp, TestimonialsHome } from "../../Components";
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

      <TestimonialsHome />

      <HomeAgetns />

      <HomeTrusted />

    </div>
  );
};

export default Home;
