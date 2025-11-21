import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Heros from "../components/Heros/Heros";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

function Home() {
  return (
    <>
      <Heros />

      <Projects />

      <About />

      <Skills />

      <Contact />
    </>
  );
}

export default Home;
