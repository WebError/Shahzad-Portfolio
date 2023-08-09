import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shahzad Rasool </span>
            from <span className="purple"> Multan, Pakistan.</span>
            <br />I am currently student of Computer 
            Engineering at BZU, Multan. I'm{" "}
            <b className="purple"> Web developer</b> and
            <b className="purple"> Cyber Security enthusiast.</b>
            <br />I am looking forward to gain competency and exposure in{" "}
            <b className="purple">
              Web development, Testing and Cyber Security enthusiast.
            </b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight />
              Hacking
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#14FFEC", opacity: 0.7 }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shahzad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
