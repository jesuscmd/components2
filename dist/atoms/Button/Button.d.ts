import { default as React, ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    centre?: boolean;
    disabled?: boolean;
    iconButton?: boolean;
    transparent?: boolean;
}
/**
 * Button.
 */
declare const Button: React.ForwardRefExoticComponent<Partial<ButtonProps> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
