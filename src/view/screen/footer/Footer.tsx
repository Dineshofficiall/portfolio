// eslint-disable-next-line no-unused-vars
import React from "react";

import { Col, Container, Row } from "react-bootstrap";

// scroll
import { Link as ScrollLink } from "react-scroll";

// icons
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

// css
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <Container fluid className="my-1 py-4">
      <Row sm={1} md={1} lg={2} className="footer-component">
        <h5 className="text-center mb-3">Dinesh Kumar</h5>
        <Col className="col-md-8 my-4 my-lg-3 links">
          <ScrollLink
            activeClass="active"
            className="nav-link"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            About
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            className="nav-link"
            to="skills"
            spy={true}
            offset={-70}
            duration={500}
            smooth={true}
            style={{ cursor: "pointer" }}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            className="nav-link"
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            Work
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            className="nav-link"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            className="nav-link"
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            Educational
          </ScrollLink>
        </Col>
        <Col className=" col-12 d-flex justify-content-center my-md-4 ">
          <Col className="col-6 d-flex justify-content-evenly align-items-center">
            <FaXTwitter />
            <IoLogoLinkedin />
            <IoLogoGithub />
          </Col>
        </Col>
        <Col className="col-12 mt-4 mt-sm-4 mt-md-0 ">
          <p style={{ fontSize: "0.8em", textAlign: 'center' }}>
            &copy; 2024 Dinesh Kumar. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
