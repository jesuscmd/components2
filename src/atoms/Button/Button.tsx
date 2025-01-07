import React, { ButtonHTMLAttributes } from "react";

import cx from "classnames";

export enum TypeButton {
  basic,
  primary,
  secondary,
  outlineBasic,
  outlinePrimary,
  outlineSecondary,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: TypeButton;
  centre?: boolean;
  disabled?: boolean;
  iconButton?: boolean;
  transparent?: boolean;
}

/**
 * Button.
 */
const Button = React.forwardRef<HTMLButtonElement, Partial<ButtonProps>>(
  function Button(props, ref) {
    const { className, disabled, transparent, typeButton, ...other } = props;

    return (
      <button
        className={cx(className)}
        aria-hidden
        ref={ref}
        disabled={disabled === true}
        {...other}
      >
        <p>s</p>
        {props.children}
      </button>
    );
  },
);

// Button.defaultProps = {};

export default Button;
