import React, { ButtonHTMLAttributes } from "react";

import cx from "classnames";
import styled from "styled-components";

import { common, Theme } from "../../Theme/ui";

export enum TypeButton {
  basic,
  primary,
  secondary,
  outlineBasic,
  outlinePrimary,
  outlineSecondary,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton: TypeButton;
  centre: boolean;
  disabled: boolean;
  iconButton: boolean;
  transparent: boolean;
  theme: Theme;
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
        {props.children}
      </button>
    );
  },
);

// Button.defaultProps = {};

export default styled(Button)`
background: ${(props) =>
  props.transparent === true
    ? props.theme.background.transparent
    : (props) => {
        switch (props.typeButton) {
          case TypeButton.basic:
            return props.theme.palette.basic.main;
          case TypeButton.primary:
            return props.theme.palette.primary.main;
          case TypeButton.secondary:
            return props.theme.palette.secondary.main;

          case TypeButton.outlineBasic:
            return props.theme.background.paper;
          case TypeButton.outlinePrimary:
            return props.theme.background.paper;
          case TypeButton.outlineSecondary:
            return props.theme.background.paper;
          default:
            return props.theme.palette.primary.main;
        }
      }} !important; };
color:  ${(props) => {
  switch (props.typeButton) {
    case TypeButton.basic:
      return common.white;
    case TypeButton.primary:
      return common.white;
    case TypeButton.secondary:
      return common.white;

    case TypeButton.outlineBasic:
      return props.theme.palette.basic.main;
    case TypeButton.outlinePrimary:
      return props.theme.palette.primary.main;
    case TypeButton.outlineSecondary:
      return props.theme.palette.secondary.main;
    default:
      return common.white;
  }
}};
border: solid 1px ${(props) => {
  switch (props.typeButton) {
    case TypeButton.basic:
      return props.theme.palette.basic.light;
    case TypeButton.primary:
      return props.theme.palette.primary.light;
    case TypeButton.secondary:
      return props.theme.palette.secondary.light;

    case TypeButton.outlineBasic:
      return props.theme.palette.basic.light;
    case TypeButton.outlinePrimary:
      return props.theme.palette.primary.light;
    case TypeButton.outlineSecondary:
      return props.theme.palette.secondary.light;
    default:
      return props.theme.palette.primary.light;
  }
}} !important;
border-radius: 4px;
box-shadow: none !important;
margin: 0px;
font-size: ${(props) => props.theme.typography.elements.body1};

-webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
padding: .84rem 1rem;

-webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
-o-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
margin: .375rem;
border: 0;
-webkit-border-radius: .125rem;
border-radius: .125rem;
cursor: pointer;
text-transform: uppercase;
white-space: normal;
word-wrap: break-word;

& svg {
  display: flex;
}

&:disabled {  
  background: ${(props) => {
    switch (props.typeButton) {
      case TypeButton.basic:
        return props.theme.palette.basic.light;
      case TypeButton.primary:
        return props.theme.palette.primary.light;
      case TypeButton.secondary:
        return props.theme.palette.secondary.light;

      case TypeButton.outlineBasic:
        return props.theme.action.disabledBackground;
      case TypeButton.outlinePrimary:
        return props.theme.action.disabledBackground;
      case TypeButton.outlineSecondary:
        return props.theme.action.disabledBackground;
      default:
        return props.theme.palette.primary.light;
    }
  }} !important;
  color: ${(props) => props.theme.colorText.primary} !important;    
  border-color: ${(props) => {
    switch (props.typeButton) {
      case TypeButton.basic:
        return props.theme.palette.basic.light;
      case TypeButton.primary:
        return props.theme.palette.primary.light;
      case TypeButton.secondary:
        return props.theme.palette.secondary.light;

      case TypeButton.outlineBasic:
        return props.theme.palette.basic.light;
      case TypeButton.outlinePrimary:
        return props.theme.palette.primary.light;
      case TypeButton.outlineSecondary:
        return props.theme.palette.secondary.light;
      default:
        return props.theme.palette.primary.light;
    }
  }} !important;
  cursor: not-allowed;
  &:hover {
    color: ${(props) => props.theme.colorText.secondary} !important;    
    background: ${(props) => {
      switch (props.typeButton) {
        case TypeButton.basic:
          return props.theme.palette.basic.light;
        case TypeButton.primary:
          return props.theme.palette.primary.light;
        case TypeButton.secondary:
          return props.theme.palette.secondary.light;

        case TypeButton.outlineBasic:
          return props.theme.action.disabledBackground;
        case TypeButton.outlinePrimary:
          return props.theme.action.disabledBackground;
        case TypeButton.outlineSecondary:
          return props.theme.action.disabledBackground;
        default:
          return props.theme.palette.primary.light;
      }
    }}  !important;
  }
};  
&:hover {
  color: ${common.white};  
  border-color: ${(props) => {
    switch (props.typeButton) {
      case TypeButton.basic:
        return props.theme.palette.basic.main;
      case TypeButton.primary:
        return props.theme.palette.primary.main;
      case TypeButton.secondary:
        return props.theme.palette.secondary.main;

      case TypeButton.outlineBasic:
        return props.theme.palette.basic.main;
      case TypeButton.outlinePrimary:
        return props.theme.palette.primary.main;
      case TypeButton.outlineSecondary:
        return props.theme.palette.secondary.main;
      default:
        return props.theme.palette.primary.main;
    }
  }} !important;  
  background: ${(props) => {
    switch (props.typeButton) {
      case TypeButton.basic:
        return props.theme.palette.basic.dark;
      case TypeButton.primary:
        return props.theme.palette.primary.dark;
      case TypeButton.secondary:
        return props.theme.palette.secondary.dark;

      case TypeButton.outlineBasic:
        return props.theme.palette.basic.dark;
      case TypeButton.outlinePrimary:
        return props.theme.palette.primary.dark;
      case TypeButton.outlineSecondary:
        return props.theme.palette.secondary.dark;
      default:
        return props.theme.palette.primary.dark;
    }
  }} !important;   
};
&:focus {
  color: ${(props) => {
    switch (props.typeButton) {
      case TypeButton.basic:
        return props.theme.palette.basic.dark;
      case TypeButton.primary:
        return props.theme.palette.primary.dark;
      case TypeButton.secondary:
        return props.theme.palette.secondary.dark;

      case TypeButton.outlineBasic:
        return common.white;
      case TypeButton.outlinePrimary:
        return common.white;
      case TypeButton.outlineSecondary:
        return common.white;
      default:
        return props.theme.palette.primary.dark;
    }
  }} !important;  
  border-color: ${(props) => {
    switch (props.typeButton) {
      case TypeButton.basic:
        return props.theme.palette.basic.light;
      case TypeButton.primary:
        return props.theme.palette.primary.light;
      case TypeButton.secondary:
        return props.theme.palette.secondary.light;

      case TypeButton.outlineBasic:
        return props.theme.palette.basic.light;
      case TypeButton.outlinePrimary:
        return props.theme.palette.primary.light;
      case TypeButton.outlineSecondary:
        return props.theme.palette.secondary.light;
      default:
        return props.theme.palette.primary.light;
    }
  }} !important;  
  background: ${(props) => {
    switch (props.typeButton) {
      case TypeButton.basic:
        return props.theme.palette.basic.light;
      case TypeButton.primary:
        return props.theme.palette.primary.light;
      case TypeButton.secondary:
        return props.theme.palette.secondary.light;

      case TypeButton.outlineBasic:
        return props.theme.palette.basic.light;
      case TypeButton.outlinePrimary:
        return props.theme.palette.primary.light;
      case TypeButton.outlineSecondary:
        return props.theme.palette.secondary.light;
      default:
        return props.theme.palette.primary.light;
    }
  }} !important;   
  outline: 0;  
};
`;
