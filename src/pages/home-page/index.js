import React, { useState } from "react";
import { Landing } from "_pages/home-page/landing";
import { AsFeatured } from "_pages/home-page/asfeatured";
import { Footer } from "_components/footer";
import { WhoWeAre } from "_pages/home-page/whoweare";
import "_styles/App.css";

const HomePage = (props) => {
  return (
    <div>
      <Landing setLink={props.setLink}></Landing>
      <AsFeatured></AsFeatured>
      <WhoWeAre></WhoWeAre>
      <Footer></Footer>
    </div>
  );
};

export { HomePage };
