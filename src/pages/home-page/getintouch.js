import React from "react";
import { screenSize } from "_store";
import "_styles/App.css";
import getInTouch from "_images/GetInTouch/GetInTouch.png";
import Font from "_styles";

export const GetInTouch = (props) => {
  const screenWidth = screenSize((state) => state.width);
  const screenHeight = screenSize((state) => state.height);
  return (
    <div
      className="backgroundGradient"
      style={{
        maxHeight: 339,
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "35vw",
            marginTop: "-2vw",
          }}
        >
          <Font.Heading4 style={{ lineHeight: "4vw" }}>
            Let's Change The{" "}
            <span style={{ color: "#8EAB3D" }}>Future of Agriculture </span>
            Together
          </Font.Heading4>
          <Font.Body2 style={{ marginTop: "-2vw" }}>
            Interested to Collaborate, Invest, or Find Out More About Us?
          </Font.Body2>
        </div>
        <div>
          <img
            src={getInTouch}
            alt={"Get In Touch"}
            draggable={false}
            style={{ width: "20vw" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export const GetInTouchPhone = (props) => {
  const screenWidth = screenSize((state) => state.width);
  const screenHeight = screenSize((state) => state.height);
  return (
    <div
      className="backgroundGradient"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        <Font.Heading1 style={{ lineHeight: "4vw" }}>
          Let's Change The Future of Agriculture Together
        </Font.Heading1>

        <div>
          <img
            src={getInTouch}
            alt={"Get In Touch"}
            draggable={false}
            style={{ width: "180px" }}
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=601165691998",
                "blank"
              )
            }
          ></img>
        </div>
      </div>
    </div>
  );
};
