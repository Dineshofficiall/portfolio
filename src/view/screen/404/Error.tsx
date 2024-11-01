// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./errorStyle.css";

const Error: React.FC = () => {
  return (
    <Container className="unknown-url-block">
      <Row>
        <Image
          src="https://material-kit-react.devias.io/assets/error-404.png"
          className="object-fit-contain"
          style={{ height: "60vh" }}
        ></Image>
        <Col
          sm={12}
          className="d-flex justify-content-center align-items-center "
        >
          <p>Unknown Url</p>
        </Col>
        <Col sm={12}>
          <h4 className="fw-bold text-center">404 Not Found</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
