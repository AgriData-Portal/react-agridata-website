import React, { useState } from "react";
import styled from "@emotion/styled";

import facebook from "_images/footer/facebook_vector.png";
import instagram from "_images/footer/instagram_vector.png";
import whatsapp from "_images/footer/whatsapp_vector.png";

import { Logo } from "_elements";

import { CopyRightText, FollowUsText } from "_styles/font";

export const Footer = (props) => {
  return (
    <FooterWrapper>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Logo size="big" />
          <CopyRightText>
            &copy; Copyright 2021 Pitch Software GmbH.
            <br /> All Rights Reserved
          </CopyRightText>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FollowUsText>Follow Us</FollowUsText>
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
      </div>
    </FooterWrapper>
  );
};
const FollowIcon = (props) => {
  return (
    <div style={{ width: "fit-content" }}>
      <button style={{ backgroundColor: "transparent", border: 0 }}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={props.src} alt={props.alt} style={{ height: 30 }} />
        </a>
      </button>
    </div>
  );
};

const FooterWrapper = styled.div`
  height: auto;
  background: transparent;
  display: block;
  padding: 100px 5vw 5vw 5vw;
`;
