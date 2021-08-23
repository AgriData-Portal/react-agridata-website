import React from "react";
import facebook from "_images/footer/facebook_vector.png";
import instagram from "_images/footer/instagram_vector.png";
import whatsapp from "_images/footer/whatsapp_vector.png";
import { Logo } from "_elements";
import { CopyRightText, FollowUsText } from "_styles/font";

export const Footer = (props) => {
  return (
    <FooterWrapper>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Logo size="big" />
        <CopyRightText>
          &copy; Copyright 2021 Pitch Software GmbH.
          <br /> All Rights Reserved
        </CopyRightText>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <FollowUsText
          style={{
            textAlign: "right",

            paddingRight: "0.5vw",
          }}
        >
          Follow Us
        </FollowUsText>
        <div
          style={{
            height: "auto",
            display: "flex",
            justifyContent: "flex-end",
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
    </FooterWrapper>
  );
};
const FollowIcon = (props) => {
  return (
    <div style={{ width: "fit-content" }}>
      <button style={{ backgroundColor: "transparent", border: 0 }}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={props.src} alt={props.alt} style={{ height: "2.5vw" }} />
        </a>
      </button>
    </div>
  );
};

const FooterWrapper = ({ children }) => {
  return (
    <div
      style={{
        padding: "5vw",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {children}
    </div>
  );
};

// const FooterWrapper = styled.div`
//   height: auto;
//   background: transparent;
//   padding: 100px 5vw 5vw 5vw;
// `;
