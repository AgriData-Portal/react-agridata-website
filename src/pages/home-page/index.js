import React, { useState } from "react";
import { Landing } from "_pages/home-page/landing";
import { Footer } from "_components/footer";

import "_styles/App.css";

const HomePage = (props) => {
  return (
    <div>
      <Landing setLink={props.setLink}></Landing>
      <Footer></Footer>
    </div>
  );
};

export { HomePage };
