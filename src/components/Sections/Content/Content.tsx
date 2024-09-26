import { FC } from "react";
import styles from "./Content.module.scss";

interface IContentProps {
  children: React.ReactNode;
}

const Content: FC<IContentProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
