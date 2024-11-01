// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
// css
import "./skills.css";
import { TechnologyCategory } from "../../../types/SkillsTypes";
import { SkillsViewModal } from "../../../viewModal/SkillsViewModal";

const SkillsScreen: React.FC = () => {
  const skillsObject: TechnologyCategory[] = SkillsViewModal();
  return (
    <section id="skills">
      <Container className="col-12 col-md-11 col-lg-8 my-5">
        <div className="text-center mb-5">
          <h1>Skills</h1>
          <article>
            Here are some of my skills on which I have been working on for the
            past 9months
          </article>
        </div>
        <Row
          xs={1}
          sm={2}
          md={3}
          lg={3}
          className="d-flex justify-content-evenly align-items-center gap-5 p-3 p-sm-0"
        >
          {skillsObject.map((data, index) => (
            <Col key={index} className="skillSet-parent">
              <h4 className="text-center mt-4 mb-0">{data.technology}</h4>
              <div className="skillSet">
                {data.programmingLanguage.map((skill, skillIndex) => (
                  <div className="icons-container" key={skillIndex}>
                    <Image src={skill.image} width={23} alt={skill.imgAlt} />
                    <li>{skill.skill}</li>
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SkillsScreen;
