import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";

const NftMarketplacePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ProjectHeader
          title="NFT Marketplace"
          description="C’est une intégration HTML/CSS d’une maquette Figma. L’objectif était de réaliser le site avec un score de 100 % sur Lighthouse."
          live="https://franklin-hyriol.github.io/nft-marketplace/"
          github="https://github.com/franklin-hyriol/nft-marketplace"
        />

        <ProjectImg
          url="https://franklin-hyriol.github.io/nft-marketplace/"
          img="/screenshot/nft-marketplace.png"
          alt="Capture d'écran du NFT Marketplace"
        />

        <Projetctech
          text={
            <>
              Le projet a été réalisé en <strong>HTML</strong> et{" "}
              <strong>CSS</strong>, avec un peu de <strong>JavaScript</strong>{" "}
              pour les interactions.
            </>
          }
        />

        <ProjectChallenges
          challenges={[
            "Reproduire fidèlement la maquette Figma.",
            "Créer un design responsive.",
            "Optimiser les images et les assets pour un chargement rapide.",
            "Écrire un code HTML sémantique et accessible.",
            "Atteindre un score de 100 % sur Lighthouse.",
          ]}
        />

        <ProjectFeatures
          features={[
            "Intégration pixel-perfect de la maquette.",
            "Design responsive.",
            "Animations CSS.",
            "Code optimisé pour les performances.",
            "Excellente accessibilité.",
          ]}
        />

        <ProjectGalerie
          images={[
            {
              url: "/screenshot/nft-marketplace.png",
              alt: "Page d'accueil du NFT Marketplace",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default NftMarketplacePage;
