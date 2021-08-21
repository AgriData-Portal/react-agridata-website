import React, { useState } from "react";
import Modal from "react-modal";

import facebook from "_images/footer/facebook_vector.png";
import instagram from "_images/footer/instagram_vector.png";
import whatsapp from "_images/footer/whatsapp_vector.png";
import logo from "_images/Header/Agridata-Logo-1.png";
import contactUs from "_images/Header/contact-us.png";

import "_styles/App.css";
import "_styles/Font.css";
import "_styles/Flexbox.css";

export const Header = (props) => {
  return (
    <div style={{ backgroundColor: "beige", width: "100%", height: 150 }}>
      <div>
        <div style={{ padding: "3%", position: "absolute" }}>
          <img src={logo} alt={"logo"} />
        </div>
        <div style={{ padding: "3%", position: "absolute", right: "0.1%" }}>
          <ContactUsButton></ContactUsButton>
        </div>
      </div>
    </div>
  );
};

const ContactUsButton = (props) => {
  const [contactUsModal, setContactUsModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => setContactUsModal(true)}
        style={{
          backgroundColor: "transparent",
          borderColor: "transparent",
        }}
      >
        <img src={contactUs}></img>
      </button>
      <Modal
        isOpen={contactUsModal}
        style={{
          overlay: { backgroundColor: "rgba(140, 140, 140, 0.65)" },
          content: {
            border: "transparent",
            width: "55%",
            margin: "auto",
            height: "60%",
            borderRadius: 10,
            padding: 0,
          },
        }}
        onRequestClose={() => setContactUsModal(false)}
      >
        <ContactusModal setContactUsModal={setContactUsModal}></ContactusModal>
      </Modal>
    </div>
  );
};

const ContactusModal = (props) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        alignSelf: "center",
      }}
    >
      <div style={{ paddingLeft: "3%" }}>
        <p className="headerFont">HELLO THERE!</p>
        <p className="headerContent">
          We care about MAKING AN IMPACT and we care about YOU!
        </p>
      </div>
      <div style={{ display: "flex", paddingLeft: "5%", paddingRight: "3%" }}>
        <div style={{ width: "40%" }}>
          <p className="titleFont">Join for Internship</p>
          <p className="titleContent">
            Send us your CV and we’ll let you know how you can contribute to
            AgriData making the change
          </p>
          <p>people@agridataportal.com</p>
        </div>
        <div style={{ width: "40%", position: "absolute", right: "3%" }}>
          <p className="titleFont">Any Inquiries?</p>
          <p className="titleContent">
            For any questions, feedbacks or anything you want to tell us, don’t
            hesitate to contact us here!
          </p>
          <p>contactus@agridataportal.com</p>
        </div>
      </div>
      <div
        className="gradient"
        style={{
          width: "100%",
          height: "12vh",
          padding: 0,
          marginTop: "8%",
        }}
      >
        {/* TODO */}
        <div className="container">
          <ContactAt
            src={facebook}
            alt={"facebook_image"}
            text1={"Facebook"}
            text2={"@agridataborneo"}
            link="https://www.instagram.com/agridataportal/?hl=en"
          />
          <ContactAt
            src={instagram}
            alt={"instagram_image"}
            text1={"Instagram"}
            text2={"@agridataportal"}
            link="https://www.instagram.com/agridataportal/?hl=en"
          />
          <ContactAt
            src={whatsapp}
            alt={"whatsapp_image"}
            text1={"WhatsApp"}
            text2={"+601165691998"}
            link="https://www.instagram.com/agridataportal/?hl=en"
          />
        </div>
      </div>
    </div>
  );
};

const ContactAt = (props) => {
  return (
    <div className="container">
      <button
        className="container"
        style={{ backgroundColor: "transparent", border: 0, width: "13vw" }}
      >
        <a href={props.link} className="container">
          <img
            src={props.src}
            alt={props.alt}
            style={{
              width: "50%",
              height: "50%",
              margin: "2%",
              marginTop: "5%",
            }}
          />

          <p className="titleContent" style={{ textAlign: "left" }}>
            {props.text1} <br></br> {props.text2}
          </p>
        </a>
      </button>
    </div>
  );
};
