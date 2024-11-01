// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container } from "react-bootstrap";

// css
import "./project.css";
import { Link, Outlet } from "react-router-dom";

const Projects: React.FC = () => {
  return (
    <>
      <section id="projects">
        <Container className="col-12 col-md-9 col-lg-8">
          <div className="d-flex flex-column align-items-center justify-content-center mb-5">
            <h1>Projects</h1>
            <article className="col-10 col-sm-8 text-center py-3">
              I have worked on a wide range of projects. From web apps to
              android apps. Here are some of my projects.
            </article>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-11 col-md-7 col-lg-5">
              <ul className="navigation">
                <li>
                  <Link to="">App</Link>
                </li>

                <li>|</li>

                <li>
                  <Link to="webProject">Web</Link>
                </li>

                <li>|</li>

                <li>
                  <Link to="androidProject">Android</Link>
                </li>
              </ul>
            </div>
          </div>
          <Outlet />
        </Container>
      </section>
    </>
  );
};

export default Projects;
