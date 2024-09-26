import TypeVarietyMenu from "../type/TypeVarietyMenu";

const MenuContent = (varietyMenuProps: TypeVarietyMenu) => {
  let varietyMenu = null;

  switch (varietyMenuProps) {
    case "menu":
      varietyMenu = "menu";
      break;
    case "scan-vzn":
      varietyMenu = "scan-vzn";
      break;
    case "vzn-non-border":
      varietyMenu = "vzn-non-border";
      break;
  }

  return varietyMenu;
};

export default MenuContent;
