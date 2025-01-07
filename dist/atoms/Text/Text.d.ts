import { default as React, HTMLProps } from 'react';
import { Theme } from '../../Theme/ui';
export declare enum TypeText {
    paragraph = 0,
    label = 1,
    title = 2,
    subtitle = 3,
    subtitle2 = 4,
    body = 5,
    body2 = 6,
    foooter = 7,
    h1 = 8,
    h2 = 9,
    h3 = 10,
    h4 = 11,
    h5 = 12,
    h6 = 13
}
interface TextProps extends HTMLProps<HTMLElement & HTMLParagraphElement & HTMLLabelElement> {
    theme: Theme;
    typeText: TypeText | TypeText.body;
    textAlign: "center" | "left" | "right" | "justify";
    bold: boolean;
    underline: boolean;
    labelFor: string;
    italic: boolean;
    vertical: boolean;
    style?: any;
    inline: boolean;
}
declare const _default: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('styled-components').FastOmit<import('styled-components/dist/types').Substitute<Omit<Partial<TextProps>, "ref"> & React.RefAttributes<HTMLElement & HTMLParagraphElement & HTMLLabelElement>, Omit<Partial<TextProps>, "ref"> & React.RefAttributes<HTMLElement & HTMLParagraphElement & HTMLLabelElement>>, never>, never>> & string & Omit<React.ForwardRefExoticComponent<Omit<Partial<TextProps>, "ref"> & React.RefAttributes<HTMLElement & HTMLParagraphElement & HTMLLabelElement>>, keyof React.Component<any, {}, any>>;
export default _default;
