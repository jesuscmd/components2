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
    typeButton: TypeButton;
    centre: boolean;
    disabled: boolean;
    iconButton: boolean;
    transparent: boolean;
}
declare const _default: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<Partial<ButtonProps> & React.RefAttributes<HTMLButtonElement>, never>> & string & Omit<React.ForwardRefExoticComponent<Partial<ButtonProps> & React.RefAttributes<HTMLButtonElement>>, keyof React.Component<any, {}, any>>;
export default _default;
