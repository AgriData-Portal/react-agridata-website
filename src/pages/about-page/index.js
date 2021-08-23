import React from "react";
import { Header } from "../../components/header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "_styles/App.css";
import matthew from "_images/Team/6 4.png";
import junkaih from "_images/Team/3 7.png";
import nazri from "_images/Team/2 7.png";
import natasha from "_images/Team/5 5 (1)_auto_x2.png";
import marissa from "_images/Team/4 6.png";

export const AboutPage = (props) => {
  return (
    <div className="teamBody">
      <Header setLink={props.setLink}></Header>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <h1>Meet The Minds Behind AgriData</h1>
        <h2>
          A perfect blend of Technical Wizardy, Agriculture Expertise, Creavity
          and Legal Proficiency -- making the impossible possible
        </h2>
      </div>
      <Carousel
        // autoPlay
        // autoPlaySpeed={3000}
        containerClass="carousel"
        itemClass="carousel-item-padding-40-px"
        infinite
        draggable={true}
        responsive={{
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
          },
        }}
      >
        <img
          src={matthew}
          alt="Matthew"
          draggable={false}
          style={{ width: "20vw" }}
        />

        <div>
          <img
            src={marissa}
            alt="Marissa"
            draggable={false}
            style={{ width: "20vw" }}
          />
        </div>
        <div>
          <img
            src={nazri}
            alt="Nazri"
            draggable={false}
            style={{ width: "20vw" }}
          />
        </div>
        <div>
          <img
            src={natasha}
            alt="Natasha"
            draggable={false}
            style={{ width: "20vw" }}
          />
        </div>
        <div>
          <img
            src={junkaih}
            alt="JunKaih"
            draggable={false}
            style={{ width: "20vw" }}
          />
        </div>
      </Carousel>
    </div>
  );
};
