import { useSelector } from "react-redux";

function ProjectCard(props) {
  const theme = useSelector((state) => state.theme.theme);
  let btnThemeClassName;
  let lblTheme;

  switch (theme) {
    case 1:
      btnThemeClassName = "initial-btn-p";
      lblTheme = "";
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
        <img alt="screenshot of website" src={props.img} />
      </a>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>

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
    </div>
  );
}
export default ProjectCard;
