import s from "./Hero.module.scss";
import Avatar from "../../assets/punky.png";
import { Button } from "../Button/Button";

export const Hero = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.content}>
          <h1 className={s.largeText}>
            🚀 Hey there, <span className={s.altText}>I'm Shan!</span>
          </h1>
          <h3 className={s.text}>
            I'm a savvy software engineer with a passion for{" "}
            <span className={s.altText}>React</span> ,{" "}
            <span className={s.altText}>NextJS</span> and an ever-growing curiosity in{" "}
            <span className={s.altText}>Web3</span> technologies. Seeking new adventures in software contracting!
          </h3>
          <div className={s.buttonContainer}>
            <Button buttonText="Let's Connect" href="#contact" />
            <Button buttonText="Explore My work" secondary href="#projects" />
          </div>
        </div>
        <div className={s.imageContainer}>
          <img src={Avatar} alt="avatar" className={s.avatar} />
        </div>
      </div>
    </div>
  );
};
