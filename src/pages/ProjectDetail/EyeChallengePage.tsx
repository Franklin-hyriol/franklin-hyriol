import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";

const EyeChallengePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ProjectHeader
          title="Eye Challenge"
          description="Eye Challenge est une application web ludique conçue pour tester vos réflexes et votre capacité à résoudre des mini-jeux rapides. L’objectif était de créer une interface moderne, engageante et fun, qui garde les utilisateurs motivés à jouer et progresser."
          live="https://www.eyechallenge.fun/"
          github="https://github.com/franklin-hyriol/eye-challenge"
        />

        <ProjectImg
          url="https://www.eyechallenge.fun/"
          img="/screenshot/EyeChallenge-dark.png"
          alt="home page Eye Challenge https://www.eyechallenge.fun/"
        />

        <Projetctech
          text={
            <>
              Le projet a été développé avec <strong>Next.js</strong> pour un
              rendu côté serveur et une performance optimale. Le style est géré
              avec <strong>Tailwind CSS</strong>, et le tout est écrit en{" "}
              <strong>TypeScript</strong> pour un code plus sûr et maintenable.
            </>
          }
        />

        <ProjectChallenges
          challenges={[
            "Création d’un design responsive et attrayant inspiré de Figma.",
            "Gestion des scores en temps réel et sauvegarde dans le localStorage.",
            "Intégration de plusieurs mini-jeux interactifs avec des animations fluides en CSS.",
            "Optimisation du SEO et des performances pour un chargement rapide avec Vercel.",
            "Mise en place d'un système de partage des scores sur les réseaux sociaux.",
          ]}
        />

        <ProjectFeatures
          features={[
            "Une variété de mini-jeux pour tester la perception des couleurs, les réflexes et la mémoire.",
            "Un classement local pour suivre ses propres progrès.",
            "Un design responsive qui s'adapte à tous les écrans, du mobile au bureau.",
            "Des animations CSS légères pour un feedback visuel instantané.",
            "Aucune inscription requise, jouez instantanément.",
          ]}
        />

        <ProjectGalerie
          images={[
            {
              url: "/EyeChallenge/EyeChallenge-light.png",
              alt: "Screenshot du jeu en mode clair",
            },
            {
              url: "/EyeChallenge/EyeChallenge-dark.png",
              alt: "Screenshot du jeu en mode sombre",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default EyeChallengePage;
