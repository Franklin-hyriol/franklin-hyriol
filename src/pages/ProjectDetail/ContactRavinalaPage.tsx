import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";

const ContactRavinalaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ProjectHeader
          title="Ravinala page contact"
          description="C’est la page de contact du site Ravinalala Aéroport, où vous trouverez toutes les informations nécessaires pour les joindre et poser vos questions."
          live="https://contact.ravinala-airports.aero/"
          github="#"
        />

        <ProjectImg
          url="https://contact.ravinala-airports.aero/"
          img="/screenshot/contact.ravinala-light.png"
          alt="Capture d'écran de la page contact de Ravinala"
        />

        <Projetctech
          text={
            <>
              La page a été développée en <strong>React</strong> avec{" "}
              <strong>TypeScript</strong>, en utilisant{" "}
              <strong>Tailwind CSS</strong> pour le style.
            </>
          }
        />

        <ProjectChallenges
          challenges={[
            "Créer un formulaire de contact clair et facile à utiliser.",
            "Intégrer une carte interactive pour localiser l'aéroport.",
            "Assurer la validation des champs du formulaire.",
            "Mettre en place un système d'envoi d'email.",
            "Rendre la page accessible aux personnes en situation de handicap.",
          ]}
        />

        <ProjectFeatures
          features={[
            "Formulaire de contact.",
            "Carte interactive.",
            "Informations de contact.",
            "FAQ.",
            "Design responsive.",
          ]}
        />

        <ProjectGalerie
          images={[
            {
              url: "/screenshot/contact.ravinala-light.png",
              alt: "Page contact de Ravinala",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ContactRavinalaPage;
