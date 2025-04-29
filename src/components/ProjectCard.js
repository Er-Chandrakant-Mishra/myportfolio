import { Card } from "react-bootstrap";
import githubIcon from "../assets/img/githubImage.png";

export const ProjectCard = ({ title, description, techstack, imgUrl, githubLink, previewLink }) => {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{techstack}</Card.Text>
  
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" style={{ width: "24px", marginRight: "10px" }} />
            GitHub
          </a>
          <a href={previewLink} target="_blank" rel="noreferrer" style={{ marginLeft: "15px" }}>
            🔗 Live Preview
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

