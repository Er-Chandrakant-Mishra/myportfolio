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
    githubLink: "https://github.com/Er-Chandrakant-Mishra/",
   
  },
  {
    title: "Enadu Hindi Language",
    description: "Hindi language news portal for regional readers with dynamic content",
    techstack: "HTML/CSS, JavaScript, ReactJS, Hooks",
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
    previewLink: "https://er-chandrakant-mishra.github.io/crypto-dashboard/",
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

const sectorWiseProjects = {
  "Media Sector": [
    {
      title: "ETV BAL BHARAT",
      description: "News platform built for multiple regions using React/TypeScript",
      sector: "Media Sector"
    },
    {
      title: "Enadu Hindi Language",
      description: "Hindi language news portal for regional readers with dynamic content",
      sector: "Media Sector"
    },
    {
      title: "Weather App",
      description: "Real-time weather data based on user location",
      sector: "Media Sector"
    },
    {
      title: "Crypto Dashboard",
      description: "Bitcoin trends using CoinDesk API and react-chartjs-2",
      sector: "Media Sector"
    },
  ],
  "Automobiles Sector": [
    {
      title: "EV Analytics Dashboard",
      description: "EV population data visualization with filters and charts",
      sector: "Automobiles Sector"
    },
  ],
  "Technology Sector": [
    {
      title: "QR Generator Website",
      description: "Create dynamic QR codes using React and Next.js",
      sector: "Technology Sector"
    },
  ],
  "Mobile Development Sector": [
    {
      title: "RAM Academy of Movies Mobile App",
      description: "A mobile app for RAM Academy of Movies, providing users with easy access to course information, faculty details, and upcoming events.",
      sector: "Mobile Development Sector"
    },
  ],
};



const eduDetails = [
  {
    Position: "MCA",
    Company: "Awdesh Pratap Singh University",
    Location: "Rewa Madhya Pradesh",
    Type: "Post Graduation",
    Duration: "2019 - 2022",
    Mode: "Full-time",
  },
  {
    Position: "BCA",
    Company: "Govt.TRS College",
    Location: "Rewa Madhya Pradesh",
    Type: "Under Graduation",
    Duration: "2016 - 2019",
    Mode: "Full-time",
  },

  {
    Position: "12th",
    Company: "Govt.Boyes.HR.Sec.School",
    Location: "Rewa Madhya Pradesh",
    Type: "High School",
    Duration: "2015 - 2016",
    Mode: "Full-time",
  },
   
  {
    Position: "10th",
    Company: "Govt.Boyes.HR.Sec.School",
    Location: "Rewa Madhya Pradesh",
    Type: "Secondary Education",
    Mode: "Full Time",
    Duration: "2013 - 2014",
  },
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
                      <Nav.Link eventKey="second">Working Sectors </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
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
                     <Tab.Pane eventKey="second">
                        {Object.entries(sectorWiseProjects).map(([sector, projects], idx) => (
                          <div key={idx} style={{ marginBottom: '40px' }}>
                            <h3 style={{ marginTop: '20px', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>{sector}</h3>
                            <Row>
                              {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                            </Row>
                          </div>
                        ))}
                      </Tab.Pane> 


<Tab.Pane eventKey="third">
  {eduDetails.map((education, idx) => (
    <div key={idx} style={{ marginBottom: '40px' }}>
      <h3 style={{ marginTop: '20px', borderBottom: '3px solid #007bff', paddingBottom: '8px', color: '#007bff' }}>
        {education.Position}
      </h3>
      <Row>
        <Col>
          <div
            style={{
              padding: '20px',
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 123, 255, 0.2)',
              borderLeft: '6px solid #007bff',
            }}
          >
            <p><strong>Institute:</strong> {education.Company}</p>
            <p><strong>Location:</strong> {education.Location}</p>
            <p><strong>Type:</strong> {education.Type}</p>
            <p><strong>Duration:</strong> {education.Duration}</p>
            {education.Mode && <p><strong>Mode:</strong> {education.Mode}</p>}
          </div>
        </Col>
      </Row>
    </div>
  ))}
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
