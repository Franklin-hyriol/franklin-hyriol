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
          description="Eye Challenge est une collection de mini-jeux qui permet de tester la capacité de vos yeux, vos réflexes et votre mémoire visuelle à travers des défis courts, fun et captivants."
          live="https://www.eyechallenge.fun/"
          github="https://github.com/Franklin-hyriol/EyeChallenge"
        />

        <ProjectImg
          url="https://www.eyechallenge.fun/"
          img="/EyeChallenge/EyeChallenge-dark.png"
          alt="home page Eye Challenge https://www.eyechallenge.fun/"
        />

        <Projetctech
          text={
            <>
              Ce projet est réalisé en fullstack avec <strong>Next.js</strong>,
              car l’importance d’avoir un site facilement{" "}
              <strong>crawlable</strong> et <strong>indexable</strong> par
              Google était ma priorité pour attirer du trafic.
            </>
          }
        />

        <ProjectChallenges
          challenges={[
            "Création d’un design responsive et attrayant inspiré de Figma.",
            "Gestion des scores en temps réel et sauvegarde dans le localStorage.",
            "Intégration de plusieurs mini-jeux interactifs avec des animations fluides en CSS.",
            "Optimisation du SEO et des performances pour un chargement rapide.",
            "Mise en place d'un système de partage des scores sur les réseaux sociaux.",
          ]}
        />

        <ProjectFeatures
          features={[
            "Une variété de mini-jeux pour tester la perception des couleurs, les réflexes et la mémoire.",
            "Un classement local pour suivre ses propres progrès.",
            "Un design responsive qui s'adapte à tous les écrans, du mobile au bureau.",
            "Des animations CSS légères pour un feedback visuel instantané.",
            "Ajout de retour sonore pour une immersion plus immersive.",
          ]}
        />

        <ProjectGalerie
          images={[
            {
              url: "/EyeChallenge/screen_1.png",
              alt: "Capture d'écran de l'application Eye Challenge",
            },
            {
              url: "/EyeChallenge/screen_2.png",
              alt: "Capture d'écran de l'application Eye Challenge",
            },
            {
              url: "/EyeChallenge/screen_3.png",
              alt: "Capture d'écran de l'application Eye Challenge",
            },
            {
              url: "/EyeChallenge/screen_4.png",
              alt: "Capture d'écran de l'application Eye Challenge",
            },
            {
              url: "/EyeChallenge/screen_5.png",
              alt: "Capture d'écran de l'application Eye Challenge",
            },
            {
              url: "/EyeChallenge/screen_6.png",
              alt: "Capture d'écran de l'application Eye Challenge",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default EyeChallengePage;
