import React from "react";
import { Landing, LandingPhone } from "./landing";
import { AsFeatured } from "./asfeatured";
import { Footer, FooterPhone } from "_components/footer";
import "_styles/App.css";
import { screenSize } from "_store";
import { SmartMarketplace, SmartMarketplacePhone } from "./smart-marketplace";
import { Management, ManagementPhone } from "./management";
import { Interface, InterfacePhone } from "./interface";
import { Communication } from "./communication";
import { GetInTouch, GetInTouchPhone } from "./getintouch";
import { Ads } from "./ads";
import { largestPhoneSize } from "_utils";
import { SimpleQuick, SimpleQuickPhone } from "./simple-quick";

const HomePage = (props) => {
  const setWidth = screenSize((state) => state.setWidth);
  const setHeight = screenSize((state) => state.setHeight);

  const getCurrentWindowSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  window.addEventListener("resize", getCurrentWindowSize);

  const screenWidth = screenSize((state) => state.width);

  if (screenWidth > largestPhoneSize) {
    return (
      <div style={{ overflowX: "hidden" }}>
        <Landing setLink={props.setLink} />
        <SmartMarketplace />
        <AsFeatured />
        <SimpleQuick />
        <Management />
        <Interface />
        <Communication />
        <GetInTouch />
        {/* <Ads /> */}
        <Footer />
      </div>
    );
  } else {
    return (
      <div
        style={{
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <LandingPhone setLink={props.setLink} size="small" />
        <SmartMarketplacePhone />
        <SimpleQuickPhone />
        <ManagementPhone />
        <InterfacePhone />
        <GetInTouchPhone />
        <FooterPhone />
      </div>
    );
  }
};

export { HomePage };
