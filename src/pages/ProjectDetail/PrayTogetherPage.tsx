import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const PrayTogetherPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ScrollReveal>
          <ProjectHeader
            title="Pray Together"
            description="Pray Together est une application qui permet aux personnes de prier ensemble, où qu’elles soient. Elle offre un espace pour partager des intentions de prière et rejoindre des groupes de prière."
            live="https://pray.up.railway.app/"
            github="https://github.com/Franklin-hyriol/PrayTogether"
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectImg
            url="https://pray.up.railway.app/"
            img="/PrayTogether/screen_2.jpg"
            alt="Capture d'écran de l'application Pray Together"
          />
        </ScrollReveal>

        <ScrollReveal>
          <Projetctech
            text={
              <>
                J’ai choisi <strong>Next.js</strong> pour la partie frontend,
                car j’avais besoin du rendu côté serveur pour le SEO. Pour le
                backend, j’ai utilisé <strong>Express.js</strong> que je trouve
                facile à prendre en main pour des petits projets comme
                celui-ci. La base de données est <strong>MongoDB</strong>,
                hébergée sur MongoDB Atlas.
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectChallenges
            challenges={[
              "Mettre en place une authentification sécurisée des utilisateurs.",
              "Créer une base de données relationnelle pour gérer les utilisateurs, les groupes et les intentions de prière.",
              "Développer une API RESTful pour la communication entre le frontend et le backend.",
              "Assurer la mise à jour en temps réel des intentions de prière avec l'utilisation de WebSockets.",
              "Déployer l'application fullstack sur une plateforme cloud.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectFeatures
            features={[
              "Création de compte et connexion.",
              "creation, consulation et suppression de priere.",
              "Ajout et consultation d'intentions de prière.",
              "Interface simple et épurée.",
              "Notifications en temps réel pour les nouvelles intentions de prière.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectGalerie
            images={[
              {
                url: "/PrayTogether/screen_1.jpg",
                alt: "Capture d'écran de l'application Pray Together",
              },
              {
                url: "/PrayTogether/screen_2.jpg",
                alt: "Capture d'écran de l'application Pray Together",
              },
              {
                url: "/PrayTogether/screen_3.jpg",
                alt: "Capture d'écran de l'application Pray Together",
              },
              {
                url: "/PrayTogether/screen_4.jpg",
                alt: "Capture d'écran de l'application Pray Together",
              },
              {
                url: "/PrayTogether/screen_5.jpg",
                alt: "Capture d'écran de l'application Pray Together",
              },
              {
                url: "/PrayTogether/screen_6.jpg",
                alt: "Capture d'écran de l'application Pray Together",
              },
              {
                url: "/PrayTogether/screen_7.jpg",
                alt: "Capture d'écran de l'application Pray Together",
              },
              {
                url: "/PrayTogether/screen_8.jpg",
                alt: "Capture d'écran de l'application Pray Together",
              },
            ]}
          />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PrayTogetherPage;
