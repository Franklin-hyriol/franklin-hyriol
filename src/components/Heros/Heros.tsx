import { FaArrowDown, FaFileDownload } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import HeroImage from "./franklin.jpeg";

function Heros() {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="main-container min-h-screen pt-5 sm:pt-16 pb-8 md:min-h-[calc(100vh-64px)] md:py-0 flex items-center"
    >
      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-4 md:gap-10 lg:gap-15 xl:gap-20  w-full md:mt-10 xl:-mt-30">
        <ScrollReveal
          from="left"
          classParent="w-full md:basis-[50%]"
          classChild="flex flex-col gap-5 md:gap-10 text-center md:text-left"
        >
          <div className="flex flex-col gap-5">
            <span className="text-xl md:text-2xl">
              Bonjour
              <span className="inline-block animate-wave ml-1">👋</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Franklin Hyriol — Développeur Fullstack
            </h1>
            <p className="text-base md:text-lg">
              Passionné par l’informatique, j’ai passé mes nuits à apprendre
              tout ce qui me tombait sous les yeux, à tester, casser et
              reconstruire des trucs juste pour comprendre comment ça marchait.
              Aujourd’hui, je suis devenu développeur web et intégrateur,
              capable de transformer les maquettes et le cahier des charges en
              applications fonctionnelles et agréables à utiliser. Bref, je fais
              parler le papier grâce à un peu de magie du code.
            </p>
          </div>

          <div className="flex flex-col flex-wrap sm:flex-row gap-4 justify-center md:justify-start items-center">
            <a href="/Franklin_Hyriol_RAZAFINANDRASANA_CV.pdf" download>
              <button className="btn btn-lg w-fit">
                Télécharger mon CV <FaFileDownload />
              </button>
            </a>
            <button
              onClick={handleScrollToProjects}
              className="btn btn-primary btn-lg w-fit"
            >
              Voir mes projets <FaArrowDown />
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal
          from="right"
          delay={0.5}
          classParent="w-full h-[424px] md:basis-[50%] flex justify-center"
          classChild="w-full h-full flex justify-center"
        >
          <picture className="w-full md:w-full h-full block">
            <img
              className="mask mask-squircle w-full h-full object-cover object-top"
              src={HeroImage}
              alt="Franklin Hyriol"
            />
          </picture>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Heros;
