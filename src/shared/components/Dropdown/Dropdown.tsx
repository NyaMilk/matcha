import React, { ChangeEventHandler } from "react";
import classnames from "classnames";
import styles from "./Dropdown.module.css";
import { Icon, IconsName, Select, SelectType } from "../components";

type DropdownProps = {
  className?: string;
  label?: string;
  value?: string;
  type?: SelectType;
  name?: string;
  list: string | string[];
  defaultChecked?: string | string[];
  activated?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
};

export const Dropdown = ({
  className,
  label,
  value,
  type,
  name,
  list,
  defaultChecked,
  activated,
  disabled,
  hidden,
  onChange,
  onClick,
}: DropdownProps) => {
  const dropdownClassName = classnames(styles._, className, {
    [styles.disabled]: !!disabled,
  });

  return (
    <div>
      <div className={dropdownClassName}>
        {/*todo change on custom input*/}
        <input
          className={styles.input}
          // label={label}
          type="button"
          value={value}
          disabled={disabled}
          // onClick={onClick}
        />
        {!disabled && (
          // todo add icon arrow
          <Icon
            name={IconsName.HEART}
            className={styles.icon}
            onClick={onClick}
          />
        )}
        {activated && (
          <Select
            className={styles.modal}
            type={type}
            list={list}
            name={name}
            defaultChecked={defaultChecked}
            hidden={hidden}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
};
