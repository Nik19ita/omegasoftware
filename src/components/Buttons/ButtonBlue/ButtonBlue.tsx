import { FC } from "react";
import styles from "./ButtonBlue.module.scss";

interface IButtonBlue {
  buttonText: string;
  disapled: boolean;
}

const ButtonBlue: FC<IButtonBlue> = ({ buttonText, disapled }) => {
  const classDisables = disapled ? styles.disabled : null;

  return (
    <button
      className={[styles.button, classDisables].join(" ")}
      disabled={disapled}
    >
      {buttonText}
    </button>
  );
};

export default ButtonBlue;
