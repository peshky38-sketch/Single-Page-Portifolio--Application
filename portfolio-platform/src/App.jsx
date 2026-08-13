import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";

import projectsData from "./data/project";

import "./App.css";

function App() {
  const [projects, setProjects] = useState(projectsData);

  const [searchTerm, setSearchTerm] = useState("");

  const [showForm, setShowForm] = useState(false);

  const addProject = (newProject) => {
    const project = {
      ...newProject,
      id: Date.now(),
    };

    setProjects((previousProjects) => [
      project,
      ...previousProjects,
    ]);

    setShowForm(false);
  };

  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase();

    return (
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.category.toLowerCase().includes(search) ||
      project.technologies.some((technology) =>
        technology.toLowerCase().includes(search)
      )
    );
  });

  return (
    <div className="app">
      <Header />

      <main>
        <Hero
          onAddProject={() => setShowForm(true)}
        />

        <section className="projects-section">
          <div className="section-header">
            <div>
              <p className="section-label">PORTFOLIO</p>

              <h2>Featured Projects</h2>
            </div>

            <p>
              {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
            </p>
          </div>

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <ProjectList
            projects={filteredProjects}
          />
        </section>

        {showForm && (
          <ProjectForm
            onAddProject={addProject}
            onClose={() => setShowForm(false)}
          />
        )}
      </main>

      <footer>
        <p>© 2026 Portfolio Platform</p>
      </footer>
    </div>
  );
}

export default App;
