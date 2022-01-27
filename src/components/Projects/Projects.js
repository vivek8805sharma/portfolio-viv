import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vms from "../../Assets/Projects/vms.jpg";
import netflix from "../../Assets/Projects/netflix.jpg";
import emotion from "../../Assets/Projects/emotion.jpeg";
import emailAuto from "../../Assets/Projects/emailAutomation.jpg";
import shopping from "../../Assets/Projects/shopping.jpg";
import iitm from "../../Assets/Projects/iitm.png";
import cms from "../../Assets/Projects/cms.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Spring-boot microservice with centralized authentication"
              description="Created microservices in spring boot for shopping website with exposed REST endpoints secured by JWT authentication.
              Used zuul for api gateway, eureka service discovery and json web tokens."
              link="https://github.com/vivek8805sharma/Spring-boot-Jwt-authentication"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vms}
              isBlog={false}
              title="Vaccine Management System"
              description="Created RESTful Microservices to book and update slots
              for vaccinations and also create a report for the same.
              Used features of core, advanced java, hibernate, spring
              core, spring boot, Rest api and micro services.
              Also wrote the unit tests with 90 % coverage."
              link="https://github.com/vivek8805sharma/VaccineManagementSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone App"
              description="Created a clone of netflix web app using react js framework as front end by consuming a rest api for the videos."
              link="https://github.com/vivek8805sharma/netflix-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iitm}
              isBlog={false}
              title="Predict cloud reflectivity @IITM, Pune"
              description="Predict cloud reflectivity value from the data collected
              from Doppler Radar (Govt. sponsored project):
              Worked with Indian Institute of Tropical Metrology, Pune
              to clean and gather data from the doppler radar at Govt. of
              India Mumbai Radar Station.
              Used machine learning algorithms to study the pattern of
              cloud reflectivity values from the data collected and then
              created models for the prediction of the same."
              link="https://github.com/vivek8805sharma"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion Detection with test to speech using RaspberryPi"
              description="Made a device using RaspberryPi to recognize emotions of cab drivers and send
              audio messages to them remotely in any regional language.
              Used machine learning algorithms to capture emotions and
              send the data to a central server and then send back text to
              speech audio."
              link="https://github.com/vivek8805sharma"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emailAuto}
              isBlog={false}
              title="Email automation"
              description="Created a spring boot app to automate the the process of sending mails to a large group of mail ids, with same or different content."
              link="https://github.com/vivek8805sharma/EmailAutomation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cms}
              isBlog={false}
              title="Course Management System"
              description="Created RESTful API's to perform CRUD operations on students and courses.
              Also created api's to perform student registrations under courses. Also added swagger configuration."
              link="https://github.com/vivek8805sharma/courseManagementSystem"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
