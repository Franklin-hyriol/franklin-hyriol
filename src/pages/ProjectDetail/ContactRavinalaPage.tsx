import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const ContactRavinalaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ScrollReveal>
          <ProjectHeader
            title="Ravinala page contact"
            description="C’est la page de contact du site Ravinalala Aéroport, où vous trouverez toutes les informations nécessaires pour les joindre et poser vos questions."
            live="https://contact.ravinala-airports.aero/"
            github=""
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectImg
            url="https://contact.ravinala-airports.aero/"
            img="/Ravinala/Ravinala.png"
            alt="Capture d'écran de la page contact de Ravinala"
          />
        </ScrollReveal>

        <ScrollReveal>
          <Projetctech
            text={
              <>
                Le site Ravinala lui-même a été développé avec{" "}
                <strong>WordPress</strong> et <strong>Elementor</strong>, mais
                vu la complexité des interactions requises sur la page de
                contact, j’ai été intégré au projet pour développer cette partie
                en <strong>React</strong>.
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectChallenges
            challenges={[
              "Créer un formulaire de contact clair et facile à utiliser.",
              "Utiliser la traduction dans le backend pour les textes affichés.",
              "Assurer la validation des champs du formulaire.",
              "Mettre en place un système d'envoi du formulaire.",
              "Rendre la page accessible et responsive.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectFeatures
            features={[
              "Formulaire de contact.",
              "Site multi-langue.",
              "Validation des champs en temps réel.",
              "Design responsive.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectGalerie
            images={[
              {
                url: "/Ravinala/screen_1.png",
                alt: "Capture d'écran de l'application Ravinala",
              },
              {
                url: "/Ravinala/screen_2.png",
                alt: "Capture d'écran de l'application Ravinala",
              },
              {
                url: "/Ravinala/screen_3.png",
                alt: "Capture d'écran de l'application Ravinala",
              },
              {
                url: "/Ravinala/screen_4.png",
                alt: "Capture d'écran de l'application Ravinala",
              },
              {
                url: "/Ravinala/screen_5.png",
                alt: "Capture d'écran de l'application Ravinala",
              },
              {
                url: "/Ravinala/screen_6.png",
                alt: "Capture d'écran de l'application Ravinala",
              },
            ]}
          />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ContactRavinalaPage;
