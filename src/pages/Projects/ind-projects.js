function ProjectCard(props) {
  return (
    <div key={props.index} className={`p-cards ${props.className}`}>
      <img alt="screenshot of website" src={props.img} />
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <button className="project-button">
        <a href={props.link}>{props.text}</a>
      </button>
    </div>
  );
}
export default ProjectCard;
