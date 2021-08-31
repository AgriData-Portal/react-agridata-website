import React from "react";
import { screenSize } from "_store";
import "_styles/App.css";
import phone from "_images/Communication/phone.png";
import Font from "_styles";

export const Communication = (props) => {
  const screenWidth = screenSize((state) => state.width);
  const screenHeight = screenSize((state) => state.height);
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "5vh",
        }}
      >
        <div style={{ marginLeft: "8vw", marginTop: "5vh" }}>
          <Font.Heading5>In-App Communication</Font.Heading5>
          <Font.Sub1 style={{ width: "38vw" }}>
            Using a lot of apps and tools to keep track of transactions and
            conversations can be draining. AG-Market makes it easy to directly
            communicate about orders and queries, allowing transparency and
            maximum accountability.
          </Font.Sub1>
          <Font.Button1>Learn More</Font.Button1>
        </div>
        <div>
          <img
            src={phone}
            alt={"phone"}
            draggable={false}
            style={{
              width: "52vw",
              maxHeight: "100vh",
            }}
          ></img>
        </div>
      </div>
    </div>
  );
};
