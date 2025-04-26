// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { ProfileIcon } from "../../../assets/Images/ProfileIcon";
import "./about.css";

const About: React.FC = () => {
  const icon = ProfileIcon();
  const [resumeStates, setResumeStatus] = useState<string>("Check Resume");
  const resumeRedirection = () => {
    setResumeStatus("Redirecting . . . .");
    window.open(
      "https://drive.google.com/file/d/1CV0fOiOU1WrtlZP-rUjFhBcb4s9gU0Wf/view?usp=sharing",
      "_blank"
    );
    setResumeStatus("Check Resume");
  };
  return (
    <>
      <section id="about">
        <Container className="my-3 py-3 my-lg-4 py-lg-2 px-lg-4">
          <Row className="d-md-flex justify-content-evenly">
            <Col className="order-1 order-md-0 col-12 col-md-6 col-lg-7 px-3 ps-md-5 pe-md-2 my-4 my-md-0 d-flex flex-column justify-content-evenly align-items-start">
              <div className="my-lg-4 name">
                <h1 className="fs-2 fs-sm-6">Hi, I am</h1>
                <h1 className="fs-2 fs-sm-2">Dinesh Kumar</h1>
              </div>
              <h1 className="domain fs-3 fs-sm-2">
                I am a fullstack developer
              </h1>
              <div className="py-3 py-md-0 my-lg-2">
                <p className="header-passage">
                  I am an enthusiastic developer with a BSc in Computer Science,
                  bringing eight months of experience in both React Js and React
                  Native frontend development. I specialize in creating
                  responsive mobile and web applications. Passionate about
                  continuous learning, I am eager to contribute to innovative
                  projects that provide impactful solutions.
                </p>
              </div>
              <div className="Resume-sec">
                <Button
                  variant="outline-secondary rounded-pill"
                  onClick={() => resumeRedirection()}
                >
                  {resumeStates}
                </Button>
              </div>
            </Col>
            <Col className="order-0 order-md-1 col-12 col-md-5 col-lg-4  pe-lg-4 py-lg-5 d-flex justify-content-center ">
              <Image
                src={icon.Profile}
                alt={icon.Profile}
                className="profileImg"
                style={{
                  // width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  borderRadius: "56%",
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
