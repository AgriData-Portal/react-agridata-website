import React from "react";
import Font from "_styles";
import OrderQuotation from "_images/Marketplace/OrderQuotation.png";
import OrderChat from "_images/Marketplace/OrderChat.png";
import "_styles/App.css";

export const SimpleQuick = (props) => {
  return (
    <div
      className="backgroundGradient"
      style={{ flexDirection: "row", display: "flex" }}
    >
      <div style={{ marginLeft: "8vw", marginTop: "20px" }}>
        <Font.Heading5>Super Simple and Quick</Font.Heading5>
        <Font.Sub1 style={{ width: "38vw" }}>
          Busy working? AG-Market does all the hard work for you. From sourcing
          your items, sending, receiving and keeping all documentations and
          gathering insights — all in a click.
        </Font.Sub1>
        {/* <Font.Button1>Learn More</Font.Button1> */}
      </div>
      <div>
        <img
          alt={"Order Chat"}
          src={OrderChat}
          draggable={false}
          style={{
            width: "28vw",
            marginTop: "28vh",
            marginLeft: "2vw",
          }}
        ></img>
        <img
          alt={"Order Quotation"}
          src={OrderQuotation}
          draggable={false}
          style={{
            width: "30vw",
            marginLeft: "21vw",
            marginTop: "-100vh",
            marginBottom: "25px",
          }}
        ></img>
      </div>
    </div>
  );
};

export const SimpleQuickPhone = (props) => {
  return (
    <div
      className="backgroundGradient"
      style={{ flexDirection: "column", display: "flex" }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginLeft: "10vw",
          marginRight: "10vw",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <Font.Heading5 style={{ fontSize: "6.5vw" }}>
          Super Simple and Quick
        </Font.Heading5>
        <Font.Sub1 style={{ fontSize: "4vw" }}>
          Busy working? AG-Market does all the hard work for you. From sourcing
          your items, sending, receiving and keeping all documentations and
          gathering insights <br />— all in a click.
        </Font.Sub1>
        {/* <Font.Button1 style={{ fontSize: "4vw", color: "#8EAB3D" }}>
          Learn More
        </Font.Button1> */}
      </div>
      <div style={{}}>
        <img
          alt={"Order Chat"}
          src={OrderChat}
          draggable={false}
          style={{
            width: "250px",
            paddingTop: "5px",
            marginLeft: "5vw",
          }}
        ></img>
        <img
          alt={"Order Quotation"}
          src={OrderQuotation}
          draggable={false}
          style={{
            width: "250px",
            marginBottom: "5px",
            marginLeft: "36vw",
            marginTop: "-63vh",
          }}
        ></img>
      </div>
    </div>
  );
};
