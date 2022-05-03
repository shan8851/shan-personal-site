import { Button } from "../Button/Button";
import s from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div id="contact" className={s.container}>
      <div className={s.calendly}>
        <div>
          <h6 className={s.heading}>
            Let's <span className={s.altText}> Talk!</span>
          </h6>
          <p className={s.copy}>
            If you would prefer to jump on a video call instead of filling out
            the contact form then use the Calendly link below to schedule a 30
            minute chat with me. The call can of course be discussing your
            project needs and requirements - but doesn't have to be.
          </p>
          <p className={s.copy}>
            If you would like to speak about anything related to web3,
            blockchain or the development space in general then please follow
            the link below to schedule a call with me.
          </p>
        </div>
        <Button
          full
          secondary
          buttonText="Book a meeting on Calendly"
          href="https://calendly.com/asamshan/30min"
          newTab
        />
      </div>
      <p className={s.or}>- OR -</p>
      <form method="POST" name="contact" className={s.form}>
        <input type="hidden" name="form-name" value="contact" />
        <label className={s.formLabel}>Your name? </label>
        <input required className={s.formInput} name="name" type="text" />

        <label className={s.formLabel}>What do you want to talk about? </label>
        <input required className={s.formInput} name="what" type="text" />

        <label className={s.formLabel}>Your message </label>
        <textarea required className={s.formInput} name="message" rows={10} />

        <button className={s.button} type="submit">
          Send message
        </button>
      </form>
    </div>
  );
};
