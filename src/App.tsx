import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Heros from "./components/Heros/Heros";
import Navbar from "./components/Navbar/Navbar";
import Overlay from "./components/Overlay/Overlay";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />

      <Heros />

      <Overlay />

      <Projects />

      <About />

      <Skills />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
