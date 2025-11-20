interface Image {
  url: string;
  alt: string;
}

interface ProjectGalerieProps {
  images: Image[];
}

function ProjectGalerie({ images }: ProjectGalerieProps) {
  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-center text-4xl font-semibold mb-10">Galerie</h2>
      <ul className="grid grid-cols-2 gap-5">
        {images.map((image, idx) => (
          <li key={idx}>
            <img src={image.url} alt={image.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectGalerie;
