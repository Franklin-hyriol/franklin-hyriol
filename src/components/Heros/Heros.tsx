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
              Passionné par l’informatique, j’ai passé mes nuits à apprendre
              tout ce qui me tombait sous les yeux, à tester, casser et
              reconstruire des trucs juste pour comprendre comment ça marchait.
              Aujourd’hui, je suis devenu développeur web et intégrateur,
              capable de transformer les maquettes et le cahier des charges en
              applications fonctionnelles et agréables à utiliser. Bref, je fais
              parler le papier grâce à un peu de magie du code.
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
