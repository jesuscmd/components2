import { default as React, ButtonHTMLAttributes } from 'react';
export declare enum TypeButton {
    basic = 0,
    primary = 1,
    secondary = 2,
    outlineBasic = 3,
    outlinePrimary = 4,
    outlineSecondary = 5
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
declare const Button: React.ForwardRefExoticComponent<Partial<ButtonProps> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
