import { FC } from "react";

interface IHeaderMenu {
  content: string | null;
}

const HeaderMenu: FC<IHeaderMenu> = ({ content }) => {
  return <>{content}</>;
};

export default HeaderMenu;
