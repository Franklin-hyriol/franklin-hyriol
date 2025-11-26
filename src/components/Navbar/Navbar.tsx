import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { useLenis } from "../../context/LenisContext";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();
  const lenis = useLenis();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    const hash = path.substring(path.indexOf("#"));

    if (location.pathname !== "/") {
      navigate("/");
    }

    const desktopBreakpoint = 768; // Tailwind's 'md' breakpoint by default
    const desktopOffset = -80; // Offset for desktop sticky navbar
    const mobileOffset = -60;  // Offset for mobile sticky navbar, adjust as needed

    const offset = windowWidth >= desktopBreakpoint ? desktopOffset : mobileOffset;


    setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(hash, { offset: offset });
      } else {
        // Fallback for when lenis is not available
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          const y = targetElement.getBoundingClientRect().top + window.scrollY + offset; // Apply offset here
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 100); // Delay to allow page transition

    closeMenu();
  };


  const navLinks = (
    <>
      <li>
        <a className="hover:text-primary hover:underline" href="/#home" onClick={(e) => handleNavClick(e, "/#home")}>
          Accueil
        </a>
      </li>
      <li>
        <a className="hover:text-primary hover:underline" href="/#projects" onClick={(e) => handleNavClick(e, "/#projects")}>
          Projets
        </a>
      </li>
      <li>
        <a className="hover:text-primary hover:underline" href="/#about" onClick={(e) => handleNavClick(e, "/#about")}>
          À propos
        </a>
      </li>
      <li>
        <a className="hover:text-primary hover:underline" href="/#skills" onClick={(e) => handleNavClick(e, "/#skills")}>
          Compétences
        </a>
      </li>
      <li>
        <a className="hover:text-primary hover:underline" href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
          Contact
        </a>
      </li>
    </>
  );

  return (
    <>
      <header className="bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar main-container">
          <div className="navbar-start">
            <Link className="text-2xl font-bold font-dancing-script hover:text-primary" to="/">
              Franklin Hyriol
            </Link>
          </div>

          <nav className="navbar-center hidden md:flex">
            <ul className="flex gap-5 p-4 text-base font-medium">{navLinks}</ul>
          </nav>

          <div className="navbar-end flex items-center gap-4">
            <ToggleTheme />
            <div className="md:hidden">
              <button onClick={toggleMenu} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu}></div>}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-base-100 w-72 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 pl-5 border-b border-base-300">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={closeMenu} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav>
          <ul className="flex flex-col gap-5 p-4 pl-5 text-base font-medium">{navLinks}</ul>
        </nav>

        <div className="flex items-center gap-4 absolute bottom-8 left-5">
          <a className="p-2" href="https://mg.linkedin.com/in/franklin-hyriol-razafinandrasana-4b9a71217" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl" />
          </a>
          <a className="p-2" href="https://www.facebook.com/franklin.hyriol/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-3xl" />
          </a>
          <a className="p-2" href="https://github.com/Franklin-hyriol" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
