import { ChangeEventHandler } from "react";
import classnames from "classnames";
import styles from "./Checkbox.module.css";
import { Icon, IconsName } from "../Icon/Icon";

type CheckboxProps = {
  children?: string;
  className?: string;
  name: string;
  defaultChecked?: boolean | undefined;
  disabled?: boolean;
  hidden?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Checkbox = ({
  children,
  className,
  name,
  defaultChecked,
  disabled,
  hidden,
  onChange,
}: CheckboxProps) => {
  const checkboxClassName = classnames(styles._, className);

  const inputClassName = classnames(styles.input, {
    [styles.disabled]: !!disabled,
    [styles.hidden]: !!hidden,
  });

  return (
    <div className={checkboxClassName}>
      <label className={styles.label}>
        <input
          className={inputClassName}
          type="checkbox"
          name={name}
          defaultChecked={defaultChecked}
          value={children}
          disabled={disabled}
          hidden={hidden}
          onChange={onChange}
        />
        {!hidden && <Icon name={IconsName.DONE} className={styles.icon} />}
        {children && <span className={styles.text}>{children}</span>}
      </label>
    </div>
  );
};
