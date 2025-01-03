import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import cx from 'classnames'
import {  DesertTheme, Theme } from '../../Theme/ui';

export enum TypeText {
    paragraph,
    label,
    title,
    subtitle,
    subtitle2,
    body,
    body2,
    foooter,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
}

interface TextProps extends HTMLProps<HTMLElement & HTMLParagraphElement & HTMLLabelElement> {
    // children: React.ReactNode;
    // className: string | undefined,
    theme: Theme,
    typeText: TypeText | TypeText.body,
    textAlign: "center" | "left" | "right" | "justify",
    bold: boolean,
    underline: boolean,
    labelFor: string,
    italic: boolean,
    vertical: boolean,
    style: any,    
    inline: boolean,
}

/**
 * Implementación simple de un texto.
 */
const Text = React.forwardRef<HTMLElement & HTMLParagraphElement & HTMLLabelElement, Partial<TextProps>>(function Text(props, ref) {
    const {
        className,
        theme,
        typeText,
        labelFor,
        inline = false,
        textAlign,
        bold = false,
        italic,
        ...other
    } = props;

    // Find the selected component   
    const selectType = (t?: TypeText) => {
        switch (t) {
            case TypeText.paragraph: return 'p'
            case TypeText.h1: return 'h1'
            case TypeText.h2: return 'h2'
            case TypeText.h3: return 'h3'
            case TypeText.h4: return 'h4'
            case TypeText.h5: return 'h5'
            case TypeText.h6: return 'h6'
            case TypeText.label: return 'label'
            case TypeText.title:
            case TypeText.subtitle:
            case TypeText.subtitle2:
            case TypeText.body:
            case TypeText.body2:
            case TypeText.foooter: return 'span'
            default: return 'span'
        }
    }

    const MainComponent = selectType(typeText);

    return (
        <MainComponent className={cx(
            className,
        )}

            htmlFor={labelFor && labelFor}
            ref={ref}
            {...other} >
        </MainComponent>
    );
})

Text.defaultProps = {

}

export default styled(Text).attrs(props => ({
    theme: props.theme.name != undefined ? props.theme : DesertTheme,
}))`

background-color: ${props => props.theme.background.transparent};
 font-family: ${props => props.theme.typography.fontFamily.toString()};
 font-size: ${props => {
        switch (props.typeText) {
            case TypeText.title: return props.theme.typography.elements.title;
            case TypeText.label: return props.theme.typography.elements.body1;
            case TypeText.subtitle: return props.theme.typography.elements.subtitle1;
            case TypeText.subtitle2: return props.theme.typography.elements.subtitle2;
            case TypeText.body: return props.theme.typography.elements.body1;
            case TypeText.body2: return props.theme.typography.elements.body2;
            case TypeText.foooter: return props.theme.typography.elements.footer;
            case TypeText.paragraph: return props.theme.typography.elements.body1;
            case TypeText.h1: return props.theme.typography.elements.h1;
            case TypeText.h2: return props.theme.typography.elements.h2;
            case TypeText.h3: return props.theme.typography.elements.h3;
            case TypeText.h4: return props.theme.typography.elements.h4;
            case TypeText.h5: return props.theme.typography.elements.h5;
            case TypeText.h6: return props.theme.typography.elements.h6;
            default: return props.theme.typography.elements.body1 || '12px';
        }
    }
    };
margin: 0;
display: ${props => props.inline ? 'inline-block' : 'block'};
color: ${props => props.theme.colorText.primary};
span: {
    display: 'initial',
};
text-align: ${props => props.textAlign};   
font-weight : ${props => props.bold == true ? 'bold' : props.bold == false ? 'initial' : 'inherit'};
text-decoration: ${props => props.underline ? 'underline' : 'initial'};
font-style: ${props => props.italic ? 'italic' : 'normal'};
`;
