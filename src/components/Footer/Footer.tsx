import s from "./Footer.module.scss";
import {
  FaHeart,
  FaCoffee,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.built}>
        <p>
          Built with <FaHeart className={s.altColor} /> and{" "}
          <FaCoffee className={s.altColor} /> by{" "}
          <span className={s.altText}>Shan8851</span>
        </p>
      </div>
      <div className={s.links}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/shan8851"
        >
          <FaTwitter className={s.icon} />
        </a>
        <a
          href="https://github.com/shan8851"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={s.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/asamshan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className={s.icon} />
        </a>
      </div>
    </footer>
  );
};
