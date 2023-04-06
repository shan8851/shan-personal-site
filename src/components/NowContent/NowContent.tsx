import { HashLink } from 'react-router-hash-link';
import s from './NowContent.module.scss'

export const NowContent = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h2 className={s.title}>What I am up to</h2>
        <h4 className={s.headingLarge}>Work</h4>
        <p className={s.copy}>
          I wasn't sure where to put this, could be life or work, but I would like it to become work one day. I have recently decided to launch a newsletter called <a href="https://techleaphq.com">TechLeap</a> which is aimed at helping new developers break into the industry and navigate their first few years.
        </p>
        <p className={s.copy}>
          The newsletter will go alongside my mentoring work and is something I am super passionate about.
        </p>
        <p className={s.copy}>
          Building out the number 1 DeFi analytics feed with the great team @UniWhales!
        </p>
        <p className={s.copy}>
          Still advising and working with Let's Eat!
        </p>
        <p className={s.copy}>Running a small software company!</p>
        <h4 className={s.headingLarge}>Life</h4>
        <p className={s.copy}>
          Being the best working Dad I can be!
        </p>
        <p className={s.copy}>
          Always learning and working on something new.
        </p>
        <p className={s.copy}>Daydreaming about being an Indie Maker!</p>
        <h4 className={s.headingLarge}>Balance</h4>
        <p className={s.copy}>
          🥋 BJJ
        </p>
        <p className={s.copy}>
          🥊 Muay Thai
        </p>
        <p className={s.copy}>♠️ Poker</p>
        <h4 className={s.headingSmall}>Hit me up</h4>
        <p className={s.copy}>
          Reach out on <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/shan8851"
        >
          Twitter
        </a>
        </p>
        <p className={s.copy}>
          Book a <HashLink
          className={s.link}
          to="/#contact"
        >
          call
        </HashLink>
        </p>
        <h4 className={s.headingSmall}>Page last updated</h4>
        <p className={s.copy}>
          April 2023
        </p>
        <h4 className={s.headingSmall}>This page inspired by</h4>
        <p className={s.copy}>
          The <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://sive.rs/nowff"
        >
          /now movement
        </a> by <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/sivers"
        >
          @Sivers
        </a>
        </p>
      </div>
    </div>
  )
}
