import React, { useState } from "react";
import { Header } from "_components/header";
import "_styles/App.css";
import teamLogo from "_images/Home/Group 8.png";
import workLogo from "_images/Home/What we do.png";
import imgLeft from "_images/Home/IMG_0175 1.png";
import imgRight from "_images/Home/IMG_0173 1.png";

export const Landing = (props) => {
  return (
    <div>
      <Header></Header>
      <div>
        <div
          style={{
            width: "50%",
            marginLeft: "25%",
          }}
        >
          <h1>BUYING AND SELLING HAS NEVER BEEN THIS EASY</h1>
        </div>
        <div
          style={{
            width: "50%",
            marginLeft: "25%",
          }}
        >
          <h2>
            Farmers get work work hand-in-hand with Retailers through Agridata's
            platform.
          </h2>
        </div>
        <div
          style={{ flexDirection: "row", display: "flex", marginLeft: "30%" }}
        >
          <button style={{ backgroundColor: "transparent", border: 0 }}>
            <a href={props.link} className="container">
              <img
                src={teamLogo}
                alt={"team"}
                style={{
                  width: "80%",
                  margin: "2%",
                  marginTop: "5%",
                }}
              />
            </a>
          </button>
          <button style={{ backgroundColor: "transparent", border: 0 }}>
            <a href={props.link} className="container">
              <img
                src={workLogo}
                alt={"work"}
                style={{
                  width: "80%",
                  height: "50%",
                  margin: "2%",
                  marginTop: "5%",
                }}
              />
            </a>
          </button>
        </div>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <img
            src={imgLeft}
            alt={"imgLeft"}
            style={{
              width: "45%",
              height: "45%",
              margin: "2%",
              marginTop: "5%",
            }}
          />
          <img
            src={imgRight}
            alt={"imgRight"}
            style={{
              width: "45%",
              height: "45%",
              margin: "2%",
              marginTop: "5%",
            }}
          />
        </div>
      </div>
      <div>
        <div
          style={{
            width: "50%",
            marginLeft: "25%",
          }}
        >
          <h1>BUYING AND SELLING HAS NEVER BEEN THIS EASY</h1>
        </div>
        <div
          style={{
            width: "50%",
            marginLeft: "25%",
          }}
        >
          <h2>
            Farmers get work work hand-in-hand with Retailers through Agridata's
            platform.
          </h2>
        </div>
        <div
          style={{ flexDirection: "row", display: "flex", marginLeft: "30%" }}
        >
          <button style={{ backgroundColor: "transparent", border: 0 }}>
            <a href={props.link} className="container">
              <img
                src={teamLogo}
                alt={"team"}
                style={{
                  width: "80%",
                  margin: "2%",
                  marginTop: "5%",
                }}
              />
            </a>
          </button>
          <button style={{ backgroundColor: "transparent", border: 0 }}>
            <a href={props.link} className="container">
              <img
                src={workLogo}
                alt={"work"}
                style={{
                  width: "80%",
                  height: "50%",
                  margin: "2%",
                  marginTop: "5%",
                }}
              />
            </a>
          </button>
        </div>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <img
            src={imgLeft}
            alt={"imgLeft"}
            style={{
              width: "45%",
              height: "45%",
              margin: "2%",
              marginTop: "5%",
            }}
          />
          <img
            src={imgRight}
            alt={"imgRight"}
            style={{
              width: "45%",
              height: "45%",
              margin: "2%",
              marginTop: "5%",
            }}
          />
        </div>
      </div>
    </div>
  );
};
