import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
  
        <Container className="home-content">
          <Row>
            <Col md={7} fs={2} className="home-header">
              <h1 style={{ paddingBottom: 5, paddingRight:2 }} className="heading">
                Hi There! <span className="wave"></span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Shahzad Rasool</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
      
    </section>
  );
}

export default Home;
