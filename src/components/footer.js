import React, { useState } from "react";
import Modal from "react-modal";

import facebook from "_images/footer/facebook_vector.png";
import instagram from "_images/footer/instagram_vector.png";
import whatsapp from "_images/footer/whatsapp_vector.png";
import logo from "_images/Header/Agridata-Logo-1.png";
import contactUs from "_images/Header/contact-us.png";
import "_styles/footer.css";
import "_styles/Font.css";
import "_styles/Flexbox.css";

export const Footer = (props) => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt={"logo"} />
      </div>
      <div
        style={{
          textAlign: "left",
          width: "30%",
          marginTop: "-3%",
          marginLeft: "3%",
        }}
      >
        <p
          style={{
            color: "#B0B0B0",
          }}
        >
          &copy; Copyright 2021 Pitch Software GmbH.
          <br /> All Rights Reserved
        </p>
      </div>
      <div className="follow-us">
        <div>
          <p className="headerFont">Follow Us</p>
        </div>
        <div
          style={{
            backgroundColor: "blue",
            height: "auto",
            flexDirection: "row",
            display: "flex",

            right: "100%",
            width: "200%",
          }}
        >
          <FollowIcon
            src={facebook}
            alt={"facebook_image"}
            link="https://www.instagram.com/agridataportal/?hl=en"
          />
          <FollowIcon
            src={instagram}
            alt={"instagram_image"}
            link="https://www.instagram.com/agridataportal/?hl=en"
          />
          <FollowIcon
            src={whatsapp}
            alt={"whatsapp_image"}
            link="https://www.instagram.com/agridataportal/?hl=en"
          />
        </div>
      </div>
    </div>
  );
};
const FollowIcon = (props) => {
  return (
    <div className="follow-icon">
      <button
        className="container"
        style={{ backgroundColor: "transparent", border: 0 }}
      >
        <a
          href={props.link}
          className="container"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={props.src} alt={props.alt} style={{ height: 25 }} />
        </a>
      </button>
    </div>
  );
};
