import { Link } from "react-router-dom";
import "./Projects.scss";
import projectData from "./projectData";
import ProjectCard from "./ind-projects";
const Projects = () => {
  return (
    <div>
      <h1>my projects</h1>
      <div className="reference-container">
        <section className="bankist">
          <a href="https://bankistanna.netlify.app" id="bankist">
            Bankist
          </a>
          <label for="bankist">
            Landing page for modern minimalist banking - all rights have been
            reserved by the instructor Jonas Schmedtmann
          </label>
        </section>
        <section className="bankist-app">
          <a href="https://bankist-app-anna.netlify.app" id="bankist-app">
            Bankist-App
          </a>
          <label for="bankist-app">
            application for modern minimalist banking - all rights have been
            reserved by the instructor Jonas Schmedtmann
          </label>
        </section>
        <section className="mapty">
          <a href="https://mapty-anna.netlify.app" id="mapty">
            Mapty
          </a>
          <label for="mapty">
            application for recording workouts on a map - all rights have been
            reserved by the instructor Jonas Schmedtmann
          </label>
        </section>
        <section className="days-of-code">
          <a href="https://100daysofcodecalendar.netlify.app" id="daysOfCode">
            100 days of code
          </a>
          <label for="daysOfCode">
            100 days of code calendar for checking off progress
          </label>
        </section>
      </div>
      <button className="--next-button">
        <Link className="--next-button-link" to="/Contact">
          next→
        </Link>
      </button>
    </div>
  );
};

export default Projects;
