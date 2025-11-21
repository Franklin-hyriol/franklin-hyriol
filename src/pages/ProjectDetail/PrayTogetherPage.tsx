import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";

const PrayTogetherPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ProjectHeader
          title="Pray Together"
          description="Pray Together est une application qui permet aux personnes de prier ensemble, où qu’elles soient. Elle offre un espace pour partager des intentions de prière et rejoindre des groupes de prière."
          live="https://pray.up.railway.app/"
          github="#"
        />

        <ProjectImg
          url="https://pray.up.railway.app/"
          img="/screenshot/PrayTogether-dark.png"
          alt="Capture d'écran de l'application Pray Together"
        />

        <Projetctech
          text={
            <>
              L'application est construite avec <strong>Next.js</strong> pour le
              frontend, un backend en <strong>Express.js</strong>, et une base
              de données <strong>PostgreSQL</strong>. Le tout est déployé sur{" "}
              <strong>Railway</strong>.
            </>
          }
        />

        <ProjectChallenges
          challenges={[
            "Mettre en place une authentification sécurisée des utilisateurs.",
            "Créer une base de données relationnelle pour gérer les utilisateurs, les groupes et les intentions de prière.",
            "Développer une API RESTful pour la communication entre le frontend et le backend.",
            "Assurer la mise à jour en temps réel des intentions de prière.",
            "Déployer l'application fullstack sur une plateforme cloud.",
          ]}
        />

        <ProjectFeatures
          features={[
            "Création de compte et connexion.",
            "Possibilité de créer et rejoindre des groupes de prière.",
            "Ajout et consultation d'intentions de prière.",
            "Interface simple et épurée.",
            "Notifications pour les nouvelles intentions de prière.",
          ]}
        />

        <ProjectGalerie
          images={[
            {
              url: "/screenshot/PrayTogether-light.png",
              alt: "Mode clair de l'application",
            },
            {
              url: "/screenshot/PrayTogether-dark.png",
              alt: "Mode sombre de l'application",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PrayTogetherPage;
