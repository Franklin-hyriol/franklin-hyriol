import useFancybox from "../../hooks/useFancybox";

interface Image {
  url: string;
  alt: string;
}

interface ProjectGalerieProps {
  images: Image[];
}

function ProjectGalerie({ images }: ProjectGalerieProps) {
  const [fancyboxRef] = useFancybox({
    // Your custom options
  });

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-center text-4xl font-semibold mb-10">Galerie</h2>
      <ul className="grid grid-cols-2 gap-5" ref={fancyboxRef}>
        {images.map((image, idx) => (
          <li key={idx}>
            <a
              data-fancybox="gallery"
              href={image.url}
            >
              <img
                src={image.url}
                alt={image.alt}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectGalerie;
