import s from "./About.module.scss";
import { tech } from "../../data/stack";

export const About = () => {
  return (
    <div className={s.container}>
      <div className={s.about}>
        <h4 className={s.heading}>Experienced Software Engineer</h4>
        <p className={s.copy}>
          💻 Engineer by day and blockchain hacker by night.
        </p>
        <p className={s.copy}>
          🤓 I've seen the future & am now busy building it with Web3, Solidity,
          and Javascript.
        </p>
        <p className={s.copy}>
          🧟 I love all things tech, enjoy meeting new people and working on
          interesting things.
        </p>
        <p className={s.copy}>
          🍺 If that sounds like your bag then book a call with me and let's
          collaborate.
        </p>
      </div>
      <div className={s.skills}>
        <h6 className={s.heading}>What I can help you with</h6>
        <div className={s.skillList}>
          <p className={s.skill}>Website Development</p>
          <p className={s.skill}>Project Management</p>
          <p className={s.skill}>Smart Contracts</p>
          <p className={s.skill}>dApp Development</p>
        </div>
        <div className={s.techStack}>
          <h6 className={s.heading}>Tech Stack</h6>
          <div className={s.stackList}>
            {tech.map((t) => (
              <div key={t.id} className={s.stackItem}>
                <img className={s.stackLogo} src={t.logo} alt="" />
                <p className={s.stackLabel}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
