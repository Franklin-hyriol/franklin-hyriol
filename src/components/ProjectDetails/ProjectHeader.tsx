interface ProjectHeaderProps {
  title: string;
  description: string;

  live: string;
  github?: string;
}

function ProjectHeader({
  title,
  description,
  live,
  github,
}: ProjectHeaderProps) {
  return (
    <div className="text-center flex flex-col gap-6">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg">{description}</p>

      <div className="flex justify-center items-center gap-4">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg"
        >
          Voir le site
        </a>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-lg"
          >
            Voir le code
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectHeader;
