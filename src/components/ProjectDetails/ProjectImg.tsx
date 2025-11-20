
interface ProjectImgProps {
    url: string
    img: string
    alt: string
}

function ProjectImg({url, img, alt}: ProjectImgProps) {
  return (
    <div className="mockup-browser border-base-300 border w-full">
      <div className="mockup-browser-toolbar">
        <div className="input">{url}</div>
      </div>
      <div className="border-t border-base-300 h-auto">
        <picture className="w-full h-full">
          <img className="object-cover w-full h-full" src={img} alt={alt} />
        </picture>
      </div>
    </div>
  );
}

export default ProjectImg;
