// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Button, Col, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { NavIcon } from "../../../assets/Images/NavIcon";

const PortfolioNavbar: React.FC = () => {
  const icon = NavIcon();

  const [gitHubStatus, setGithubStates] = useState<string>("GitHub Profile");
  const [isNavBtnClicked, setIsNavBtnClicked] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsNavBtnClicked((prev) => !prev);
  };

  const githubRedirection = () => {
    setGithubStates("Redirecting . . . .");
    window.open("https://github.com/Dineshofficiall", "_blank");
  };
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg">
        <Container className="px-0 px-lg-5">
          <Col className="col-md-3 ms-2 ms-lg-0 d-flex justify-content-start justify-content-md-center align-items-center">
            <Image
              style={{ width: "40px", marginRight: ".8rem" }}
              src={icon.seoLogo}
              alt="Logo"
            />
            <Navbar.Brand>Portfolio</Navbar.Brand>
          </Col>

          <Navbar.Toggle
            onClick={handleToggleMenu}
            style={{
              outline: "none",
              boxShadow: "none",
              padding: 0,
              backgroundColor: "transparent",
            }}
            aria-controls="responsive-navbar-nav"
            aria-label="Toggle navigation menu"
          >
            <Image
              src={isNavBtnClicked ? icon.close : icon.menu}
              alt={isNavBtnClicked ? "Close menu" : "Open menu"}
              style={{
                height: "40px",
                width: "60px",
                objectFit: "contain",
              }}
            />
          </Navbar.Toggle>

          <Navbar.Collapse className="py-4 py-lg-0 " id="responsive-navbar-nav">
            <Nav className="col-lg-8 mb-4 mb-lg-0 d-flex justify-content-evenly align-items-center me-auto">
              <ScrollLink
                activeClass="active"
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                About
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                className="nav-link"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
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
                offset={-70}
                duration={500}
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
                offset={-70}
                duration={500}
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
                offset={-70}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Education
              </ScrollLink>
            </Nav>
            <Nav className="col-lg-3">
              <Button
                variant="outline-secondary rounded-pill"
                onClick={() => githubRedirection()}
              >
                {gitHubStatus}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default PortfolioNavbar;
