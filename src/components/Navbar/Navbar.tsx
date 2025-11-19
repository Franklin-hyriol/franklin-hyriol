import ToggleTheme from "../ToggleTheme/ToggleTheme";

function Navbar() {
  return (
    <header className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar main-container">
        <div className="navbar-start">
          <a className="text-2xl font-bold font-dancing-script" href="/">
            Franklin Hyriol
          </a>
        </div>

        <nav className="navbar-center">
          <ul className="flex gap-5 text-base font-medium">
            <li>
              <a href="#home">Accueil</a>
            </li>
            <li>
              <a href="#projects">Projets</a>
            </li>
            <li>
              <a href="#about">À propos</a>
            </li>
            <li>
              <a href="#skills">Compétences</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="navbar-end">
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
