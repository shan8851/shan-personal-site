import s from "./Hero.module.scss";
import Avatar from "../../assets/punky.png";
import { Button } from "../Button/Button";

export const Hero = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.content}>
          <h1 className={s.largeText}>
            👋 I'm <span className={s.altText}>Shan</span>
          </h1>
          <h3 className={s.text}>
            I'm a software engineer specialising in{" "}
            <span className={s.altText}>React</span> and{" "}
            <span className={s.altText}>Next</span> with a keen interest in{" "}
            <span className={s.altText}>Web3</span> technologies.
          </h3>
          <h3 className={s.text}>I'm available for freelance work now!</h3>
          <div className={s.buttonContainer}>
            <Button buttonText="Let's talk" href="#contact" />
            <Button buttonText="See my work" secondary href="#projects" />
          </div>
        </div>
        <div className={s.imageContainer}>
          <img src={Avatar} alt="avatar" className={s.avatar} />
        </div>
      </div>
    </div>
  );
};
