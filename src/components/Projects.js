import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [

  {
    title: "ETV BAL BHARAT",
    description: "News platform built for multiple regions using React/TypeScript",
    techstack: "React JS, HTML/CSS, JavaScript/TypeScript",
    previewLink: "https://www.etvbalbharat.com/events",
    githubLink: "https://github.com",
   
  },
  {
    title: "Enadu Hindi Language",
    description: "Hindi language news portal for regional readers with dynamic content",
    techstack: "HTML/CSS, JavaScript, ReactJS, Hooks",
    previewLink: "https://google.com/eenadu.net/hindi",
    githubLink: "https://github.com/Er-Chandrakant-Mishra/eenadu_hindi_language",
 
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
    previewLink: "https://er-chandrakant-mishra.github.io/dashboard",
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
    previewLink: "https://github.com/Er-Chandrakant-Mishra/crypto-dashboard",
    githubLink: "https://github.com/Er-Chandrakant-Mishra/crypto-dashboard",
    
  },
  {
    title: "RAM Academy of Movies Mobile App",
    description: "A mobile app for RAM Academy of Movies, providing users with easy access to course information, faculty details, and upcoming events.",
    techstack: "React Native, JavaScript, TailwindCSS",
    previewLink: "https://ram.ramojiacademy.com/studenttest/login",
    githubLink: "https://github.com/Er-Chandrakant-Mishra/Ram-mobile-app", 
  }
  
];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>  Create dynamic QR codes using React and Next.js. This project
                     allows users to generate QR codes for any URL, customize their
                    color and background, and download the generated QR code as an image.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>I'm Chandrakant, a Full Stack Developer with experience in React, JavaScript, and Java. I build scalable and efficient web applications and love solving challenging problems.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>A custom QR code generator built with React and Next.js. Users can set URL, customize colors, background, and embed an image. Generates downloadable QR codes instantly.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
