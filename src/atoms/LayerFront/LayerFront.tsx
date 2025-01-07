import React, { HTMLProps } from "react";
import cx from "classnames";
import styled from "styled-components";
import type { Theme } from "../../Theme/ui";
import { DesertTheme } from "../../Theme/ui";

interface LayerFrontProps extends HTMLProps<HTMLDivElement> {
  onClose?: () => void;
  children: React.ReactNode | React.ReactNode[];
  //className: string | undefined,
  theme: Theme;
}

/**
 * LayerFront
 *
 */
const LayerFront = React.forwardRef<HTMLDivElement, Partial<LayerFrontProps>>(
  function LayerFront(props, ref) {
    const { className, children, theme, onClose = () => {}, ...other } = props;

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      onClose();
    };

    const MainComponent = "div";

    return (
      <MainComponent
        className={cx(className)}
        aria-hidden
        ref={ref}
        onClick={handleClick}
        {...other}
      >
        {children && children}
      </MainComponent>
    );
  },
);

LayerFront.propTypes = {};

// LayerFront.defaultProps = {};

export default styled(LayerFront).attrs((props) => ({
  theme: props.theme.name !== undefined ? props.theme : DesertTheme,
}))`
  background-color: #062b3d66;
  width: 100%;
  height: 100%;
  min-height: inherit;
  border: none;
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
  z-index: 100001;
  padding: 0px !important;
  margin: 0px !important;
  top: 0px;
  left: 0px;
  right: 0;
  bottom: 0;

  /*display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center; */

  /* width: 100%;
margin-bottom: 1rem;
border-collapse: collapse;
text-indent: initial;
border-spacing: 2px; */
`;
