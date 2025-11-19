import ProjectCard from "../ProjectCard/ProjectCard";

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

        <div className="grid grid-cols-4 gap-y-26">
          <ProjectCard />

          <ProjectCard />

          <ProjectCard />

          <ProjectCard />

          <ProjectCard />

          <ProjectCard />

          <ProjectCard />

          <ProjectCard />
        </div>
      </div>
    </section>
  );
}

export default Projects;
