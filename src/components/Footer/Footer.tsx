import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center text-base-content rounded pt-10 pb-5">
      <div>
        <Link className="text-2xl font-bold font-dancing-script" to="/">
          Franklin Hyriol
        </Link>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            className="p-2"
            href="https://mg.linkedin.com/in/franklin-hyriol-razafinandrasana-4b9a71217"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            className="p-2"
            href="https://www.facebook.com/franklin.hyriol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-3xl" />
          </a>
          <a
            className="p-2"
            href="https://github.com/Franklin-hyriol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </nav>
      <aside>
        <p className="sm:order-3 order-3">
          Designed & developed with ❤ by{" "}
          <a
            href="https://www.linkedin.com/in/franklin-hyriol-razafinandrasana-4b9a71217/"
            className="hover:text-base-content underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Franklin Hyriol
          </a>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
