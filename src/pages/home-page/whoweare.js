import React, { useState } from "react";
import { HeaderLanding } from "_components/header";
import "_styles/App.css";
import "_styles/Font.css";
import whoWeAre from "_images/Home/whoweare.png";
import learnMore from "_images/Home/learnmore.png";

export const WhoWeAre = (props) => {
  return (
    <div className="backgroundGradient">
      <div style={{ flexDirection: "row", display: "flex" }}>
        <div>
          <h1 className="whoWeAreTitle"> Who We Are</h1>
          <p className="whoWeAreBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <p className="whoWeAreBody">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <img alt="Who We Are" src={whoWeAre} style={{ width: "50vw" }}></img>
        </div>
      </div>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <div>
          <img
            alt="Learn More"
            src={learnMore}
            style={{ width: " 50vw" }}
          ></img>
        </div>
        <div>
          <h1 className="agriTitle">
            AgriData is pioneering
            <a style={{ color: "#8EAB3D" }}> digitalization </a>and
            <a style={{ color: "#8EAB3D" }}> AI </a>in the agrispace.
          </h1>
          <p className="agriBody">
            We want to bring the agricultural sector in Malaysia to the next
            level, and what better way to start it at home here in Borneo. We
            want to give more value to all key players in agriculture,
            especially the farmers so they can see farming as a way to change
            their life.
          </p>
          <p className="agriBody">
            With the help of Artificial Intelligence, it can potentially change
            the way we perceive Agriculture, allowing farmers and all supply
            chain professionals to achieve more results with minimal effort, and
            to better manage costs, transactions and quality of processes —
            making the industry efficient and effective.
          </p>
        </div>
      </div>
    </div>
  );
};
