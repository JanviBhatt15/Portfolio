import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Janhavi Bhatt </span>
            from <span className="purple"> Mumbai, India currently in UK.</span>
            <br />
            I am currently looking for Job in Tech Industry.
            <br />
            I have completed Bachelor's (Beng) in Computer Science from Anglia Ruskin University.
            Cambridge,UK .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Play with possibility and see how many results are possible just by playing with it!!"{" "}
          </p>
          <footer className="blockquote-footer">Janhavi Bhatt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
