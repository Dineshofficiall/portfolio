import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { WebViewModal } from "../../../viewModal/Projects/WebViewModal";
import Alert from "../../components/alert/Alert";
import { AlertViewModal } from "../../../viewModal/AlertViewModal";

const WebProject: React.FC = () => {
  const { web, validNavigate } = WebViewModal();
  const { show, handleAlertShow, handleAlertClose } = AlertViewModal();
  return (
    <aside>
      <Row xs={1} sm={2} lg={3} className="g-4 g-sm-5 g-md-4 g-lg-3 my-4">
        {web.map((item, index) => (
          <>
            <Col key={index} onClick={() => validNavigate(item.projectId)}>
              <Card className="p-2 rounded-4 project-card">
                <Card.Img
                  variant="top"
                  className="rounded-4 p-2 object-fit-cover project-card"
                  height={180}
                  src={item.images[0]}
                />
                <Card.Header className="header-content">
                  {item.techStack.map((techStack, techStackIndex) => (
                    <li key={techStackIndex}>{techStack}</li>
                  ))}
                </Card.Header>
                <Card.Body className="project-card pt-2 pb-2 px-2">
                  <Card.Title className="project-card my-0">
                    {item.projectHeading}
                  </Card.Title>
                  <p className="date-range">
                    <em>{item.projectTimeLine}</em>
                  </p>
                  <Card.Text className="project-description">
                    {item.projectDescription}
                  </Card.Text>
                </Card.Body>
                <hr className="my-2" />
                <Card.Footer className="card-footer">
                  {item.lastDateModified}
                </Card.Footer>
              </Card>
            </Col>
            <Alert
              show={show}
              modalTile={item.projectHeading}
              modalBody={item.alertMessage}
              handleAlertClose={handleAlertClose}
              handleAlertShow={handleAlertShow} // Pass the show/hide functions here
            />
          </>
        ))}
      </Row>
    </aside>
  );
};

export default WebProject;
