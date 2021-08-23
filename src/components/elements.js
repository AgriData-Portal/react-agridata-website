import React from "react";
import logo from "_images/Header/Agridata-Logo-1.png";

export const Logo = ({ size, ...otherProps }) => {
  return (
    <div
      style={{
        width: size === "big" ? "10vw" : 50,
        height: "auto",
      }}
    >
      <img
        src={logo}
        style={{
          width: size === "big" ? "10vw" : 50,
          height: "auto",
        }}
        alt={"logo"}
      />
    </div>
  );
};
