import { useState } from "react";

function ProjectForm({
  onAddProject,
  onClose,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    technologies: "",
    image: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.category.trim() ||
      !formData.technologies.trim()
    ) {
      setError(
        "Please complete all required fields."
      );

      return;
    }

    const project = {
      ...formData,

      technologies: formData.technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean),

      image:
        formData.image ||
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    };

    onAddProject(project);

    setFormData({
      title: "",
      description: "",
      category: "",
      technologies: "",
      image: "",
    });

    setError("");
  };

  return (
    <div className="modal">
      <div className="form-container">
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close form"
        >
          ×
        </button>

        <p className="section-label">
          NEW PROJECT
        </p>

        <h2>Add a Project</h2>

        {error && (
          <p role="alert" className="form-error">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            Project Title *
          </label>

          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Project title"
          />

          <label htmlFor="description">
            Description *
          </label>

          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Project description"
          />

          <label htmlFor="category">
            Category *
          </label>

          <input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Web Development"
          />

          <label htmlFor="technologies">
            Technologies *
          </label>

          <input
            id="technologies"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
            placeholder="React, JavaScript, CSS"
          />

          <label htmlFor="image">
            Image URL
          </label>

          <input
            id="image"
            name="image"
            type="url"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://..."
          />

          <div className="form-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="primary-button"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectForm;