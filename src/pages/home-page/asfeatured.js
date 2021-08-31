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
import Font from "_styles";

export const AsFeatured = (props) => {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Font.Heading5>AS FEATURED IN</Font.Heading5>
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
          <img
            alt={"New Straits Times"}
            src={straitsTimes}
            draggable={false}
          ></img>
          <img
            alt={"Petronas Future"}
            src={petronasFuture}
            draggable={false}
          ></img>
          <img alt={"Sabah Times"} src={sabahTimes} draggable={false}></img>
        </div>
        <div className="asFeaturedContainer">
          <img alt={"Daily Express"} src={dailyExpress} draggable={false}></img>
          <img alt={"My Hackathon"} src={myHackathon} draggable={false}></img>
          <img alt={"DNA"} src={theDna} draggable={false}></img>
        </div>
        <div className="asFeaturedContainer">
          <img alt={"Borneo Post"} src={borneoPost} draggable={false}></img>
          <img alt={"Cradle"} src={theCradle} draggable={false}></img>
          <img alt={"Vulcan Post"} src={vulcanPost} draggable={false}></img>
        </div>
        <div className="asFeaturedContainer">
          <img
            alt={"The Malaysian Reserve"}
            src={malaysiaReserve}
            draggable={false}
          ></img>
          <img
            alt={"Utusan Malaysia"}
            src={utusanMalaysia}
            draggable={false}
          ></img>
          <img alt={"Head's Up"} src={headsUp} draggable={false}></img>
        </div>
      </div>
    </div>
  );
};
