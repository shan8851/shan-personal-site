import { Link } from "react-router-dom";
import s from "./Nav.module.scss";

export const Nav = () => {
  const baseUrl = window.location.origin
  console.log(baseUrl)
  return (
    <div className={s.nav}>
      <div className={s.links}>
      <Link className={s.link} to="/">home</Link>
        <Link className={s.link} to="/now">/now</Link>
        <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/shan8851"
        >
          Twitter
        </a>
        <a
          className={s.link}
          href="https://www.linkedin.com/in/asamshan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className={s.link}
          href="https://github.com/shan8851"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a className={s.link} href="https://calendly.com/asamshan/30min">
          Connect!
        </a>
        <a
          className={s.link}
          href="https://cv.shan8851.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
        <a
          className={s.link}
          href="https://techleap.beehiiv.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Newsletter
        </a>

      </div>
    </div>
  );
};
