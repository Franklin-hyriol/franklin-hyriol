import ScrollReveal from "../ScrollReveal/ScrollReveal";

function Skills() {
  return (
    <section id="skills" className="pt-20 pb-20">
      <div className="main-container">
        <h2 className="text-center text-4xl font-semibold mb-10">
          Mes Compétences
        </h2>

        <div className="text-lg text-center w-[80%] mx-auto flex flex-col gap-5 mb-20">
          <p>
            Dans cette section, je vous présente un aperçu de mes{" "}
            <strong>compétences techniques (hard skills)</strong> et de mes{" "}
            <strong>qualités personnelles (soft skills)</strong> qui me
            permettent de transformer des idées en projets concrets. Entre
            lignes de code, gestion de projets et curiosité insatiable, voici ce
            qui fait que je peux relever des défis avec passion… et un petit
            sourire 😄.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center">
          <ScrollReveal from="left">
            <div className="mb-20 flex flex-col items-center">
              <h3 className="text-center text-2xl font-semibold mb-10">
                soft skills
              </h3>
              <ul className="list-disc">
                <li>
                  <strong>Communication :</strong> efficace à tous les niveaux
                  hiérarchiques
                </li>
                <li>
                  <strong>Gestion du stress :</strong> reste calme et productif
                  en toutes circonstances
                </li>
                <li>
                  <strong>Autonomie & Curiosité :</strong> capable de prendre
                  des initiatives et d’apprendre par moi-même
                </li>
                <li>
                  <strong>Passion & Engagement :</strong> motivé et impliqué
                  dans tout projet que j’entreprends
                </li>
                <li>
                  <strong>Langues :</strong> français courant, anglais compris
                  (en progression pour discussions approfondies)
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal from="right" delay={0.5}>
            <div>
              <h3 className="text-center text-2xl font-semibold mb-10">
                Hard skills
              </h3>
              <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-full mx-auto">
                <table className="table table-zebra table-md">
                  {/* head */}
                  <thead className="text-base-content">
                    <tr>
                      <th>Compétence</th>
                      <th>Détails / Technologies</th>
                      <th>Exemples / Projets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>Intégration Web</td>
                      <td>
                        <ul className="list-disc">
                          <li>
                            Maquettes{" "}
                            <strong>
                              Figma / Photoshop → HTML / CSS,SCSS / JS
                            </strong>
                          </li>
                          <li>
                            Sites{" "}
                            <strong>
                              responsive & composants réutilisables
                            </strong>
                          </li>
                          <li>
                            Intégration WordPress (
                            <strong>ACF, Elementor</strong>),{" "}
                            <strong>Prestashop</strong>,{" "}
                            <strong>Symfony</strong>,{" "}
                            <strong>Laravel</strong>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul className="list-disc">
                          <li>
                            <a
                              href="https://www.harpo-paris.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link link-primary"
                            >
                              Harpo-Paris,
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.ravinala-airports.aero/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link link-primary"
                            >
                              Ravinala Aeroport,
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://infostatsante.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link link-primary"
                            >
                              Infostat,
                            </a>
                          </li>
                          <li>...etc</li>
                        </ul>
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>Front-end React / Next.js</td>
                      <td>
                        <ul className="list-disc">
                          <li>
                            Sites <strong>dynamiques & interactifs</strong>
                          </li>
                          <li>
                            <strong>API</strong>, <strong>TypeScript</strong>,{" "}
                            <strong>React Hook Form</strong>,{" "}
                            <strong>Zod</strong>, <strong>Zustand</strong> ...
                          </li>
                          <li>Optimisation SEO</li>
                        </ul>
                      </td>
                      <td>
                        <ul className="list-disc">
                          <li>
                            <a
                              href="https://plottracking.bondy.earth/?token=8ed3573623ac44cf6ef44c9adc307e9f"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link link-primary"
                            >
                              PlotTracking by Bondy,
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.intervaltimer.fun/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link link-primary"
                            >
                              Interval Timer,
                            </a>
                          </li>
                          <li>...etc</li>
                        </ul>
                      </td>
                    </tr>
                    {/* row 3 */}

                    <tr>
                      <td>Fullstack (MERN)</td>
                      <td>
                        <ul className="list-disc">
                          <li>
                            Backend : <strong>Express.js</strong> /{" "}
                            <strong>Node.js</strong>
                          </li>
                          <li>
                            Bases de données : <strong>MongoDB</strong> /{" "}
                            <strong>PostgreSQL</strong>
                          </li>
                          <li>
                            Frontend : <strong>React</strong> /{" "}
                            <strong>Next.js</strong>
                          </li>
                          <li>
                            Gestion complète de projets de{" "}
                            <strong>bout en bout</strong>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul className="list-disc">
                          <li>
                            <a
                              href="https://pray.up.railway.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link link-primary"
                            >
                              Pray Together,
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.eyechallenge.fun/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link link-primary"
                            >
                              Eye Challenge
                            </a>
                          </li>
                          <li>...etc</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Skills;
