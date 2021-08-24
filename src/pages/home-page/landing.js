import React, { useState } from "react";
import { HeaderLanding } from "_components/header";
import "_styles/App.css";
import teamLogo from "_images/Home/Group 8.png";
import workLogo from "_images/Home/What we do.png";
import imgLeft from "_images/Home/IMG_0175 1.png";
import imgRight from "_images/Home/IMG_0173 1.png";
import phoneHome from "_images/Home/phone-home.png";

export const Landing = (props) => {
  return (
    <div className="backgroundGradient">
      <HeaderLanding setLink={props.setLink}></HeaderLanding>
      <div>
        <img
          alt={"Phone Home"}
          src={phoneHome}
          style={{ width: "35vw", height: "auto", paddingTop: 8 }}
        ></img>
        <p style= {{fontSize}}>The Future of Malaysia’s Agrispace is here.</p>
        <p>
          A procurement and management app for retailers to source and secure
          goods, monitor transactions, and gain insights to improve their
          business.
        </p>
      </div>
    </div>
  );
};
