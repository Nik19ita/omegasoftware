/* eslint-disable @typescript-eslint/no-require-imports */
import { useLocation } from "react-router-dom";
import List from "../../../components/List/List";
import Content from "../../../components/Sections/Content/Content";
import data from "../MenuMain/Copyright";

const MenuPages = () => {
  const location = useLocation();
  return (
    <Content>
      <List data={data} listName={`${location.key}`} />
      <img src={require(`../../../assets/img/close.svg`)} alt="sdg" />
    </Content>
  );
};

export default MenuPages;
