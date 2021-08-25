import React, { useState } from "react";
import { HeaderLanding } from "_components/header";
import "_styles/App.css";
import phoneHome from "_images/Home/phone-home.png";
import appButton from "_images/Home/The App Button.png";
import teamButton from "_images/Home/The Team Button.png";
import myWinner from "_images/Home/Group 3.png";
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
              <button
                onClick={() => props.setLink(1)}
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
              >
                <img
                  alt={"The Team Button"}
                  src={teamButton}
                  style={{ width: "15vw" }}
                ></img>
              </button>
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
    </div>
  );
};
