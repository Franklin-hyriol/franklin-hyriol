import { FaArrowDown, FaFileDownload } from "react-icons/fa";
import HeroImage from "./franklin.jpeg";

function Heros() {
  return (
    <section id="home" className="main-container h-[calc(100vh-64px)]">
      <div className="flex justify-between gap-10 items-center  h-[calc(85vh-64px)]">
        <div className="basis-[50%] flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <span className="text-2xl">
              Bonjour
              <span className="inline-block animate-wave ml-1">👋</span>
            </span>
            <h1 className="text-5xl font-bold">
              Franklin Hyriol — Développeur Fullstack
            </h1>
            <p className="text-lg">
              Je suis développeur fullstack (stack MERN) et je conçois des
              applications web modernes, performantes et centrées sur
              l’expérience utilisateur.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="btn btn-lg">
              Télécharger mon CV <FaFileDownload />
            </button>
            <button className="btn btn-primary btn-lg">
              Voir mes projets <FaArrowDown />
            </button>
          </div>
        </div>

        <div className="basis-[50%]">
          <picture className="w-full block">
            <img
              className="mask mask-hexagon-2"
              src={HeroImage}
              alt="Franklin Hyriol"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Heros;
