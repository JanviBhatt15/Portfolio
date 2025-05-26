import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crypto from "../../Assets/crypto.jpg";
import akinator from "../../Assets/akinator.jpg";
import Network from "../../Assets/Network.png";
import Rm  from "../../Assets/Rm application.jpg";
import rota from "../../Assets/rota.png";
import Secure from "../../Assets/Secure.jpg";

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
              imgPath={crypto}
              isBlog={false}
              title="Crypto Rate prediction website"
              description="Created a website to monitor Bitcoin rates using API integration.Designed and implemented an algorithm to accurately predict future Bitcoin prices.Developed a recommendation system leveraging the predictive model to provide insights ."
              ghLink="https://github.com/JanviBhatt15/CryptoRate-Prediction-website"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={akinator}
              isBlog={false}
              title="Akinator"
              description="A web-based game where the system guesses the football player you're thinking of by asking a series of yes/no questions.

 Utilizes data entropy to prioritize questions that split the remaining set of possible players most efficiently, minimizing the number of questions needed.

 Built on a structured dataset of football players with attributes like position, nationality, clubs, achievements, etc., enabling precise filtering."
              ghLink="https://github.com/JanviBhatt15/Akinator"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rm}
              isBlog={false}
              title="RM Application"
              description="Developed C# desktop application for Relationship Manager and clients to access.• It allowed clients to select the various filters like sector and risk factor they would like their investment to fall under.• An algorithm matched the clients to the top three places they should invest in and allowed the RM to see therecommendation made"
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Network}
              isBlog={false}
              title="Network Design for Anglia Marketing"
              description="Designed and implemented a scalable network infrastructure for a multi-branch marketing firm.
•	Configured VLANs, inter-VLAN routing, and dynamic routing using RIPv2.
•	Implemented network security measures including NAT, ACLs, and VTY line security.
•	Utilized VLSM for efficient IP address allocation across multiple office locations.
"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Secure}
              isBlog={false}
              title="Secure Access Management System"
              description="Developed a door lock system with safety functions using the LPC1678 board.
•	The authentication process is based on username and password.
•	Keeps a log of the users who have opened the door or have not been given access to the door.
"
              ghLink=""
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rota}
              isBlog={false}
              title="Interview Rota System "
              description="Developed Java application for easy management of interview rota system for interviewers. 
•	Implemented a secure login system using work email authentication, ensuring only authorized users could access the system. 
•	Developed an automated email system to notify admins of leave requests and send reminders to engineers about scheduled interviews and replacements. 
•	Designed separate admin and engineer interfaces."
              ghLink=""
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
