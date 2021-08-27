import React, { useState } from "react";
import { HeaderLanding } from "_components/header";
import "_styles/App.css";
import "_styles/Font.css";
import phoneHome from "_images/Home/phone-home.png";
import appButton from "_images/Home/The App Button.png";
import teamButton from "_images/Home/The Team Button.png";
import myWinner from "_images/Home/Group 3.png";
import theCradle from "_images/As_Featured/1 3.png";
import theDna from "_images/As_Featured/2 5.png";
import sabahTimes from "_images/As_Featured/3 5.png";
import borneoPost from "_images/As_Featured/4 4.png";
import straitsTimes from "_images/As_Featured/5 3.png";
import vulcanPost from "_images/As_Featured/6 2.png";
import utusanMalaysia from "_images/As_Featured/7 2.png";
import dailyExpress from "_images/As_Featured/daily express.png";
import myHackathon from "_images/As_Featured/MyHackathon.png";
import malaysiaReserve from "_images/As_Featured/tmr.png";
import petronasFuture from "_images/As_Featured/Petronas Logo.png";
import headsUp from "_images/As_Featured/Head Up.png";

export const AsFeatured = (props) => {
  return (
    <div>
      <p className="asFeatured">AS FEATURED IN</p>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "10vw",
          marginRight: "10vw",
        }}
      >
        <div className="asFeaturedContainer">
          <img alt={"New Straits Times"} src={straitsTimes}></img>
          <img alt={"Petronas Future"} src={petronasFuture}></img>
          <img alt={"Sabah Times"} src={sabahTimes}></img>
        </div>
        <div className="asFeaturedContainer">
          <img alt={"Daily Express"} src={dailyExpress}></img>
          <img alt={"My Hackathon"} src={myHackathon}></img>
          <img alt={"DNA"} src={theDna}></img>
        </div>
        <div className="asFeaturedContainer">
          <img alt={"Borneo Post"} src={borneoPost}></img>
          <img alt={"Cradle"} src={theCradle}></img>
          <img alt={"Vulcan Post"} src={vulcanPost}></img>
        </div>
        <div className="asFeaturedContainer">
          <img alt={"The Malaysian Reserve"} src={malaysiaReserve}></img>
          <img alt={"Utusan Malaysia"} src={utusanMalaysia}></img>
          <img alt={"Head's Up"} src={headsUp}></img>
        </div>
      </div>
    </div>
  );
};