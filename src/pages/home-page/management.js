import React from "react";
import { screenSize } from "_store";
import { max } from "_utils";
import Font from "_styles";
import managementGraph from "_images/Management/management_graph.png";
import phoneAnalytics from "_images/Management/phone_analytics.png";

export const Management = (props) => {
  const screenWidth = screenSize((state) => state.width);
  const screenHeight = screenSize((state) => state.height);

  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        height: "85vh",
      }}
    >
      <div>
        <img
          alt={"Phone Analytics"}
          src={phoneAnalytics}
          style={{
            width: "35vw",
            marginTop: "-3vw",
            marginLeft: "3vw",
          }}
        ></img>
        <img
          alt={"Management Graph"}
          src={managementGraph}
          style={{
            width: "25vw",
            marginLeft: "30vw",
            marginTop: "-65vw",
            marginBottom: "12vw",
          }}
        ></img>
      </div>
      <div style={{ marginTop: "1vw", marginRight: "6vw" }}>
        <Font.Heading5 style={{ textAlign: "right" }}>
          Spend management
        </Font.Heading5>
        <Font.Sub1 style={{ width: "38vw", textAlign: "right" }}>
          Save more money, keep an eye of your monthly charges and be up-to-date
          in market price fluctuations. You may also conduct supplier
          performance analysis and manage preferred items for easier purchasing.
        </Font.Sub1>
        <Font.Button1 style={{ textAlign: "right" }}>Learn More</Font.Button1>
      </div>
    </div>
  );
};
