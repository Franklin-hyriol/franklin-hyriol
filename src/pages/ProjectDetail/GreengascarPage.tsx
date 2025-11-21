import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";

const GreengascarPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-20">
        <ProjectHeader
          title="Greengascar"
          description="Greengascar est une application qui vous permet de calculer votre empreinte carbone à travers de petites questions sur vos activités quotidiennes."
          live="https://greengascar.pulse.mg/"
          github="#"
        />

        <ProjectImg
          url="https://greengascar.pulse.mg/"
          img="/screenshot/greengascar.png"
          alt="Capture d'écran de l'application Greengascar"
        />

        <Projetctech
          text={
            <>
              Greengascar a été développé avec <strong>Next.js</strong> et{" "}
              <strong>TypeScript</strong>, en utilisant{" "}
              <strong>Tailwind CSS</strong> pour le style.
            </>
          }
        />

        <ProjectChallenges
          challenges={[
            "Créer un questionnaire intuitif et engageant.",
            "Calculer l'empreinte carbone de manière précise.",
            "Présenter les résultats de manière claire et compréhensible.",
            "Sensibiliser les utilisateurs à l'impact de leurs actions.",
            "Proposer des alternatives pour réduire son empreinte carbone.",
          ]}
        />

        <ProjectFeatures
          features={[
            "Questionnaire sur les habitudes de vie.",
            "Calcul de l'empreinte carbone.",
            "Conseils pour réduire son impact environnemental.",
            "Interface ludique et éducative.",
            "Partage des résultats sur les réseaux sociaux.",
          ]}
        />

        <ProjectGalerie
          images={[
            {
              url: "/screenshot/greengascar.png",
              alt: "Page d'accueil de Greengascar",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default GreengascarPage;
