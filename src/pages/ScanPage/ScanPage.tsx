import { useForm } from "react-hook-form";
import ButtonBlue from "../../components/Buttons/ButtonBlue/ButtonBlue.tsx";
import ButtonTransparent from "../../components/Buttons/ButtonTransparert/ButtonTransparent.tsx";
import CustomInput from "../../components/Common/CustomInput/CustomInput";
import Content from "../../components/Sections/Content/Content";
import { TypeInputsScanRegister } from "../../type/TypeInputsScan.ts";
import data from "./Copyright.ts";
import styles from "./ScanPage.module.scss";

const ScanPage = () => {
  const { register, watch, reset } = useForm<TypeInputsScanRegister>({
    defaultValues: {
      number_object: "",
      type_object_BO: "",
    },
  });

  const isDisabled =
    watch("number_object") === "" && watch("type_object_BO") === "";

  return (
    <Content>
      <div className={styles.wraper}>
        <p className={styles.paragraf}>{data.paragraf}</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <CustomInput
            labelText={data.input_1.label}
            register={register}
            type="number_object"
          />
          <CustomInput
            labelText={data.input_2.label}
            register={register}
            type="type_object_BO"
          />

          <div className={styles.buttons_wrapper}>
            <ButtonBlue buttonText="Перейти" disapled={isDisabled} />
            <ButtonTransparent buttonText="Отмена" onclick={() => reset()} />
          </div>
        </form>
      </div>
    </Content>
  );
};

export default ScanPage;
