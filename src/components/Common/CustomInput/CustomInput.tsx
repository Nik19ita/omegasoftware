import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import {
  TypeInputsScanRegister,
  TypeInputsScanType,
} from "../../../type/TypeInputsScan";
import styles from "./CustomInput.module.scss";

interface ICustomInput {
  labelText: string;
  type: TypeInputsScanType;
  register: UseFormRegister<TypeInputsScanRegister>;
}

const CustomInput: FC<ICustomInput> = ({ labelText, register, type }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={labelText} className={styles.label}>
        {labelText}
      </label>
      <input
        type="text"
        id={labelText}
        className={styles.input}
        {...register(type)}
      />
    </div>
  );
};

export default CustomInput;
