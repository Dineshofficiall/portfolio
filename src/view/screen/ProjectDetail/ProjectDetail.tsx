import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";
import "./ProjectDetails.css";
import { LinkToWebModal } from "../../../viewModal/LinkToWebModal";
import { ButtonComponent } from "../../components/Button/ButtonComponent";
import { Slide, toast, ToastContainer } from "react-toastify";

const ProjectDetail: React.FC = () => {
  const location = useLocation();
  //   const { id } = useParams();
  const selectedProject = location.state?.project || {};
  console.log("project Details -> ", selectedProject);
  const { resumeRedirection } = LinkToWebModal();

  const notify = () =>
    toast.success("⚠️ 📷 Laptop only. 🔗 Visit site.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
  useEffect(() => {
    if (selectedProject.projectId < 1000) {
      notify();
    }
  }, [selectedProject.projectId]);

  return (
    <Container className="pt-3 d-flex justify-content-center customHeight">
      <Row>
        <Col xs={12} lg={6} className="mb-3 mb-lg-0 ">
          <Carousel>
            {selectedProject.images.map((item: string, index: React.Key) => (
              <Carousel.Item interval={3000} key={index}>
                <Image
                  src={item}
                  width={"100%"}
                  height={selectedProject.projectId >= 1000 ? 500 : "auto"}
                  style={{ objectFit: "contain" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col className="p-2" xs={12} lg={6}>
          <section className="mb-5">
            <h3>{selectedProject.projectHeading}</h3>
            <p className="px-2">{selectedProject.projectDescription}</p>
          </section>
          <section className="my-4">
            <h5>Project Time Line</h5>
            <small className="px-3">{selectedProject.projectTimeLine}</small>
          </section>
          <main className="my-4">
            <h5>Tech Stack</h5>
            <strong className="header-content1">
              {selectedProject.techStack.map(
                (item: { icon: string; stack: string }, index: React.Key) => (
                  <ul className="stackContainer">
                    <Image src={item.icon} height={15} alt={item.icon} />
                    <li key={index}>{item.stack}</li>
                  </ul>
                )
              )}
            </strong>
          </main>
          <aside>
            {selectedProject.githubLink !== null ||
            selectedProject.liveLink !== null ? (
              <h5>Actions</h5>
            ) : (
              <h5>No Action For this Project</h5>
            )}
            {selectedProject.githubLink && (
              <ButtonComponent
                defaultText={"Github"}
                reDirectToWeb={resumeRedirection}
                reDirectLink={selectedProject.githubLink}
              />
            )}
            {selectedProject.liveLink && (
              <ButtonComponent
                defaultText={"Live Link"}
                reDirectToWeb={resumeRedirection}
                reDirectLink={selectedProject.liveLink}
              />
            )}
          </aside>
          <section className="my-4">
            <h5>Latest update</h5>
            <small className="px-3">{selectedProject.lastDateModified}</small>
          </section>
        </Col>
      </Row>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </Container>
  );
};

export default ProjectDetail;
