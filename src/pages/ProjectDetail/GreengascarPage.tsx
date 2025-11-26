import ProjectHeader from "../../components/ProjectDetails/ProjectHeader";
import Projetctech from "../../components/ProjectDetails/Projetctech";
import ProjectImg from "../../components/ProjectDetails/ProjectImg";
import ProjectChallenges from "../../components/ProjectDetails/ProjectChallenges";
import ProjectFeatures from "../../components/ProjectDetails/ProjectFeatures";
import ProjectGalerie from "../../components/ProjectDetails/ProjectGalerie";
import { useEffect } from "react";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const GreengascarPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container mt-10 lg:mt-20">
      <div className="w-full lg:w-[80%] mx-auto flex flex-col gap-10 lg:gap-20">
        <ScrollReveal>
          <ProjectHeader
            title="Greengascar"
            description="Greengascar est une application qui vous permet de calculer votre empreinte carbone à travers de petites questions sur vos activités quotidiennes. Le code source est detenu par Pulse et Bondy."
            live="https://greengascar.pulse.mg/"
            github=""
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectImg
            url="https://greengascar.pulse.mg/"
            img="/Greengascar/greengascar.png"
            alt="Capture d'écran de l'application Greengascar"
          />
        </ScrollReveal>

        <ScrollReveal>
          <Projetctech
            text={
              <>
                Greengascar a été développé avec <strong>Next.js</strong> pour
                le frontend et <strong>WordPress Headless</strong> pour le
                backend.
              </>
            }
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectChallenges
            challenges={[
              "Créer un questionnaire multipage, intuitif et engageant.",
              "Calculer l'empreinte carbone de manière précise.",
              "Présenter les résultats de manière claire et compréhensible.",
              "Sensibiliser les utilisateurs à l'impact de leurs actions.",
              "Proposer des alternatives pour réduire son empreinte carbone.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectFeatures
            features={[
              "Questionnaire sur les habitudes de vie.",
              "Calcul de l'empreinte carbone.",
              "Conseils pour réduire son impact environnemental.",
              "Interface ludique et éducative.",
              "Partage des résultats sur les réseaux sociaux.",
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ProjectGalerie
            images={[
              {
                url: "/Greengascar/screen_1.png",
                alt: "Capture d'écran de l'application Greengascar",
              },
              {
                url: "/Greengascar/screen_2.png",
                alt: "Capture d'écran de l'application Greengascar",
              },
              {
                url: "/Greengascar/screen_3.png",
                alt: "Capture d'écran de l'application Greengascar",
              },
              {
                url: "/Greengascar/screen_4.png",
                alt: "Capture d'écran de l'application Greengascar",
              },
              {
                url: "/Greengascar/screen_5.png",
                alt: "Capture d'écran de l'application Greengascar",
              },
              {
                url: "/Greengascar/screen_6.png",
                alt: "Capture d'écran de l'application Greengascar",
              },
            ]}
          />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default GreengascarPage;
