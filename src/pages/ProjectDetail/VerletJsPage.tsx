import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const VerletJsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ScrollReveal>
          <ProjectHeader
            title="Verlet Js"
            description="Verlet.js est une bibliothèque JavaScript et React conçue pour simplifier la création de simulations physiques basées sur l'algorithme d'intégration de Verlet. Elle permet de simuler facilement des systèmes complexes comme des cordes, des tissus ou des particules interconnectées, avec une API simple et performante."
            live="https://github.com/Franklin-hyriol/verletjs"
            github="https://github.com/Franklin-hyriol/verletjs"
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectImg
            url="https://www.npmjs.com/package/verlet-engine"
            img="/Verlet/Verlet.png"
            alt="A JavaScript/TypeScript library for 2D Verlet physics simulations."
          />
        </ScrollReveal>

        <ScrollReveal>
          <Projetctech
            text={
              <>
                Le projet a été développé en <strong>TypeScript</strong> et est
                packagé avec <strong>Rollup</strong>. La documentation est
                générée grâce à <strong>Docusaurus</strong>, assurant un site
                statique performant et facile à maintenir.
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectChallenges
            challenges={[
              "Adapter l'algorithme de Verlet pour une utilisation générique en JavaScript.",
              "Créer une API intuitive et flexible pour les développeurs.",
              "Optimiser les calculs pour garantir des simulations fluides même avec un grand nombre de particules.",
              "Développer un wrapper React (`verlet-js-react`) pour une intégration transparente dans les applications modernes.",
              "Rédiger une documentation complète avec des exemples clairs.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectFeatures
            features={[
              "Simulation de points, de contraintes (distances) et de gravité.",
              "Création facile de systèmes complexes comme des cordes, des tissus et des formes rigides.",
              "Composant React prêt à l'emploi pour une intégration rapide.",
              "Aucune dépendance externe, léger et performant.",
              "Documentation détaillée et exemples interactifs.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectGalerie
            images={[
              {
                url: "/Verlet/screen_0.png",
                alt: "Capture d'écran de l'application Verlet",
              },
              {
                url: "/Verlet/screen_1.png",
                alt: "Capture d'écran de l'application Verlet",
              },
              {
                url: "/Verlet/screen_2.png",
                alt: "Capture d'écran de l'application Verlet",
              },
              {
                url: "/Verlet/screen_3.png",
                alt: "Capture d'écran de l'application Verlet",
              },
              {
                url: "/Verlet/screen_4.png",
                alt: "Capture d'écran de l'application Verlet",
              },
              {
                url: "/Verlet/screen_5.png",
                alt: "Capture d'écran de l'application Verlet",
              },
            ]}
          />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default VerletJsPage;
