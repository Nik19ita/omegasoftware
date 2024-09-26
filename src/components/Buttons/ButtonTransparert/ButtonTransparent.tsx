import { FC } from "react";
import styles from "./ButtonTransparent.module.scss";

interface IButtonBlue {
  buttonText: string;
  onclick: () => void;
}

const ButtonTransparent: FC<IButtonBlue> = ({ buttonText, onclick }) => {
  return (
    <button className={styles.button} onClick={onclick}>
      {buttonText}
    </button>
  );
};

export default ButtonTransparent;
