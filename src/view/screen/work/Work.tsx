// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { WorkIcon } from "../../../assets/Images/WorkIcon";
import "./Work.css";

const Work: React.FC = () => {
  const icon = WorkIcon();
  return (
    <section id="work" className="my-5 py-5">
      <Container className="col-12 col-md-10 col-lg-7">
        <div className="text-center mb-5">
          <h1>Work Experience </h1>
          <article>
            My work experience as a full stack engineer and working on companies
            and projects.
          </article>
        </div>
        <Row className="col-12 ms-0 ms-sm-2 contents">
          <aside className="content-inner-block">
            <Col className="col-12 border rounded-4 p-1 p-sm-3 mb-4 box">
              <div className="d-flex align-items-center">
                <Image src={icon.hemaIcon} width={45} className="me-3" alt="" />
                <div>
                  <h5 className="m-0 pt-2">
                    Hema enterprise, Cuddalore TamilNadu
                  </h5>
                  <small className="m-0">
                    ReactNative Developer - Mobile Development
                  </small>
                </div>
              </div>
              <div className="mt-3 mb-2">
                <em style={{ fontSize: "12.3px", fontWeight: "lighter" }}>
                  Sep 2024 - Present
                </em>
              </div>
              <ul>
                <li className="list-block">
                  In my role as a React Native frontend developer at Hema
                  Enterprise Pvt Ltd for the past 2 months, I have gained
                  profound insights into system architecture, particularly the
                  MVVM (Model-View-ViewModel) design pattern.
                </li>
                <li className="list-block">
                  Collaborating with seasoned professionals has significantly
                  deepened my comprehension of best practices in application
                  development.
                </li>
                <li className="list-block">
                  I successfully completed an independent project focused on
                  event management, which allowed me to effectively apply my
                  skills and creativity.
                </li>
                <li className="list-block">
                  Following this project, I advanced to real-time initiatives,
                  including the development of a meeting agenda and a form
                  builder, which further enriched my practical experience in
                  crafting responsive mobile applications.
                </li>
              </ul>
            </Col>
          </aside>
        </Row>
      </Container>
    </section>
  );
};

export default Work;
