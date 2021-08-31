import React from "react";
import { screenSize } from "_store";
import { max } from "_utils";
import Font from "_styles";
import paperLess from "_images/Marketplace/Paperless.png";
import instantAccess from "_images/Marketplace/Instant.png";
import smartAlert from "_images/Marketplace/Alert.png";
import quickApproval from "_images/Marketplace/Approval.png";
import expenseTracker from "_images/Marketplace/Tracker.png";
import allData from "_images/Marketplace/Data.png";
import OrderQuotation from "_images/Marketplace/OrderQuotation.png";
import OrderChat from "_images/Marketplace/OrderChat.png";
import Carousel from "react-multi-carousel";

const SmartIcon = (props) => {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2vw",
        marginBottom: "2vw",
      }}
    >
      <img
        alt={props.imgAlt}
        src={props.imgSrc}
        draggable={false}
        style={{ width: "8vw" }}
      ></img>
      <Font.Sub1>{props.title}</Font.Sub1>
      <Font.Body1>{props.content}</Font.Body1>
    </div>
  );
};

export const SmartMarketplace = (props) => {
  const screenWidth = screenSize((state) => state.width);
  const screenHeight = screenSize((state) => state.height);

  return (
    <div
      style={{
        height: "155vh",
        maxHeight: 2160,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginLeft: "20vw",
          marginRight: "20vw",
          marginTop: "5vh",
          paddingBottom: "3vw",
        }}
      >
        <Font.Heading5>Your Trusted Smart Marketplace</Font.Heading5>
        <Font.Sub1>
          Managing your business and sourcing goods shouldn’t be exhausting, it
          should be effortless. AG-Market is a fresh way to access high-quality
          yet low-priced produce and to closely monitor your <br /> business
          transactions.
        </Font.Sub1>
      </div>

      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginLeft: "12vw",
          marginRight: "12vw",
          paddingBottom: "8vw",
        }}
      >
        <div>
          <SmartIcon
            imgAlt={"Paperless"}
            imgSrc={paperLess}
            title={"Paperless Process"}
            content={
              "Manage all PO documentations effectively without printouts and reduce mountains of paperwork"
            }
          ></SmartIcon>

          <SmartIcon
            imgAlt={"Quick Approvals"}
            imgSrc={quickApproval}
            title={"Quick Approvals"}
            content={
              "Send purchase order and approve quotations in one go — anytime, anywhere and on any devices."
            }
          ></SmartIcon>
        </div>

        <div>
          <SmartIcon
            imgAlt={"Instant Access"}
            imgSrc={instantAccess}
            title={"Instant Access"}
            content={
              "Source produce easily and get the best offers with just a few clicks."
            }
          ></SmartIcon>
          <SmartIcon
            imgAlt={"Expense Tracker"}
            imgSrc={expenseTracker}
            title={"Expense Tracker"}
            content={
              "Get insights of your purchases and control your spendings"
            }
          ></SmartIcon>
        </div>

        <div>
          <SmartIcon
            imgAlt={"Smart Alerts"}
            imgSrc={smartAlert}
            title={"Smart Alerts"}
            content={
              "Easily update your information, and get alerts on orders payments and other transactions"
            }
          ></SmartIcon>
          <SmartIcon
            imgAlt={"All Data in One Place"}
            imgSrc={allData}
            title={"All Data in One Place"}
            content={
              "Access all POs, Quotations, Invoices and payment informations in one place."
            }
          ></SmartIcon>
        </div>
      </div>
    </div>
  );
};

const SmartIconPhone = (props) => {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: "2vw",
      }}
    >
      <div style={{ display: "flex", marginLeft: "9vw", marginRight: "5vw" }}>
        <img
          alt={props.imgAlt}
          src={props.imgSrc}
          draggable={false}
          style={{ width: "10vw", height: "6vh", marginTop: "1vh" }}
        ></img>
        <div style={{ marginLeft: "3vw", marginRight: "3vw" }}>
          <Font.Sub1 style={{ fontSize: "4vw", fontWeight: "bold" }}>
            {props.title}
          </Font.Sub1>
          <Font.Body1 style={{ fontSize: "4vw" }}>{props.content}</Font.Body1>
        </div>
      </div>
    </div>
  );
};

export const SmartMarketplacePhone = (props) => {
  const screenWidth = screenSize((state) => state.width);
  const screenHeight = screenSize((state) => state.height);

  return (
    <div
      style={{
        height: "100vh",
        maxHeight: 1080,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginLeft: "10vw",
          marginRight: "10vw",
          paddingTop: "10vw",
          paddingBottom: "2vh",
        }}
      >
        <Font.Heading5 style={{ fontSize: "6.5vw" }}>
          Your Trusted <br /> Smart Marketplace
        </Font.Heading5>
        <Font.Sub1 style={{ fontSize: "4vw" }}>
          Managing your business and sourcing goods shouldn’t be exhausting, it
          should be effortless. AG-Market is a fresh way to access high-quality
          yet low-priced produce and to closely monitor your business
          transactions.
        </Font.Sub1>
      </div>

      <Carousel
        containerClass="carouselContainer"
        itemClass="carousel-item-padding"
        showDots
        infinite
        arrows={false}
        draggable={true}
        responsive={{
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
      >
        <div style={{ paddingBottom: "2vh" }}>
          <SmartIconPhone
            imgAlt={"Paperless"}
            imgSrc={paperLess}
            title={"Paperless Process"}
            content={
              "Manage all PO documentations effectively without printouts and reduce mountains of paperwork"
            }
          ></SmartIconPhone>

          <SmartIconPhone
            imgAlt={"Quick Approvals"}
            imgSrc={quickApproval}
            title={"Quick Approvals"}
            content={
              "Send purchase order and approve quotations in one go — anytime, anywhere and on any devices."
            }
          ></SmartIconPhone>
        </div>

        <div style={{ paddingBottom: "2vh" }}>
          <SmartIconPhone
            imgAlt={"Instant Access"}
            imgSrc={instantAccess}
            title={"Instant Access"}
            content={
              "Source produce easily and get the best offers with just a few clicks."
            }
          ></SmartIconPhone>

          <SmartIconPhone
            imgAlt={"Expense Tracker"}
            imgSrc={expenseTracker}
            title={"Expense Tracker"}
            content={
              "Get insights of your purchases and control your spendings"
            }
          ></SmartIconPhone>
        </div>

        <div style={{ paddingBottom: "2vh" }}>
          <SmartIconPhone
            imgAlt={"Smart Alerts"}
            imgSrc={smartAlert}
            title={"Smart Alerts"}
            content={
              "Easily update your information, and get alerts on orders payments and other transactions"
            }
          ></SmartIconPhone>

          <SmartIconPhone
            imgAlt={"All Data in One Place"}
            imgSrc={allData}
            title={"All Data in One Place"}
            content={
              "Access all POs, Quotations, Invoices and payment informations in one place."
            }
          ></SmartIconPhone>
        </div>
      </Carousel>
    </div>
  );
};
