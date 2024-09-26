/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import TypeVarietyMenu from "../../../../type/TypeVarietyMenu.ts";
import VarietyHeader from "../VarietyHeader/VarietyHeader.tsx";
import data from "./Copyright.ts";

const Header = () => {
  const location = useLocation();

  const varietyHeader = location.pathname.split("/")[1] as TypeVarietyMenu;
  const copyrightHeader = location.pathname.split("/")[1] as "menu" | "scan";
  const contentHeader = location.pathname.split("/")[2] as
    | "main"
    | "settings"
    | "tasks"
    | "accounting";

  const contantData = () => {
    if (copyrightHeader === "menu") {
      return data[copyrightHeader][contentHeader] as string;
    }

    if (copyrightHeader === "scan") {
      return data[copyrightHeader] as string;
    }

    return null;
  };

  return (
    <VarietyHeader varietyHeader={varietyHeader} content={contantData()} />
  );
};

export default Header;
