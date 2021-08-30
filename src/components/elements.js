import React from "react";
import logo from "_images/Header/Agridata-Logo-1.png";

export const Logo = ({ size, ...otherProps }) => {
  return (
    <img
      src={logo}
      draggable={false}
      style={{
        width: size === "big" ? "10vw" : 50,
        maxWidth: 155,
        height: "auto",
      }}
      alt={"logo"}
    />
  );
};
