import { Link } from "react-router-dom";
const Resume = () => {
  return (
    <div>
      <h1>my resume</h1>
      <button className="--next-button">
        <Link className="--next-button-link" to="/Projects">
          next→
        </Link>
      </button>
    </div>
  );
};

export default Resume;
