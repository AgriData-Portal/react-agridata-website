import React, { useState, useEffect } from "react";
import { HeaderLanding } from "_components/header";
import "_styles/App.css";
import phoneHome from "_images/Home/phone-home.png";
import appStore from "_images/Home/App store.png";
import googlePlay from "_images/Home/Google Play.png";
import myWinner from "_images/Home/Group 3.png";
import "_styles/Font.css";
import { screenSize } from "_store";
import { max } from "_utils";
import Font from "_styles";
export const Landing = (props) => {
  const screenWidth = screenSize((state) => state.width);
  const screenHeight = screenSize((state) => state.height);

  return (
    <div
      className="backgroundGradient"
      style={{
        height: "100vh",
        maxHeight: 1080,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <HeaderLanding setLink={props.setLink}></HeaderLanding>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginRight: "6vw",
          marginLeft: "4.5vw",
        }}
      >
        <h1>{max("90vh", 770, screenWidth, screenHeight)}</h1>
        <img
          alt={"Phone Home"}
          src={phoneHome}
          style={{
            width: "50vw",
            height: "auto",
            paddingTop: 8,
          }}
        />
        <div style={{ marginTop: "5vw" }}>
          <Font.Heading3 style={{ color: "#8EAB3D" }}>
            The Future of Malaysia’s Agrispace is here.
          </Font.Heading3>
          <Font.Sub4>
            A procurement and management app for retailers to source and secure
            goods, monitor transactions, and gain insights to improve their
            business.
          </Font.Sub4>
          <Font.Sub3 style={{ color: "#F4C621" }}>
            Download Now for Free
          </Font.Sub3>
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
            <div
              style={{
                alignSelf: "flex-end",
                justifyContent: "flex-end",
                display: "flex",
                marginRight: "3vw",
              }}
            >
              <img
                alt="2020 Winner"
                src={myWinner}
                style={{ width: "20vw" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
