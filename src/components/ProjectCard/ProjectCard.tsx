import { Link } from "react-router-dom";

interface ProjectCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  type: string;
  url: string;
}

function ProjectCard({ image, alt, title, description, type, url }: ProjectCardProps) {
  return (
    <Link className="hover-3d" to={url} data-type={type}>
      {/* content */}

      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={image}
            alt={alt}
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p>
            {description}
          </p>
        </div>
      </div>

      {/* 8 empty divs needed for the 3D effect */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Link>
  );
}

export default ProjectCard;
