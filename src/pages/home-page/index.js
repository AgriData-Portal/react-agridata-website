import React from "react";
import { Landing } from "_pages/home-page/landing";
import { AsFeatured } from "_pages/home-page/asfeatured";
import { Footer } from "_components/footer";
import { WhoWeAre } from "_pages/home-page/whoweare";
import "_styles/App.css";
import { screenSize } from "_store";
import { SmartMarketplace } from "_pages/home-page/smart-marketplace";
import { Management } from "_pages/home-page/management";

const HomePage = (props) => {
  const setWidth = screenSize((state) => state.setWidth);
  const setHeight = screenSize((state) => state.setHeight);

  const getCurrentWindowSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  window.addEventListener("resize", getCurrentWindowSize);

  return (
    <div>
      <Landing setLink={props.setLink}></Landing>
      <AsFeatured></AsFeatured>
      <SmartMarketplace></SmartMarketplace>
      <Management></Management>
      <Footer></Footer>
    </div>
  );
};

export { HomePage };
