import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectsItems from "../../data/projects.json";

function Projects() {
  return (
    <section className="pt-20 pb-20">
      <div className="main-container">
        <h2 className="text-center text-4xl font-semibold mb-10">
          Mes Projets
        </h2>

        <ul className="flex gap-2 justify-center items-center mb-10">
          <li>
            <button className="btn btn-primary">Tous</button>
          </li>

          <li>
            <button className="btn btn-ghost">Intergration</button>
          </li>
          
          <li>
            <button className="btn btn-ghost">Vanilla</button>
          </li>

          <li>
            <button className="btn btn-ghost">React</button>
          </li>


          <li>
            <button className="btn btn-ghost">Next</button>
          </li>


          <li>
            <button className="btn btn-ghost">Fullstack</button>
          </li>


        </ul>

        <div className="text-center mb-26">
          <p>Project vanilla</p>
        </div>

        <div className="flex flex-wrap justify-between gap-10 gap-y-20">
          {ProjectsItems.map((project) => (
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
