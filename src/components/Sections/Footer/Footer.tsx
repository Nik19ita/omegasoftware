/// <reference types="vite-plugin-svgr/client" />
import { Link, useLocation, useNavigate } from "react-router-dom";
import ArrowBack from "../../../assets/img/arrow-back.svg?react";
import MenuSVG from "../../../assets/img/menu.svg?react";
import ScanSVG from "../../../assets/img/scan.svg?react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    if (location.pathname === "/menu/main") return;
    navigate(-1);
  };

  return (
    <section className={styles.footer}>
      <Link to="/menu/main" className={styles.link}>
        <MenuSVG />
        <span className={styles.span}>Меню</span>
        <img src="../../../assets/img/scan.svg?react" alt="asfasf" />
      </Link>

      <Link to="/scan" className={styles.link}>
        <ScanSVG />
        <span className={styles.span}>Сканер</span>
      </Link>

      <button className={styles.button} onClick={goBack}>
        <ArrowBack />
        <span className={styles.span}>Назад</span>
      </button>
    </section>
  );
};

export default Footer;
