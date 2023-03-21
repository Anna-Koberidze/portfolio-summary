function ProjectCard(props) {
  return (
    <div key={props.index} className={`p-cards ${props.className}`}>
      <a target="_blank" rel="noreferrer" href={props.link}>
        <img alt="screenshot of website" src={props.img} />
      </a>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <button className="project-button">
        <a target="_blank" rel="noreferrer" href={props.link}>
          {props.text}
        </a>
      </button>
    </div>
  );
}
export default ProjectCard;
