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
      <img alt={props.imgAlt} src={props.imgSrc} style={{ width: "8vw" }}></img>
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
      className="backgroundGradient"
      style={{
        height: "247vh",
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
          paddingBottom: "3vw",
        }}
      >
        <Font.Heading5>Your Trusted Smart Marketplace</Font.Heading5>
        <Font.Sub1>
          Managing your business and sourcing goods shouldn’t be exhausting, it
          should be effortless. AG-Market is a fresh way to access high-quality
          yet low-priced produce and to closely monitor your business
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
      <div style={{ flexDirection: "row", display: "flex" }}>
        <div style={{ marginLeft: "5vw" }}>
          <Font.Heading5>Super Simple and Quick</Font.Heading5>
          <Font.Sub1 style={{ width: "38vw" }}>
            Busy working? AG-Market does all the hard work for you. From
            sourcing your items, sending, receiving and keeping all
            documentations and gathering insights — all in a click.
          </Font.Sub1>
          <Font.Button1>Learn More</Font.Button1>
        </div>
        <div>
          <img
            alt={"Order Chat"}
            src={OrderChat}
            style={{
              width: "28vw",
              paddingTop: "8vw",
              marginLeft: "2vw",
            }}
          ></img>
          <img
            alt={"Order Quotation"}
            src={OrderQuotation}
            style={{
              width: "30vw",
              marginLeft: "22vw",
              marginTop: "-63vw",
              marginBottom: "15vw",
            }}
          ></img>
        </div>
      </div>
    </div>
  );
};
