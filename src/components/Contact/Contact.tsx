import { Button } from "../Button/Button";
import s from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div id="contact" className={s.container}>
      <div className={s.calendly}>
        <div>
          <h6 className={s.heading}>
            Let's <span className={s.altText}> Connect!</span>
          </h6>
          <p className={s.copy}>
            Prefer a video chat over filling out the contact form? No problem! Use the Calendly link below to schedule a 30-minute conversation with me. We can discuss your project needs and requirements, or simply chat about anything related to web3, blockchain, or the development space in general.
          </p>
          <p className={s.copy}>
            Ready for a stimulating conversation? Just follow the link below to book a call with me. Let's explore the possibilities together!
          </p>
        </div>
        <Button
          full
          secondary
          buttonText="Schedule a Call on Calendly"
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
