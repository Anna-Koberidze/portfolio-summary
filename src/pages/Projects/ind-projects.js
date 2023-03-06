function ProjectCard(props) {
  return (
    <div key={props.index} className={`p-cards ${props.className}`}>
      <img alt="screenshot of website" src={props.img} />
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <a href={props.link}>click to visit website</a>
    </div>
  );
}
export default ProjectCard;
