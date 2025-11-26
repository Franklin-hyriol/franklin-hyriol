import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Heros from "../components/Heros/Heros";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

function Home() {
  return (
    <>
      <Heros />

      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}

export default Home;
