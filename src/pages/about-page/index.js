import React, { useState } from "react";
import { Header } from "../../components/header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "_styles/App.css";
import matthew from "_images/Team/6 4.png";
import junkaih from "_images/Team/3 7.png";
import nazri from "_images/Team/2 7.png";
import natasha from "_images/Team/5 5 (1)_auto_x2.png";
import marissa from "_images/Team/4 6.png";
import Modal from "react-modal";

export const AboutPage = (props) => {
  const [matthewModal, setMatthewModal] = useState(false);
  const [junkaihModal, setJunkaihModal] = useState(false);
  const [nazriModal, setNazriModal] = useState(false);
  const [natashaModal, setNatashaModal] = useState(false);
  const [marissaModal, setMarissaModal] = useState(false);
  return (
    <div className="teamBody">
      <div style={{ height: "100vh" }}>
        <Header setLink={props.setLink}></Header>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <h1>Meet The Minds Behind AgriData</h1>
          <h2>
            A perfect blend of Technical Wizardy, Agriculture Expertise,
            Creavity and Legal Proficiency -- making the impossible possible
          </h2>
        </div>
        <Carousel
          autoPlay
          autoPlaySpeed={3000}
          containerClass="carouselContainer"
          itemClass="carousel-item-padding"
          infinite
          arrows={false}
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
          <button
            onClick={() => setMatthewModal(true)}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <img
              src={matthew}
              alt="Matthew"
              draggable={false}
              style={{ width: "20vw" }}
            />
          </button>
          <button
            onClick={() => setMarissaModal(true)}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <img
              src={marissa}
              alt="Marissa"
              draggable={false}
              style={{ width: "20vw" }}
            />
          </button>
          <button
            onClick={() => setNazriModal(true)}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <img
              src={nazri}
              alt="Nazri"
              draggable={false}
              style={{ width: "20vw" }}
            />
          </button>
          <button
            onClick={() => setNatashaModal(true)}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <img
              src={natasha}
              alt="Natasha"
              draggable={false}
              style={{ width: "20vw" }}
            />
          </button>
          <button
            onClick={() => setJunkaihModal(true)}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <img
              src={junkaih}
              alt="JunKaih"
              draggable={false}
              style={{ width: "20vw" }}
            />
          </button>
        </Carousel>
      </div>
      <Modal
        isOpen={matthewModal}
        style={{
          overlay: { backgroundColor: "rgba(140, 140, 140, 0.65)" },
          content: {
            border: "transparent",
            width: "80%",
            height: "80%",
            margin: "auto",
            borderRadius: 10,
            padding: 0,
            maxHeight: "55vw",
          },
        }}
        onRequestClose={() => setMatthewModal(false)}
      >
        <TeamModal
          setMatthewModal={setMatthewModal}
          image={matthew}
          name={"Matthew Johnny Kulai"}
          title={"Business and Brand Developer"}
          content1={
            "Matthew is the founder of Hinsou Farm. Growing up in a humble home surrounded by nature, Matt eventually found a passion for agriculture and became a young agropreneur. He specializes in organic produce and manages avocado, sacha inchi and ginger plantation. He also oversees a process centre for sacha inchi oil."
          }
          content2={
            " Matt was a graduate of Swansea University, with a Bachelor’s degree in Materials Engineeering."
          }
        ></TeamModal>
      </Modal>
      <Modal
        isOpen={marissaModal}
        style={{
          overlay: { backgroundColor: "rgba(140, 140, 140, 0.65)" },
          content: {
            border: "transparent",
            width: "80%",
            height: "80%",
            margin: "auto",
            borderRadius: 10,
            padding: 0,
            maxHeight: "55vw",
          },
        }}
        onRequestClose={() => setMarissaModal(false)}
      >
        <TeamModal
          setMarissaModal={setMarissaModal}
          image={marissa}
          name={"Marissa Johnny Kulai"}
          title={"Legal Advisor"}
          content1={
            "With a degree in LLB (Hons) from UK and a Barrister-at-Law (Lincoln’s Inn) (London), Marissa is currently working as a Legal Assistant at J T Kulai and Co. Law Firm. She supports senior partners with legal research, conduct client interviews and document drafting. She is also aiding in both civil & criminal cases. With her legal expertise, she is a big support for managing AriData’s legal concerns."
          }
          content2={
            "Marissa is one of the owners of Heart Bit E-ECP, a heart treatment centre."
          }
        ></TeamModal>
      </Modal>
      <Modal
        isOpen={nazriModal}
        style={{
          overlay: { backgroundColor: "rgba(140, 140, 140, 0.65)" },
          content: {
            border: "transparent",
            width: "80%",
            height: "80%",
            margin: "auto",
            borderRadius: 10,
            padding: 0,
            maxHeight: "55vw",
          },
        }}
        onRequestClose={() => setNazriModal(false)}
      >
        <TeamModal
          setNazriModal={setNazriModal}
          image={nazri}
          name={"Mohd Nazri Bin Mohammad Ali"}
          title={"Operations Manager / PR"}
          content1={
            "Nazri’s knowledge and skills in agriculture were influenced by being a 3rd generation ginger planter starting off from his grandparents. With this, he gained vast experiences with traditional farming and grew his connections with people especially other farmers, which is why he is suited as a lead in ground operations. "
          }
          content2={
            "He holds a credential in E-Business and has previously worked as a manager for DJ Enterprise, a logistic company that delivers goods around Sabah."
          }
        ></TeamModal>
      </Modal>
      <Modal
        isOpen={natashaModal}
        style={{
          overlay: { backgroundColor: "rgba(140, 140, 140, 0.65)" },
          content: {
            border: "transparent",
            width: "80%",
            height: "80%",
            margin: "auto",
            borderRadius: 10,
            padding: 0,
            maxHeight: "55vw",
          },
        }}
        onRequestClose={() => setNatashaModal(false)}
      >
        <TeamModal
          setNatashaModal={setNatashaModal}
          image={natasha}
          name={"Natasha Granada"}
          title={"UI/UX Designer, Social Media Manager"}
          content1={
            "Having a passion for arts ever since she was a kid, Natasha fully-immersed herself in digital arts through doing Social Media Management as her business. Graphic designing, Logo-making, website designing, content creation -- she does it all. Her creativity skills also contributes to Agridata through her UI/UX Designer role."
          }
          content2={
            "Her previous job was in the aviation industry, worked as a flight attendant for almost 6 years."
          }
        ></TeamModal>
      </Modal>
      <Modal
        isOpen={junkaihModal}
        style={{
          overlay: { backgroundColor: "rgba(140, 140, 140, 0.65)" },
          content: {
            border: "transparent",
            width: "80%",
            margin: "auto",
            borderRadius: 10,
            padding: 0,
            maxHeight: "55vw",
          },
        }}
        onRequestClose={() => setJunkaihModal(false)}
      >
        <TeamModal
          setJunkaihModal={setJunkaihModal}
          image={junkaih}
          name={"Jun Kaih Wong"}
          title={"Full Stack Developer"}
          content1={
            "Currently studying as a 3rd year student in the one of the world’s reputable universities, Nanyang Technological University Singapore, Jun Kaih’s tech skills are showcased in AgriData’s app."
          }
          content2={
            "With a degree in Electrical and Electronics Engineering, he is the Head of Operations at Machine Learning and Data Analytics@EEE at present. He had also built a robotic systems at Garage@EEE, Automation and Innovation Intern at Bollore Logistics and Transport."
          }
        ></TeamModal>
      </Modal>
    </div>
  );
};

const TeamModal = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        height: "100%",
      }}
    >
      <div className="modal-left">
        <img src={props.image} alt="Matthew" className="imgContainer" />
      </div>
      <div className="modal-right">
        <div className="modalContainer">
          <p className="modalName">{props.name}</p>
          <p className="modalTitle">{props.title}</p>
          <p className="modalContent">{props.content1}</p>
          <p className="modalContent">{props.content2}</p>
        </div>
      </div>
    </div>
  );
};
