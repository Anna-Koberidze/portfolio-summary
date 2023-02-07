import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div>
      <h1>my projects</h1>
      <button className="--next-button">
        <Link className="--next-button-link" to="/Contact">
          next→
        </Link>
      </button>
    </div>
  );
};

export default Projects;
