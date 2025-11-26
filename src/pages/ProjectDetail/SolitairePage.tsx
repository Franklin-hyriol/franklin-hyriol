import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const SolitairePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ScrollReveal>
          <ProjectHeader
            title="Spider Solitaire Online"
            description="Spider Solitaire Online est une version web du célèbre Spider Solitaire de Windows 7."
            live="https://solimillion.netlify.app/"
            github="https://github.com/Franklin-hyriol/spider-solitaire-react"
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectImg
            url="https://solimillion.netlify.app/"
            img="/Solitaire/Solitaire.png"
            alt="Capture d'écran du jeu Spider Solitaire"
          />
        </ScrollReveal>

        <ScrollReveal>
          <Projetctech
            text={
              <>
                Le jeu a été développé en <strong>React</strong> avec{" "}
                <strong>TypeScript</strong>, en utilisant{" "}
                <strong>Tailwind CSS</strong> pour le style.
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectChallenges
            challenges={[
              "Recréer la logique du jeu Spider Solitaire.",
              "Gérer le drag and drop des cartes.",
              "Implémenter les règles du jeu, y compris les différents niveaux de difficulté.",
              "Créer une interface utilisateur fidèle à l'original.",
              "Assurer la fluidité des animations.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectFeatures
            features={[
              "Jeu de Spider Solitaire complet.",
              "Plusieurs niveaux de difficulté.",
              "Annulation des mouvements.",
              "Statistiques de jeu.",
              "Design responsive.",
              "Aide en cas de bloquage.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectGalerie
            images={[
              {
                url: "/Solitaire/screen_0.png",
                alt: "Capture d'écran de l'application Solitaire",
              },
              {
                url: "/Solitaire/screen_1.png",
                alt: "Capture d'écran de l'application Solitaire",
              },
              {
                url: "/Solitaire/screen_2.png",
                alt: "Capture d'écran de l'application Solitaire",
              },
              {
                url: "/Solitaire/screen_3.png",
                alt: "Capture d'écran de l'application Solitaire",
              },
              {
                url: "/Solitaire/screen_4.png",
                alt: "Capture d'écran de l'application Solitaire",
              },
              {
                url: "/Solitaire/screen_5.png",
                alt: "Capture d'écran de l'application Solitaire",
              },
            ]}
          />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default SolitairePage;
