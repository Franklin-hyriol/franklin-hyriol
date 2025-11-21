import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";

const VerletJsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ProjectHeader
          title="Verlet Js"
          description="Verlet.js est une bibliothèque JavaScript et React conçue pour simplifier la création de simulations physiques basées sur l'algorithme d'intégration de Verlet. Elle permet de simuler facilement des systèmes complexes comme des cordes, des tissus ou des particules interconnectées, avec une API simple et performante."
          live="https://www.npmjs.com/package/verlet-js-react"
          github="https://github.com/franklin-hyriol/verlet-js-react"
        />

        <ProjectImg
          url="https://www.npmjs.com/package/verlet-js-react"
          img="/screenshot/verletjs.png"
          alt="Exemple de simulation avec Verlet.js"
        />

        <Projetctech
          text={
            <>
              Le projet a été développé en <strong>TypeScript</strong> et est
              packagé avec <strong>Rollup</strong>. La documentation est générée
              grâce à <strong>Docusaurus</strong>, assurant un site statique
              performant et facile à maintenir.
            </>
          }
        />

        <ProjectChallenges
          challenges={[
            "Adapter l'algorithme de Verlet pour une utilisation générique en JavaScript.",
            "Créer une API intuitive et flexible pour les développeurs.",
            "Optimiser les calculs pour garantir des simulations fluides même avec un grand nombre de particules.",
            "Développer un wrapper React (`verlet-js-react`) pour une intégration transparente dans les applications modernes.",
            "Rédiger une documentation complète avec des exemples clairs.",
          ]}
        />

        <ProjectFeatures
          features={[
            "Simulation de points, de contraintes (distances) et de gravité.",
            "Création facile de systèmes complexes comme des cordes, des tissus et des formes rigides.",
            "Composant React prêt à l'emploi pour une intégration rapide.",
            "Aucune dépendance externe, léger et performant.",
            "Documentation détaillée et exemples interactifs.",
          ]}
        />

        <ProjectGalerie
          images={[
            {
              url: "/screenshot/verletjs.png",
              alt: "Simulation de corde",
            },
            {
              url: "/screenshot/verletjs.png",
              alt: "Simulation de tissu",
            },
            {
              url: "/screenshot/verletjs.png",
              alt: "Exemple d'intégration",
            },
            {
              url: "/screenshot/verletjs.png",
              alt: "Documentation",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default VerletJsPage;
