import { Link } from "react-router-dom";
import "./Projects.scss";
import projectData from "./projectData";
import ProjectCard from "./ind-projects";
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="p-card-container">
        {projectData.map((project) => {
          return (
            <ProjectCard
              index={project.key}
              className={project.className}
              name={project.heading}
              img={project.image}
              desc={project.desc}
              link={project.link}
              text={project.linkText}
              git={project.gitLink}
            />
          );
        })}
      </div>
      <button className="--next-button projects-btn">
        <Link className="--next-button-link" to="/Contact">
          next→
        </Link>
      </button>
    </div>
  );
};

export default Projects;
