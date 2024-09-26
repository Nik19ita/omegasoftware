import { FC } from "react";
import TypeVarietyMenu from "../../../../type/TypeVarietyMenu";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderScan from "../HeaderScan/HeaderScan";
import styles from "./VarietyHeader.module.scss";

interface IVarietyHeader {
  varietyHeader: TypeVarietyMenu;
  content: string | null;
}

const VarietyHeader: FC<IVarietyHeader> = ({ varietyHeader, content }) => {
  const getVarietyHeader = () => {
    if (varietyHeader === "menu") {
      return <HeaderMenu content={content} />;
    }

    if (varietyHeader === "scan") {
      return <HeaderScan content={content} />;
    }
  };

  return (
    <div className={[styles.header, styles[varietyHeader]].join(" ")}>
      <img src="" alt="" />
      {getVarietyHeader()}
    </div>
  );
};

export default VarietyHeader;
