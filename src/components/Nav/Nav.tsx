import s from "./Nav.module.scss";

export const Nav = () => {
  return (
    <div className={s.nav}>
      <div className={s.links}>
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
        <a className={s.link} href="#projects">
          Projects
        </a>
        <a className={s.link} href="#contact">
          Contact
        </a>
        <a
          className={s.link}
          href="https://cv.shan8851.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </div>
    </div>
  );
};
