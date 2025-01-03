import React, { useEffect } from "react";
import cx from "classnames";
import styled from "styled-components";
import { common, devices, Theme } from "../../Theme/ui";
import { LayerFront } from "../../atoms";

import ModalHeader from "./ModaHeader";
import ModalFooter from "./ModaFooter";

interface ModalProps {
  children?: React.ReactNode;
  className?: string;
  theme?: Theme;
  head?: string | React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
  showModal: boolean;
  full?: boolean;
  modalFull?: boolean;
  style?: React.CSSProperties;
  styleBody?: React.CSSProperties;
}

/**
 * Modal
 */
const Modal = (props: Partial<ModalProps>) => {
  const {
    className = "",
    head,
    footer,
    children,
    onClose,
    showModal,
    full = false,
    modalFull = false,
    style = {},
    styleBody = {},
    theme,
    ...other
  } = props;

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Desactiva el scroll
    } else {
      document.body.style.overflow = ""; // Restaura el scroll
    }
  }, [showModal]);

  if (!showModal) return null;

  return (
    <LayerFront
      className={cx(className)}
      style={style}
      aria-hidden
      onClose={onClose}
      {...other}
    >
      <div className="modal-dialog">
        <div
          className={cx("modal", { "modal-full": modalFull })}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={cx("modal-wrapper", { "modal-wrapper-full": full })}>
            <ModalHeader head={head} />
            <div className="modal-body" style={styleBody}>
              {children}
            </div>
            <ModalFooter footer={footer} onClose={onClose} />
          </div>
        </div>
      </div>
    </LayerFront>
  );
};

Modal.propTypes = {};

Modal.defaultProps = {};

export default styled(Modal)`
  display: block;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: ${(props) => (props.full === true ? "100%" : "auto")};

  .modal-dialog {
    margin: 1.75rem auto;
    min-height: calc(100vh - (1.75rem * 2));
    margin: 1.75rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    background: ${(props) => props.theme.background.paper};
    display: block;
    border-radius: 0.5rem;
    height: ${(props) => (props.full === true ? "100%" : "auto")};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    @media ${devices.mobile} {
      max-width: 98%;
    }
    @media ${devices.tablet} {
      max-width: 90%;
    }
    @media ${devices.laptop} {
      max-width: 70%;
    }
  }
  .modal-full {
    width: 100%;
    max-width: 97.4%;
  }
  .modal-wrapper-full {
    min-height: calc(100vh - (1.75rem * 2));
    display: grid;
    grid-template-rows: auto 2fr auto;
    align-items: stretch;
  }
  .modal-head {
    background-color: ${(props) => props.theme.palette.primary.main};
    text-align: left;
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 10px 30px 10px 10px;
  }
  .modal-body {
    margin: "0px 0px 10px 0px";
    overflow: hidden;
  }
  .modal-title {
    color: ${common.white};
  }
  .modal-footer {
    padding: 0;
    text-align: right;
    border-radius: 0 0 0.5rem 0.5rem;
    height: fit-content;
    background-color: ${(props) => props.theme.background.paper2};
  }
`;
