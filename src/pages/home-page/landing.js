import React, { useState } from "react";
import { HeaderLanding } from "_components/header";
import "_styles/App.css";
import phoneHome from "_images/Home/phone-home.png";
import appStore from "_images/Home/App store.png";
import googlePlay from "_images/Home/Google Play.png";
import myWinner from "_images/Home/Group 3.png";
import "_styles/Font.css";

export const Landing = (props) => {
  return (
    <div className="backgroundGradient" style={{ height: "100vh" }}>
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
            A procurement and management app for retailers to source and secure
            goods, monitor transactions, and gain insights to improve their
            business.
          </p>
          <div style={{ marginTop: "3vw" }}>
            <img
              alt={"Google Play"}
              src={googlePlay}
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
                alt={"App Store"}
                src={appStore}
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
  );
};
