import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Heros from "../components/Heros/Heros";
import Overlay from "../components/Overlay/Overlay";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

function Home() {
  return (
    <>
      <Heros />

      <Overlay />

      <Projects />

      <About />

      <Skills />

      <Contact />
    </>
  );
}

export default Home;
