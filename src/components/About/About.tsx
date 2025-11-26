import ScrollReveal from "../ScrollReveal/ScrollReveal";

function About() {
  return (
    <section id="about" className="pt-20 pb-20">
      <div className="main-container">
        <h2 className="text-center text-4xl font-semibold mb-10">
          A propos de moi
        </h2>

        <div className="text-lg text-center w-[80%] mx-auto flex flex-col gap-5 mb-20">
          <p>
            Vous savez quoi ? J’ai envie de dire : vous n’avez qu’à chercher
            <strong> Franklin Hyriol</strong> sur{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
              href="https://www.google.com/search?q=Franklin+Hyriol&oq=Franklin+Hyriol&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBCDEzNTFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
            >
              Google
            </a>{" "}
            si vous ne me connaissez pas 😄.
          </p>

          <p>
            Je vais quand même vous donner quelques infos au cas où vous
            n’auriez pas envie de le faire : Je m’appelle{" "}
            <strong>RAZAFINANDRASANA Franklin Hyriol</strong>, je viens de
            Madagascar, j’ai 28 ans, bientôt 29… euh… quoi d’autre 🤔 ? Ah oui :
            je passe une bonne partie de mon temps à regarder des tutos et des
            vidéos sur YouTube.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-center text-2xl font-semibold mb-10">
            Experiences
          </h3>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {/* Item 1 */}
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <ScrollReveal from="left">
                  <time className="font-mono italic">Oct 2020 - Oct 2022</time>
                  <div className="text-lg font-black">
                    Knowledge Analyst |{" "}
                    <a
                      href="https://www.pulse.mg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e53520]"
                    >
                      Pulse
                    </a>
                  </div>
                  <p>
                    <strong>Knowledge Analyst</strong> a été mon premier poste
                    après mes études, au sein de{" "}
                    <a
                      target="_blank"
                      className="link link-primary"
                      rel="noopener noreferrer"
                      href="https://sayna.io/"
                    >
                      Sayna
                    </a>
                    . Dans le cadre du projet Pulse, dont l’objectif était de{" "}
                    <strong>centraliser</strong> l’ensemble des connaissances
                    produites sur une plateforme unique appelée{" "}
                    <strong>Knowledge Base</strong> (KB), j’étais en charge de :
                  </p>
                  <ul className="list-disc list-inside">
                    <li>qualifier et structurer les contenus,</li>
                    <li>administrer et maintenir la plateforme,</li>
                    <li>
                      alimenter et mettre à jour la base de données de
                      connaissances.
                    </li>
                  </ul>
                </ScrollReveal>
              </div>
              <hr />
            </li>

            {/* Item 2 */}
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10">
                <ScrollReveal from="right" delay={0.5}>
                  <time className="font-mono italic">
                    Oct 2022 - Nos jours
                  </time>
                  <div className="text-lg font-black">
                    Intégrateur / Développeur Front-End |{" "}
                    <a
                      href="https://www.pulse.mg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e53520]"
                    >
                      Pulse
                    </a>
                  </div>
                  <p>
                    Toujours au sein de Pulse, après la finalisation du projet
                    Knowledge Base, j’ai évolué vers un poste{" "}
                    <strong>d’intégrateur WordPress / Elementor.</strong>{" "}
                    Parallèlement, mes compétences en
                    <strong> développement front-end</strong>, notamment en
                    React, m’ont permis d’intervenir sur plusieurs projets en
                    React.js et de collaborer étroitement avec l’équipe DevOps.
                  </p>
                </ScrollReveal>
              </div>
              <hr />
            </li>

            {/* Item 3 */}
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <ScrollReveal from="left" delay={0.75}>
                  <time className="font-mono italic">futur</time>
                  <div className="text-lg font-black">
                    Developpeur Fullstack (MERN)
                  </div>
                  <p className="mb-4">
                    Je n’ai pas encore occupé officiellement un poste de
                    <strong> développeur fullstack</strong> en entreprise, mais
                    j’ai travaillé sur la partie back-end et front-end dans le
                    cadre de mes stages et de mes formations.
                  </p>
                  <p className="mb-4">
                    Surtout, j’ai développé plusieurs{" "}
                    <strong>projets fullstack en autonomie</strong>, déjà en
                    ligne et utilisés par de vrais utilisateurs. Ces projets
                    m’ont permis de gérer l’ensemble de la chaîne : conception,
                    base de données, API, interface utilisateur, déploiement et
                    maintenance.
                  </p>
                  <p>
                    Aujourd’hui, même si mon expérience “officielle” est plutôt
                    orientée <strong>front-end / intégration</strong>, je suis
                    tout à fait à l’aise sur un poste fullstack et habitué à
                    prendre en charge un projet de bout en bout.
                  </p>
                </ScrollReveal>
              </div>
              <hr />
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-center text-2xl font-semibold mb-10">
            Parcours scolaire
          </h3>

          <div className="flex flex-col gap-4 text-center w-[80%] justify-center mx-auto">
            <p>
              Mon parcours scolaire a été, disons, <strong>sinueux</strong>,
              mais chaque étape m’a construit. Après mon{" "}
              <strong>baccalauréat</strong>, j’ai été admis à la{" "}
              <strong>Faculté des Sciences</strong> de l’Université d’Ankatso,
              au département de
              <strong> Mathématiques</strong>, de 2017 à 2019.
            </p>

            <p>
              En <strong>troisième année</strong>, la vie et la crise du{" "}
              <strong>Covid-19</strong> m’ont confronté à une réalité difficile
              : j’avais besoin <strong>d’argent</strong>. J’ai alors essayé de{" "}
              <strong>travailler tout en étudiant</strong>, mais la charge était
              trop lourde, et j’ai dû interrompre mes études.
            </p>

            <p>
              À la fin de 2019, j’ai découvert ma véritable{" "}
              <strong>passion</strong> : je me suis inscrit à{" "}
              <strong>
                l’école digitale{" "}
                <a
                  target="_blank"
                  className="link link-primary"
                  rel="noopener noreferrer"
                  href="https://sayna.io/"
                >
                  Sayna
                </a>
              </strong>
              , où j’ai appris les{" "}
              <strong>bases du développement web moderne</strong> et plongé dans
              le monde fascinant de la <strong>programmation</strong>. Cette
              formation m’a ouvert une opportunité incroyable : être{" "}
              <strong>
                recruté par{" "}
                <a
                  href="https://www.pulse.mg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e53520]"
                >
                  Pulse
                </a>
              </strong>
              .
            </p>

            <p>
              Aujourd’hui, je suis prêt à relever de nouveaux{" "}
              <strong>défis</strong>, fort de mes expériences en{" "}
              <strong>
                fullstack, front-end, intégration et projets personnels
              </strong>
              , et motivé par ma soif d’apprendre et de créer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
