import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const projectDetails = [
  {
    title: "ETV BAL BHARAT",
    description: "News platform built for multiple regions using React/TypeScript",
    techstack: "React JS, HTML/CSS, JavaScript/TypeScript",
    previewLink: "https://www.etvbalbharat.com/events",
    githubLink: "https://github.com/Er-Chandrakant-Mishra/Etv_Bal_Bharat-_React_Project",
   
  },
  {
    title: "Eenadu Hindi Language",
    description: "Hindi language news portal for regional readers with dynamic content",
    techstack: "HTML/CSS, JavaScript, ReactJS, Hooks",
    previewLink: "https://www.etvbharat.com/hi/delhi/!bharat",
    githubLink: "https://github.com/Er-Chandrakant-Mishra/",
 
  },
  {
    title: "Weather App",
    description: "Real-time weather data based on user location",
    techstack: "ReactJS, API, HTML/CSS, JavaScript",
    previewLink: "https://er-chandrakant-mishra.github.io/Weather-app/",
    githubLink: "https://github.com/Er-Chandrakant-Mishra/Weather-app",
  
  },
  {
    title: "EV Analytics Dashboard",
    description: "EV population data visualization with filters and charts",
    techstack: "React JS, HTML/CSS, JavaScript",
    previewLink: "https://er-chandrakant-mishra.github.io/evdashboard/",
    githubLink: "https://github.com/Er-Chandrakant-Mishra/evdashboard",
   
  },
  {
    title: "QR Generator Website",
    description: "Create dynamic QR codes using React and Next.js",
    techstack: "ReactJS, NextJS, JavaScript, HTML/CSS",
    previewLink: "https://er-chandrakant-mishra.github.io/reactqrapp/",
    githubLink: "https://github.com/Er-Chandrakant-Mishra/reactqrapp",

  },
  {
    title: "Crypto Dashboard",
    description: "Bitcoin trends using CoinDesk API and react-chartjs-2",
    techstack: "ReactJS, TailwindCSS, JavaScript, HTML/CSS",
    previewLink: "https://er-chandrakant-mishra.github.io/history",
    githubLink: "https://github.com/Er-Chandrakant-Mishra/crypto-dashboard",
    
  },
];

export const Projects = () => (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Check out some of my featured projects with live preview and GitHub code links.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projectDetails.map((project, index) => (
                          <Col sm={6} md={4} key={index}>
                            <ProjectCard {...project} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2} alt="background" />
  </section>
);
