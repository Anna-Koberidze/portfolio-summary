import { useSelector } from "react-redux";

function ProjectCard(props) {
  const theme = useSelector((state) => state.theme.theme);
  let btnThemeClassName;
  switch (theme) {
    case 1:
      btnThemeClassName = "initial-btn-p";
      break;
    case 2:
      btnThemeClassName = "blueTheme-btn-p";
      break;
    case 3:
      btnThemeClassName = "goldTheme-btn-p";
      break;
    case 4:
      btnThemeClassName = "pinkTheme-btn-p";
      break;
    default:
      btnThemeClassName = "";
      break;
  }
  return (
    <div key={props.index} className={`p-cards ${props.className}`}>
      <a target="_blank" rel="noreferrer" href={props.link}>
        <img
          className="website-image"
          alt="screenshot of website"
          src={props.img}
        />
      </a>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <div className="buttons-project-container">
        <a
          className="button-link-projects"
          target="_blank"
          rel="noreferrer"
          href={props.link}
        >
          <button className={`project-button ${btnThemeClassName}`}>
            {props.text}
          </button>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="link-to-git"
          href={props.git}
        >
          <img
            alt="github-logo"
            className="github-logo-img"
            src="/images/github-logo-darker.png"
          />
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
