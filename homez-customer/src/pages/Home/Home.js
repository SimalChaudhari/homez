import React from "react";
import { HomeFeaturedListings, HomeHeroComponent } from "../../Components";
import "./HomeCss.css"

const Home = () => {
  return (
    <div className="lg:pt-24 pt-28">

      <HomeHeroComponent />

      <HomeFeaturedListings />

    </div>
  );
};

export default Home;
