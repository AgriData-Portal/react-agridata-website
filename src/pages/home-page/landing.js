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

export const Landing = (props) => {
  return (
    <div>
      <div className="backgroundGradient">
        <HeaderLanding setLink={props.setLink}></HeaderLanding>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "6vw",
            marginLeft: "4.5vw",
          }}
        >
          <img
            alt={"Phone Home"}
            src={phoneHome}
            style={{
              width: "35vw",
              height: "auto",
              paddingTop: 8,
            }}
          ></img>
          <div style={{ marginTop: "5vw" }}>
            <p className="homeHeadingFont">
              The Future of Malaysia’s Agrispace is here.
            </p>
            <p className="homeBodyFont">
              A procurement and management app for retailers to source and
              secure goods, monitor transactions, and gain insights to improve
              their business.
            </p>
            <div style={{ marginTop: "3vw" }}>
              <img
                alt={"The App Button"}
                src={appButton}
                style={{ width: "15vw" }}
              ></img>
              <img
                alt={"The Team Button"}
                src={teamButton}
                style={{ width: "15vw" }}
              ></img>
            </div>
          </div>
        </div>
        <div
          style={{
            alignItems: "flex-end",
            justifyContent: "flex-end",
            display: "flex",
            marginRight: "6vw",
            paddingBottom: "3vw",
          }}
        >
          <img alt="2020 Winner" src={myWinner} style={{ width: "20vw" }}></img>
        </div>
      </div>
      <div>
        <p>AS FEATURED IN</p>
        <div>
          <img alt={"New Straits Times"} src={straitsTimes}></img>
          <img alt={"Daily Express"} src={dailyExpress}></img>
          <img alt={"Borneo Post"} src={borneoPost}></img>
          <img alt={"The Malaysian Reserve"} src={malaysiaReserve}></img>
        </div>
      </div>
    </div>
  );
};
