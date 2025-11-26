import { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectsItems from "../../data/projects.json";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [filteredProjects, setFilteredProjects] = useState(ProjectsItems);

  const filters = ["Tous", "Integration", "Vanilla", "React", "Next", "Fullstack"];

  useEffect(() => {
    if (activeFilter === "Tous") {
      setFilteredProjects(ProjectsItems);
    } else {
      const newFilteredProjects = ProjectsItems.filter((project) =>
        project.type.toLowerCase().includes(activeFilter.toLowerCase())
      );
      setFilteredProjects(newFilteredProjects);
    }
  }, [activeFilter]);

  return (
    <section id="projects" className="pt-20 pb-20">
      <div className="main-container">
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10">
          Mes Projets
        </h2>

        <ul className="flex gap-2 justify-center items-center mb-10 flex-wrap">
          {filters.map((filter) => (
            <li key={filter}>
              <button
                onClick={() => setActiveFilter(filter)}
                className={`btn ${
                  activeFilter === filter ? "btn-primary" : "btn-ghost"
                }`}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              title={project.title}
              image={project.image}
              alt={project.alt}
              description={project.description}
              type={project.type}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
