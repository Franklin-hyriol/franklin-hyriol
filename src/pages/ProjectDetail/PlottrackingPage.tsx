import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const PlottrackingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ScrollReveal>
          <ProjectHeader
            title="Plottracking by Bondy"
            description="Plottracking est une application utilisée par la compagnie Bondy pour suivre la croissance de leurs plantations d’arbres. Le site est protégé par un token que seule la compagnie Bondi peut partager pour y accéder."
            live="https://plottracking.bondy.earth/"
            github=""
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectImg
            url="https://plottracking.bondy.earth/"
            img="/Plottracking/Plottracking.png"
            alt="Capture d'écran de l'application Plottracking"
          />
        </ScrollReveal>

        <ScrollReveal>
          <Projetctech
            text={
              <>
                Le backend a été développé en PHP avec <strong>Symfony</strong>{" "}
                par l’équipe backend, tandis que j’ai pris en charge le
                développement du frontend en <strong>React</strong>.
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectChallenges
            challenges={[
              "Ajout d’une protection avec JWT sans authentification côté client.",
              "Animation de la carte pour fluidifier la navigation.",
              "Mise à jour en temps réel des données côté frontend dès que la base de données change.",
              "Mise à jour de la carte ou de la sidebar en fonction des interactions de l’utilisateur.",
              "Visualisation 3D et vue “drone” des parcelles.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectFeatures
            features={[
              "Tableau de bord avec les statistiques de croissance.",
              "Visualisation des arbres avec leurs coordonnées.",
              "Accessible sur mobile et desktop.",
              "Animations douces et fluides pour une meilleure expérience visuelle.",
              "Site multilingue avec traduction via l’API Google Translate.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectGalerie
            images={[
              {
                url: "/Plottracking/screen_0.png",
                alt: "Capture d'écran de l'application Plottracking",
              },
              {
                url: "/Plottracking/screen_1.png",
                alt: "Capture d'écran de l'application Plottracking",
              },
              {
                url: "/Plottracking/screen_2.png",
                alt: "Capture d'écran de l'application Plottracking",
              },
              {
                url: "/Plottracking/screen_3.png",
                alt: "Capture d'écran de l'application Plottracking",
              },
              {
                url: "/Plottracking/screen_4.png",
                alt: "Capture d'écran de l'application Plottracking",
              },
              {
                url: "/Plottracking/screen_5.png",
                alt: "Capture d'écran de l'application Plottracking",
              },
              {
                url: "/Plottracking/screen_6.png",
                alt: "Capture d'écran de l'application Plottracking",
              },
              {
                url: "/Plottracking/screen_7.png",
                alt: "Capture d'écran de l'application Plottracking",
              },
              {
                url: "/Plottracking/screen_8.png",
                alt: "Capture d'écran de l'application Plottracking",
              },
              {
                url: "/Plottracking/screen_9.png",
                alt: "Capture d'écran de l'application Plottracking",
              },
            ]}
          />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PlottrackingPage;
