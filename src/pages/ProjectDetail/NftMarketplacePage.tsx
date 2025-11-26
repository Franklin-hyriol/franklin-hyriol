import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const NftMarketplacePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-10 lg:mt-20">
      <div className="w-full lg:w-[80%] mx-auto flex flex-col gap-10 lg:gap-20">
        <ScrollReveal>
          <ProjectHeader
            title="NFT Marketplace"
            description="C’est une intégration HTML/CSS d’une maquette Figma. L’objectif était de réaliser le site avec un score de 100 % sur Lighthouse."
            live="https://franklin-hyriol.github.io/nft-marketplace/"
            github="https://github.com/franklin-hyriol/nft-marketplace"
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectImg
            url="https://franklin-hyriol.github.io/nft-marketplace/"
            img="/Marketplace/Marketplace.png"
            alt="Capture d'écran du NFT Marketplace"
          />
        </ScrollReveal>

        <ScrollReveal>
          <Projetctech
            text={
              <>
                Le projet a été réalisé en <strong>HTML</strong>,{" "}
                <strong>CSS/SCSS</strong>, en utilisant des librairies
                JavaScript comme <strong>Slick</strong> pour le carrousel, ainsi
                que du code maison pour rendre le header responsive.
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectChallenges
            challenges={[
              "Reproduire fidèlement la maquette Figma.",
              "Créer un design responsive.",
              "Optimiser les images et les assets pour un chargement rapide.",
              "Écrire un code HTML sémantique et accessible.",
              "Atteindre un score de 100 % sur Lighthouse et pageSpeed.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectFeatures
            features={[
              "Intégration pixel-perfect de la maquette.",
              "Design responsive.",
              "Carrousel dynamique.",
              "Code optimisé pour les performances.",
              "Excellente accessibilité.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectGalerie
            images={[
              {
                url: "/Marketplace/screen_1.png",
                alt: "Capture d'écran de l'application Marketplace",
              },
              {
                url: "/Marketplace/screen_2.png",
                alt: "Capture d'écran de l'application Marketplace",
              },
              {
                url: "/Marketplace/screen_3.png",
                alt: "Capture d'écran de l'application Marketplace",
              },
              {
                url: "/Marketplace/screen_4.png",
                alt: "Capture d'écran de l'application Marketplace",
              },
              {
                url: "/Marketplace/screen_5.png",
                alt: "Capture d'écran de l'application Marketplace",
              },
              {
                url: "/Marketplace/screen_6.png",
                alt: "Capture d'écran de l'application Marketplace",
              },
            ]}
          />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default NftMarketplacePage;
