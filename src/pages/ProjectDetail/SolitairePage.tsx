import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";

const SolitairePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ProjectHeader
          title="Spider Solitaire Online"
          description="Spider Solitaire Online est une version web du célèbre Spider Solitaire de Windows 7."
          live="https://solimillion.netlify.app/"
          github="https://github.com/franklin-hyriol/solitaire"
        />

        <ProjectImg
          url="https://solimillion.netlify.app/"
          img="/screenshot/solitaire.png"
          alt="Capture d'écran du jeu Spider Solitaire"
        />

        <Projetctech
          text={
            <>
              Le jeu a été développé en <strong>React</strong> avec{" "}
              <strong>TypeScript</strong>, en utilisant{" "}
              <strong>Tailwind CSS</strong> pour le style.
            </>
          }
        />

        <ProjectChallenges
          challenges={[
            "Recréer la logique du jeu Spider Solitaire.",
            "Gérer le drag and drop des cartes.",
            "Implémenter les règles du jeu, y compris les différents niveaux de difficulté.",
            "Créer une interface utilisateur fidèle à l'original.",
            "Assurer la fluidité des animations.",
          ]}
        />

        <ProjectFeatures
          features={[
            "Jeu de Spider Solitaire complet.",
            "Plusieurs niveaux de difficulté.",
            "Annulation des mouvements.",
            "Statistiques de jeu.",
            "Design responsive.",
          ]}
        />

        <ProjectGalerie
          images={[
            {
              url: "/screenshot/solitaire.png",
              alt: "Partie de Spider Solitaire en cours",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SolitairePage;
