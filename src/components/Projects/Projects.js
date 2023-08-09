import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


import unichat from "../../Assets/Projects/Unichat.jpg";
import bookxchanger from "../../Assets/Projects/bookxchanger.JPG";
import igt from "../../Assets/Projects/igt.JPG";
import youtube from "../../Assets/Projects/youtube.jpg";
import mysuru from "../../Assets/Projects/mysuru.JPG";
import pollution from "../../Assets/Projects/pollution.png";

function Projects() {
  return (
    <Container fluid className="project-section">
    
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
              imgPath={bookxchanger}
              title="BookXchanger"
              description="We try to create a platform where you can buy or sell second-hand books without any difficulty. So we try to create a website called BookXchanger with almost all the features that can solve your problems while buying or selling books. We have used MERN stack to make this project."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={igt}
              title="Agriculture Analysis of Pakistan"
              description="I have created this project for the final submission of IGT. So basically this is a website which uses different data like crop, rainfall, soil and underground water in Pakistan. We have use QGIS software to map tha data on map. And then using HTML, CSS and Javascript we mapped it on website. So using this website we try to make analysis of crops in Pakistan."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              title="Youtube Clone"
              description="I have created this project for my Open Source submission. This webste is basically the frontend clone of Youtube which uses Youtube API to fetch videos from Youtube. I have created this project using React, Redux and Firebase."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unichat}
              title="UniChat"
              description="This is a real-time chat application build using React.js, Firebase and React chat engine. Here you can do one to one and one to many chats by creating groups and adding the members to it."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mysuru}
              title="Mysuru Tourism Website"
              description="I have created this website for DSC-WOW Hackathon. This website is created with basic HTML, CSS and JavaScript. This website helps to increase tourism in Mysore by featuring all the toursits spots."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pollution}
              title="Pollution Tracker"
              description="It is a python program that tells the API (Air Pollution Index) and further pollutants level in air of any city in the world. It uses Matplotlib to plot pie chart of pollutants in air."
              link="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
