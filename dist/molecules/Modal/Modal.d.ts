import { default as React } from 'react';
import { Theme } from '../../Theme/ui';
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
declare const _default: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<Partial<ModalProps>, never>> & string & Omit<{
    (props: Partial<ModalProps>): import("react/jsx-runtime").JSX.Element | null;
    propTypes: {};
    defaultProps: {};
}, keyof React.Component<any, {}, any>>;
export default _default;
