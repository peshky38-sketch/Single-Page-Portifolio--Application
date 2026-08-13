import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="no-results">
        <h3>No projects found</h3>

        <p>
          Try searching for another project,
          category or technology.
        </p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default ProjectList;