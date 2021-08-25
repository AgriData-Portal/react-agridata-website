import React, { useState } from "react";
import { HeaderLanding } from "_components/header";
import "_styles/App.css";
import phoneHome from "_images/Home/phone-home.png";
import appButton from "_images/Home/The App Button.png";
import teamButton from "_images/Home/The Team Button.png";
import myWinner from "_images/Home/Group 3.png";
import theCradle from "_images/As_Featured/1 3.png";
import theDna from "_images/As_Featured/2 5.png";
import sabahTimes from "_images/As_Featured/3 5.png";
import borneoPost from "_images/As_Featured/4 4.png";
import straitsTimes from "_images/As_Featured/5 3.png";
import VulcanPost from "_images/As_Featured/6 2.png";
import utasanMalysia from "_images/As_Featured/7 2.png";
import dailyExpress from "_images/As_Featured/daily express.png";
import myHackathon from "_images/As_Featured/MyHackathon.png";
import malaysiaReserve from "_images/As_Featured/tmr.png";
import petronasFuture from "_images/As_Featured/Petronas Logo.png";
import headsUp from "_images/As_Featured/Head Up.png";
import "_styles/Font.css";

export const AsFeatured = (props) => {
  return (
    <div>
      <p>AS FEATURED IN</p>
      <div>
        <img alt={"New Straits Times"} src={straitsTimes}></img>
        <img alt={"Daily Express"} src={dailyExpress}></img>
        <img alt={"Borneo Post"} src={borneoPost}></img>
        <img alt={"The Malaysian Reserve"} src={malaysiaReserve}></img>
      </div>
    </div>
  );
};
