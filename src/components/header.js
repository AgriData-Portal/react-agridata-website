//Libraries
import React, { useState } from "react";
import Modal from "react-modal";

//Components
import facebook from "_images/footer/facebook_vector.png";
import instagram from "_images/footer/instagram_vector.png";
import whatsapp from "_images/footer/whatsapp_vector.png";
import contactUs from "_images/Header/contact-us.png";
import contactUsWhite from "_images/Header/contactUsWhite.png";
import { Logo } from "_elements";
import Font from "_styles";

import "_styles/App.css";
import "_styles/Font.css";
import "_styles/Flexbox.css";

//Functions
import { screenSize } from "_store";
import { max } from "_utils";

export const Header = (props) => {
  return (
    <div
      style={{
        marginTop: "3vh",
        marginRight: "5vw",
        marginLeft: "5vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ paddingLeft: 15 }}>
        {/* TODO fix image padding */}
        <Logo size="big" />
      </div>
      {true ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "auto",
          }}
        >
          {/* TODO change link index to navigate*/}
          <TeamButton setLink={props.setLink}></TeamButton>
          <WorkButton setLink={props.setLink}></WorkButton>
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <ContactUsButton />
      </div>
    </div>
  );
};

export const HeaderLanding = (props) => {
  const width = screenSize((state) => state.width);
  const height = screenSize((state) => state.height);
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "2vw",
        marginRight: "2vw",
        flexWrap: "wrap",

        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ marginLeft: 20 }}>
        <Logo size="big" />
      </div>
      <div
        style={{
          display: "flex",
          margin: max(20, "20vw", width, height),
        }}
      >
        <Font.Button3
          style={{
            margin: max(10, "10vw", width, height),
            marginTop: "1.3vw",
          }}
        >
          AG-Market
        </Font.Button3>
        <Font.Button3
          style={{ margin: max(10, "10vw", width, height), marginTop: "1.3vw" }}
        >
          About Us
        </Font.Button3>
        <img
          alt={"Contact Us"}
          src={contactUsWhite}
          draggable={false}
          style={{
            maxWidth: "10vw",
            height: "auto",
            marginBottom: "5vh",
          }}
        ></img>
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
            maxHeight: 350,
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
          height: "auto",
          padding: 0,
          marginBottom: 0,
          position: "absolute",
          bottom: 0,
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

const TeamButton = (props) => {
  return (
    <button
      style={{
        backgroundColor: "transparent",
        borderColor: "transparent",
      }}
      onClick={() => props.setLink(0)}
    >
      <p className="headerFont">Team</p>
    </button>
  );
};

const WorkButton = (props) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "transparent",
          borderColor: "transparent",
        }}
        onClick={() => props.setLink(1)}
      >
        <p className="headerFont">Work</p>
      </button>
    </div>
  );
};
