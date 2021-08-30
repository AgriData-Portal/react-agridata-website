import React from "react";
import { screenSize } from "_store";
import "_styles/App.css";
import phoneLeft from "_images/Interface/phoneLeft.png";
import phoneRight from "_images/Interface/phoneRight.png";
import roleLeft from "_images/Interface/roleLeft.png";
import roleRight from "_images/Interface/roleRight.png";
import Font from "_styles";

export const Interface = (props) => {
  const screenWidth = screenSize((state) => state.width);
  const screenHeight = screenSize((state) => state.height);
  return (
    <div
      className="backgroundGradient"
      style={{
        maxHeight: 1256,
        paddingTop: "1vw",
      }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginLeft: "20vw",
          marginRight: "20vw",
        }}
      >
        <Font.Heading5>Intuitive Interface</Font.Heading5>
        <Font.Sub1>
          Every dashboard features are customized according to the user’s role.
          Each employees registered to the app may monitor and/or manage
          transactions in a user-friendly interface.
        </Font.Sub1>
      </div>

      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={roleLeft}
          alt={"Supplier's role"}
          draggable={false}
          style={{
            width: "20vw",
            marginRight: "-11vw",
            marginBottom: "13vw",
            zIndex: 10,
          }}
        ></img>
        <img
          src={phoneLeft}
          alt={"Supplier's phone interface"}
          draggable={false}
          style={{
            width: "28.5vw",
            height: "auto",
            paddingTop: 8,
          }}
        ></img>
        <img
          src={phoneRight}
          alt={"Retailer's phone interface"}
          draggable={false}
          style={{
            width: "28.5vw",
            height: "auto",
            paddingTop: 8,
          }}
        ></img>
        <img
          src={roleRight}
          alt={"Retailer's role"}
          draggable={false}
          style={{ width: "20vw", marginLeft: "-8vw", marginTop: "15vw" }}
        ></img>
      </div>
    </div>
  );
};
