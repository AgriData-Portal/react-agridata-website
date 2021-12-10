import React from "react";
import { HeaderLanding, HeaderPhone } from "_components/header";
import "_styles/App.css";
import phoneHome from "_images/Home/phone-home.png";
import appStore from "_images/Home/App store.png";
import googlePlay from "_images/Home/Google Play.png";
import myWinner from "_images/Home/Group 3.png";
import "_styles/Font.css";
import { screenSize } from "_store";
import { max, largestPhoneSize } from "_utils";
import Font from "_styles";

export const Landing = (props, size) => {
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
        {size === "small" ? null : (
          <img
            alt={"Phone Home"}
            src={phoneHome}
            draggable={false}
            style={{
              width: "28.5vw",
              height: "auto",
              paddingTop: 8,
            }}
          />
        )}

        <div style={{ marginTop: "4vw", marginLeft: "5vw" }}>
          <Font.Heading3
            style={{
              color: "#8EAB3D",
              lineHeight: "4vw",
              height: "12vw",
              marginBottom: "2vh",
            }}
          >
            THE FUTURE OF <br /> MALAYSIA'S AGRISPACE <br /> IS HERE.
          </Font.Heading3>
          <Font.Sub4 style={{ marginBottom: "5vh", width: "42vw" }}>
            A procurement and management app for retailers to source and secure
            goods, monitor transactions, and gain insights to improve their
            business.
          </Font.Sub4>
          <Font.Sub3 style={{ marginBottom: "1vh" }}>
            Download Now for Free
          </Font.Sub3>
          <div>
            <img
              alt={"Google Play"}
              src={googlePlay}
              draggable={false}
              style={{ width: "12vw" }}
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
                draggable={false}
                style={{ width: "12vw" }}
              ></img>
            </button>
            <div
              style={{
                alignSelf: "flex-end",
                justifyContent: "flex-end",
                display: "flex",
                marginTop: "5vw",
              }}
            >
              <img
                alt="2020 Winner"
                src={myWinner}
                draggable={false}
                style={{
                  width: "12vw",
                  marginLeft: "45vw",
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LandingPhone = (props, size) => {
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
      }}
    >
      <HeaderPhone setLink={props.setLink}></HeaderPhone>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "7vw",
        }}
      >
        <Font.Heading4
          style={{
            color: "#8EAB3D",
            height: "12vw",
            marginBottom: "2vh",
            textAlign: "center",
            fontSize: "7vw",
            marginTop: "5vh",
          }}
        >
          THE FUTURE OF MALAYSIA'S AGRISPACE IS HERE.
        </Font.Heading4>
        <Font.Sub4
          style={{
            padding: "5vw",
            paddingTop: "10vh",
            marginBottom: "5vh",
            fontSize: "4vw",
            textAlign: "center",
          }}
        >
          A procurement and management app for retailers to source and secure
          goods, monitor transactions, and gain insights to improve their
          business.
        </Font.Sub4>
        <Font.Sub3
          style={{ marginBottom: 0, textAlign: "center", fontSize: "4vw" }}
        >
          Download Now for Free
        </Font.Sub3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            alt={"Google Play"}
            src={googlePlay}
            draggable={false}
            style={{ width: "45vw", margin: "3vw" }}
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
              draggable={false}
              style={{ width: "45vw" }}
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};
