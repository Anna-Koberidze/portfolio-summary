function ProjectCard(props) {
  return (
    <div className={props.className}>
      <h2>{props.name}</h2>
      <img>{props.img}</img>
      <p>{props.desc}</p>
    </div>
  );
}
export default ProjectCard;
