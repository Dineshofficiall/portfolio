import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Work.css";
import { WorkViewModal } from "../../../viewModal/WorkViewModal";

const Work: React.FC = () => {
  const { work } = WorkViewModal();
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
            {work.map((item, index) => (
              <Col
                className="col-12 border rounded-4 p-1 p-sm-3 mb-4 box"
                key={index}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src={item.workIcon}
                    width={45}
                    className="me-3"
                    alt={item.workIcon}
                  />
                  <div>
                    <h5 className="m-0 pt-2">{item.companyName}</h5>
                    <em style={{ fontSize: "12.3px", fontWeight: "lighter" }}>
                      {item.duration}
                    </em>
                  </div>
                </div>
                {item.innerRole.map((innerItem, innerIndex) => (
                  <div className="mt-3" key={innerIndex}>
                    <div className="px-1 px-sm-0">
                      <small
                        className="m-0 ms-md-5 ps-md-1"
                        style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                      >
                        {innerItem.role}
                      </small>
                    </div>

                    <ul>
                      {innerItem.description.map(
                        (description, decriptionIndex) => (
                          <li
                            className="list-block"
                            style={{
                              fontSize: "0.9rem",
                            }}
                            key={decriptionIndex}
                          >
                            {description}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                ))}
              </Col>
            ))}
          </aside>
        </Row>
      </Container>
    </section>
  );
};

export default Work;
