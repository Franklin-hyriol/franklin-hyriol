import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";

const PlottrackingPage = () => {
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ProjectHeader
          title="Eye Challenge"
          description="Eye Challenge est une application web ludique conçue pour tester vos réflexes et votre capacité à résoudre des mini-jeux rapides.  
L’objectif était de créer une interface moderne, engageante et fun, qui garde les utilisateurs motivés à jouer et progresser."
          live="https://www.eyechallenge.fun/"
          github="https://github.com/ton-compte/eye-challenge"
        />

        <ProjectImg
          url="https://www.eyechallenge.fun/"
          img="/EyeChallenge/EyeChallenge-light.png"
          alt="home page Eye Challenge https://www.eyechallenge.fun/"
        />

        <Projetctech
          text={
            <>
              Hello <strong>React Typescript</strong>
            </>
          }
        />

        <ProjectChallenges
          challenges={[
            "Création d’un design responsive inspiré de Figma",
            "Gestion des scores en temps réel",
            "Intégration de mini-jeux interactifs et animations fluides",
            "Optimisation SEO et performance pour un chargement rapide",
            "Gestion des erreurs et validation des formulaires avec Zod et React Hook Form",
          ]}
        />

        <ProjectFeatures
          features={[
            "Mini-jeux interactifs avec timer et score",
            "Leaderboard pour comparer les performances",
            "Responsive design pour tous les appareils",
            "Animations CSS fluides pour feedback visuel",
            "Validation de formulaire pour la soumission de score",
          ]}
        />

        <ProjectGalerie
          images={[
            {
              url: "https://placehold.co/800x400?text=Preview+1",
              alt: "Screenshot 1",
            },
            {
              url: "https://placehold.co/800x400?text=Preview+2",
              alt: "Screenshot 2",
            },
            {
              url: "https://placehold.co/800x400?text=Preview+3",
              alt: "Screenshot 3",
            },
            {
              url: "https://placehold.co/800x400?text=Preview+3",
              alt: "Screenshot 3",
            },
          ]}
        />
      </div>
    </div>
  );
};


export default PlottrackingPage;
