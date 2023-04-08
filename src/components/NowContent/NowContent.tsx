import s from './NowContent.module.scss'

export const NowContent = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h2 className={s.title}>How I'm Focusing on Work, Life, and Balance Right Now</h2>
        <h4 className={s.headingLarge}>Work</h4>
        <p className={s.copy}>
         wasn't sure whether to categorize this as life or work, but I'd love for it to become work someday. I've recently launched a newsletter called <a href="https://techleap.beehiiv.com/">TechLeap</a>, aimed at helping new developers break into the industry and navigate their first few years.
        </p>
        <p className={s.copy}>
          The newsletter complements my mentoring work and is something I'm incredibly passionate about.
        </p>
        <p className={s.copy}>
          Collaborating with the fantastic team @UniWhales to build the top DeFi analytics feed!
        </p>
        <p className={s.copy}>
          Continuing to advise and work with Let's Eat!
        </p>
        <p className={s.copy}>Managing a small software company!</p>
        <h4 className={s.headingLarge}>Life</h4>
        <p className={s.copy}>
          Striving to be the best working dad I can be!
        </p>
        <p className={s.copy}>
          Constantly learning and working on new projects.
        </p>
        <p className={s.copy}>Daydreaming about becoming an Indie Maker!</p>
        <h4 className={s.headingLarge}>Balance</h4>
        <p className={s.copy}>
          🥋 BJJ
        </p>
        <p className={s.copy}>
          🥊 Muay Thai
        </p>
        <p className={s.copy}>♠️ Poker</p>
        <h4 className={s.headingSmall}>Get in touch</h4>
        <p className={s.copy}>
          Connect on <a
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/shan8851"
        >
          Twitter
        </a>
        </p>
        <p className={s.copy}>
          Book a <a
          className={s.link}
          href="https://calendly.com/asamshan/30min"
        >
          call
        </a>
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
