import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Resumecontent from "./ResumeContent";
import ResumePdf from "../../Assets/ShahzadRasool resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
    
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Team Leader of Hotel Managment Project"
              date="January 2022 - May 2022"
              content={[
                "Manages all the major task like collecting the resources and ideas to the documentation part of the Project. And worked with team members to improve the features of website.",
                "Worked on different features of website and mostly the frontend part of BookXchanger website.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Cyber Security "
              content={[
                "Planning, monitoring, and managing the organization presence on social media",
              ]}
            />
            <Resumecontent
              title="Graphic Designer"
              content={[
                "Work with the PR Manager to create, manage, execute and evaluate all Guest Lectures at Technovanza.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Engineering [BZU, Multan] "
              date="2021 - Present"
              content={[`CGPA: 3.13 (Till 4th Sem)`]}
            />
            <Resumecontent
              title="12th BOARD [Chenab College Shorkot]"
              date="2019 - 2021"
              content={["Precentage: 70.8%"]}
            />
            <Resumecontent
              title="10th BOARD [Al Badar Model High School ] "
              date="2007 - 2017"
              content={["Precentage: 90.4%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Completed 30 days of Google Cloud Program",
                "Event Manager of Culturul Fest(BZU)",
                "Participant in DSC-WOW Hackathon 2021",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
