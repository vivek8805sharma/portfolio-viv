import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vivek Sharma</span>.
            <br />I am a <span className="purple">Software Engineer</span>, currently working at <span className="purple">Amazon, Hyderabad.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports like badminton and table tennis.
            </li>            
            <li className="about-activity">
              <ImPointRight /> Reading and writing blogs
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Break out of the Mediocre majority!"{" "}
          </p>
          <footer className="blockquote-footer">Vivek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
