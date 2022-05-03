import s from "./Button.module.scss";

interface ButtonProps {
  buttonText: string;
  href: string;
  secondary?: boolean;
  full?: boolean;
  newTab?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { newTab, full, href, secondary, buttonText } = props;
  if (newTab)
    return (
      <a
        style={full ? { width: "100%" } : { width: 165 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={secondary ? s.secondary : s.primary}
      >
        {buttonText}
      </a>
    );
  return (
    <a
      style={full ? { width: "100%" } : { width: 165 }}
      href={href}
      className={secondary ? s.secondary : s.primary}
    >
      {buttonText}
    </a>
  );
};
