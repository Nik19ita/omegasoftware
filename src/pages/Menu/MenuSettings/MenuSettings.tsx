import { useLocation } from "react-router-dom";
import List from "../../../components/List/List";
import Content from "../../../components/Sections/Content/Content";
import data from "../MenuSettings/Copyright";

const MenuPages = () => {
  const location = useLocation();
  return (
    <Content>
      <List data={data} listName={`${location.key}`} />
    </Content>
  );
};

export default MenuPages;
