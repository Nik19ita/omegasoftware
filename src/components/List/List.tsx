import { FC } from "react";
import typeData from "../../type/TypeData";
import MenuComponent from "../Common/MenuComponent/MenuComponent";

interface IList {
  data: typeData;
  listName: string;
}

const List: FC<IList> = ({ data, listName }) => {
  return (
    <>
      {data.map((el, index) => {
        return (
          <MenuComponent
            to={el.to}
            icon={el.icon}
            label={el.label}
            key={`${listName}${index}`}
          />
        );
      })}
    </>
  );
};

export default List;
