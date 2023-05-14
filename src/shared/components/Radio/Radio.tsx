import { ChangeEventHandler } from "react";
import classnames from "classnames";
import styles from "./Radio.module.css";

type RadioProps = {
  children?: string;
  className?: string;
  name?: string;
  value?: string;
  defaultChecked?: boolean | undefined;
  disabled?: boolean;
  hidden?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Radio = ({
  children,
  className,
  name = "custom-radio",
  value,
  defaultChecked,
  disabled,
  hidden,
  onChange,
}: RadioProps) => {
  const radioClassName = classnames(styles._, className);

  const inputClassName = classnames(styles.input, {
    [styles.disabled]: !!disabled,
    [styles.hidden]: !!hidden,
  });

  return (
    <div className={radioClassName}>
      <label className={styles.label}>
        <input
          className={inputClassName}
          type="radio"
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          disabled={disabled}
          hidden={hidden}
          onChange={onChange}
        />
        {children && <span className={styles.text}>{children}</span>}
      </label>
    </div>
  );
};
