import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";

const IntervalTimerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ProjectHeader
          title="Interval Timer"
          description="Interval Timer est une application qui vous permet de créer des minuteurs avec intervalles. Idéal pour les séances de sport, de méditation ou de travail."
          live="https://www.intervaltimer.fun/"
          github="https://github.com/Franklin-hyriol/intervaltimer"
        />

        <ProjectImg
          url="https://www.intervaltimer.fun/"
          img="/IntervalTimer/IntervalTimer.png"
          alt="Capture d'écran de l'application Interval Timer"
        />

        <Projetctech
          text={
            <>
              Cette application a été développée en pur <strong>HTML</strong>HTML, <strong>Tailwind CSS</strong> et
              <strong>TypeScript</strong>TypeScript, car je voulais une application légère, rapide et
              agréable à coder.
            </>
          }
        />

        <ProjectChallenges
          challenges={[
            "Créer une interface utilisateur simple et intuitive pour la création de minuteurs.",
            "Gérer le temps avec précision en JavaScript.",
            "Permettre la sauvegarde des minuteurs personnalisés dans le navigateur.",
            "Assurer le fonctionnement de l'application en arrière-plan.",
            "Rendre l'application installable sur les appareils mobiles (PWA) et fonctionnant en mode offline.",
          ]}
        />

        <ProjectFeatures
          features={[
            "Création de minuteurs avec plusieurs intervalles.",
            "Personnalisation de la durée de chaque intervalle.",
            "Sauvegarde et reutilisation des minuteurs pour une utilisation ultérieure.",
            "Notifications sonores à la fin de chaque intervalle.",
            "Mode sombre et clair.",
          ]}
        />

        <ProjectGalerie
          images={[
            {
              url: "/IntervalTimer/screen_1.png",
              alt: "Capture d'écran de l'application Interval Timer",
            },
            {
              url: "/IntervalTimer/screen_2.png",
              alt: "Capture d'écran de l'application Interval Timer",
            },
            {
              url: "/IntervalTimer/screen_3.png",
              alt: "Capture d'écran de l'application Interval Timer",
            },
            {
              url: "/IntervalTimer/screen_4.png",
              alt: "Capture d'écran de l'application Interval Timer",
            },
            {
              url: "/IntervalTimer/screen_5.png",
              alt: "Capture d'écran de l'application Interval Timer",
            },
            {
              url: "/IntervalTimer/screen_6.png",
              alt: "Capture d'écran de l'application Interval Timer",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default IntervalTimerPage;
