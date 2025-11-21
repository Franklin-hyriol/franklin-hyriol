import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";

const PlottrackingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ProjectHeader
          title="Plottracking by Bondy"
          description="Plottracking est une application utilisée par la compagnie Bondy pour suivre la croissance de leurs plantations d’arbres."
          live="https://plottracking.bondy.earth/"
          github="#"
        />

        <ProjectImg
          url="https://plottracking.bondy.earth/"
          img="/screenshot/plottracking.png"
          alt="Capture d'écran de l'application Plottracking"
        />

        <Projetctech
          text={
            <>
              L'application a été développée en <strong>React</strong> avec{" "}
              <strong>TypeScript</strong>, en utilisant{" "}
              <strong>Tailwind CSS</strong> pour le style.
            </>
          }
        />

        <ProjectChallenges
          challenges={[
            "Mettre en place un système de suivi des parcelles de plantation.",
            "Permettre l'ajout et la modification des données de croissance des arbres.",
            "Visualiser les données sous forme de graphiques et de tableaux.",
            "Gérer les utilisateurs et leurs permissions.",
            "Assurer la sécurité des données.",
          ]}
        />

        <ProjectFeatures
          features={[
            "Tableau de bord avec les statistiques de croissance.",
            "Gestion des parcelles et des arbres.",
            "Saisie des données de mesure.",
            "Graphiques de croissance.",
            "Export des données au format CSV.",
          ]}
        />

        <ProjectGalerie
          images={[
            {
              url: "/screenshot/plottracking.png",
              alt: "Tableau de bord de Plottracking",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PlottrackingPage;
