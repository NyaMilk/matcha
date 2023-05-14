import { ChangeEventHandler } from "react";
import classnames from "classnames";
import styles from "./Select.module.css";
import { Checkbox, Radio } from "../components";

export enum SelectType {
  MULTIPLE = "multiple",
  SINGLE = "single",
}

type SelectProps = {
  className?: string;
  type?: SelectType;
  list: string | string[];
  name?: string;
  defaultChecked?: string | string[];
  hidden?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Select = ({
  className,
  type = SelectType.MULTIPLE,
  list,
  name,
  defaultChecked = [],
  hidden,
  onChange,
}: SelectProps) => {
  const dropdownListClassName = classnames(styles._, className);
  const Type = type === SelectType.SINGLE ? Radio : Checkbox;

  return (
    <div className={dropdownListClassName}>
      {Object.entries(list).map(([key, value]) => {
        const isChecked =
          type === SelectType.SINGLE
            ? defaultChecked === value
            : defaultChecked.includes(value);
        const defaultName =
          type === SelectType.SINGLE ? "customSingleSelect" : key;

        return (
          <Type
            key={key}
            className={styles.item}
            name={name ?? defaultName}
            value={key}
            defaultChecked={isChecked}
            hidden={hidden}
            onChange={onChange}
          >
            {value}
          </Type>
        );
      })}
    </div>
  );
};
