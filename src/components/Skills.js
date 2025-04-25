import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

// Skill meter icons
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

// Real-world skill data
const skillData = [
  { id: 1, title: "React JS", img: meter1 },
  { id: 2, title: "Node JS", img: meter2 },
  { id: 3, title: "REST APIs", img: meter3 },
  { id: 4, title: " Next JS", img: meter2 },
  { id: 5, title: "Web development", img: meter3 },
  { id: 6, title: "Redux Toolkit", img: meter1 },
  { id: 7, title: "MongoDB", img: meter2 }
  
];

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I specialize in frontend and backend development using modern frameworks and tools.</p>

              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skillData.map((skill) => (
                  <div className="item" key={skill.id}>
                    <img src={skill.img} alt={`${skill.title} icon`} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Decorative background" />
    </section>
  );
};
