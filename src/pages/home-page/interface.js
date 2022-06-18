import React from "react";
import { screenSize } from "_store";
import "_styles/App.css";
import phoneLeft from "_images/Interface/phoneLeft.png";
import phoneRight from "_images/Interface/phoneRight.png";
import phoneUp from "_images/Interface/phoneUp.png";
import phoneDown from "_images/Interface/phoneDown.png";
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
          paddingTop: "30px",
        }}
      >
        <Font.Heading5>Customized Interface</Font.Heading5>
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

export const InterfacePhone = (props) => {
  const screenWidth = screenSize((state) => state.width);
  const screenHeight = screenSize((state) => state.height);
  return (
    <div
      className="backgroundGradient"
      style={{
        flexDirection: "column",
        display: "flex",
      }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginLeft: "10vw",
          marginRight: "10vw",
          paddingTop: "5px",
        }}
      >
        <Font.Heading5 style={{ textAlign: "center", fontSize: "6.5vw" }}>
          Customized Interface
        </Font.Heading5>
        <Font.Sub1 style={{ textAlign: "center", fontSize: "4vw" }}>
          Every dashboard features are customized according to the user’s role.
          Each employees registered to the app may monitor and/or manage
          transactions in a user-friendly interface.
        </Font.Sub1>
        {/* <Font.Button1
          style={{ textAlign: "center", fontSize: "4vw", color: "#8EAB3D" }}
        >
          Learn More
        </Font.Button1> */}
      </div>

      <div
        style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}
      >
        <img
          src={phoneUp}
          alt={"Supplier's phone interface"}
          draggable={false}
          style={{
            objectFit: "contain",
            width: "200px",
          }}
        ></img>
        <img
          src={phoneDown}
          alt={"Retailer's phone interface"}
          draggable={false}
          style={{
            objectFit: "contain",
            width: "200px",
            marginTop: "10px",
            marginRight: "40px",
          }}
        ></img>
      </div>
    </div>
  );
};
