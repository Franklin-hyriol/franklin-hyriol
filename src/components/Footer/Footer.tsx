import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center text-base-content rounded pt-10 pb-5">
      <div>
        <a className="text-2xl font-bold font-dancing-script" href="/">
          Franklin Hyriol
        </a>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/lobo.rakotomanana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/honey_honey2200/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary text-2xl"
          >
            <FaInstagram />
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
