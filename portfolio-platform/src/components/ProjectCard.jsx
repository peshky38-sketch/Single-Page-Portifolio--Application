function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
        />

        <span className="category">
          {project.category}
        </span>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="technologies">
          {project.technologies.map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            )
          )}
        </div>

        <button className="view-button">
          View Project →
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;