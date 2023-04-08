import s from "./About.module.scss";
import { tech } from "../../data/stack";

export const About = () => {
  return (
    <div className={s.container}>
      <div className={s.about}>
        <h4 className={s.heading}>Versatile Software Engineer</h4>
        <p className={s.copy}>
          🌟 Versatile full-stack engineer known for crafting scalable, cloud-first web and mobile applications with precision and flair.
        </p>
        <p className={s.copy}>
          🚀 I've glimpsed the future and I'm now eagerly constructing it using Web3, Solidity, and JavaScript.
        </p>
        <p className={s.copy}>
         🌐 Passionate about all things tech, I thrive on meeting new people and collaborating on intriguing projects.
        </p>
        <p className={s.copy}>
          🥂 If that resonates with you, let's book a call and start creating something amazing together.
        </p>
      </div>
      <div className={s.skills}>
        <h6 className={s.heading}>What I can help you with</h6>
        <div className={s.skillList}>
          <p className={s.skill}>Full Stack Development</p>
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
