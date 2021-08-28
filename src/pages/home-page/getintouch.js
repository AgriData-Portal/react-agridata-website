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
        }}
      >
        <div style={{ width: "35vw" }}>
          <Font.Heading4 style={{ lineHeight: "3.5vw" }}>
            Let's Change The{" "}
            <span style={{ color: "#8EAB3D" }}>Future of Agriculture </span>
            Together
          </Font.Heading4>
          <Font.Body2 style={{ marginTop: "-3vw" }}>
            Interested to Collaborate, Invest, or Find Out More About Us?
          </Font.Body2>
        </div>
        <div>
          <img
            src={getInTouch}
            alt={"Get In Touch"}
            style={{ marginTop: "6vw", width: "20vw" }}
          ></img>
        </div>
      </div>
    </div>
  );
};
