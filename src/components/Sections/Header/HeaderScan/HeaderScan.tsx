import { FC } from "react";

interface IHeaderMenu {
  content: string | null;
}

const HeaderMenu: FC<IHeaderMenu> = ({ content }) => {
  return (
    <>
      <img src="src/assets/img/close.svg" alt="" />
      {content}
    </>
  );
};

export default HeaderMenu;
