import React from "react";
import { screenSize } from "_store";
import "_styles/App.css";
import ads11 from "_images/Ads/11.png";
import ads12 from "_images/Ads/12.png";
import ads13 from "_images/Ads/13.png";
import ads14 from "_images/Ads/14.png";
import ads21 from "_images/Ads/21.png";
import ads22 from "_images/Ads/22.png";
import ads23 from "_images/Ads/23.png";
import ads24 from "_images/Ads/24.png";
import { Logo } from "_elements";
import Font from "_styles";

export const Ads = (props) => {
  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          marginLeft: "4vw",
        }}
      >
        <div
          style={{
            margin: "2vw",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Logo size="big" />
        </div>
        <div style={{ margin: "2vw" }}>
          <Font.Heading style={{ fontWeight: "bold" }}>
            agridataportal
          </Font.Heading>
          <Font.Heading>
            We are a B2B App platform reshaping Sabah’s Agriculture Industry
            through Digitalization and AI.
          </Font.Heading>
        </div>
      </div>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <AdsImg src={ads11} alt={"ads11"}></AdsImg>
          <AdsImg src={ads12} alt={"ads12"}></AdsImg>
          <AdsImg src={ads13} alt={"ads13"}></AdsImg>
          <AdsImg src={ads14} alt={"ads14"}></AdsImg>
        </div>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <AdsImg src={ads21} alt={"ads21"}></AdsImg>
          <AdsImg src={ads22} alt={"ads22"}></AdsImg>
          <AdsImg src={ads23} alt={"ads23"}></AdsImg>
          <AdsImg src={ads24} alt={"ads24"}></AdsImg>
        </div>
      </div>
    </div>
  );
};

const AdsImg = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      draggable={false}
      style={{ width: "20vw", margin: "1vw" }}
    ></img>
  );
};
