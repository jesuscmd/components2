import React, { ButtonHTMLAttributes } from "react";

import cx from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
    const { className, disabled, transparent, ...other } = props;

    return (
      <button
        className={cx(className)}
        aria-hidden
        ref={ref}
        disabled={disabled === true}
        {...other}
      >
        a
      </button>
    );
  },
);

// Button.defaultProps = {};

export default Button;
