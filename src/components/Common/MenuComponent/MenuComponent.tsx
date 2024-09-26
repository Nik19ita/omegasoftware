import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./MenuComponent.module.scss";

interface IMenuComponentProps {
  icon?: string;
  label: string;
  to: string;
}

const MenuComponent: FC<IMenuComponentProps> = ({ icon, label, to }) => {
  return (
    <Link
      to={to}
      className={styles.component}
      onClick={(e) => to === "#" && e.preventDefault()}
    >
      {icon && <img src={icon} alt="картинка" className={styles.icon} />}
      <span className={styles.label}>{label}</span>
    </Link>
  );
};

export default MenuComponent;
