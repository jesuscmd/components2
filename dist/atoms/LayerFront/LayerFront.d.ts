import { default as React, HTMLProps } from 'react';
import { Theme } from '../../Theme/ui';
interface LayerFrontProps extends HTMLProps<HTMLDivElement> {
    onClose?: () => void;
    children: React.ReactNode | React.ReactNode[];
    theme: Theme;
}
declare const _default: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('styled-components').FastOmit<import('styled-components/dist/types').Substitute<Omit<Partial<LayerFrontProps>, "ref"> & React.RefAttributes<HTMLDivElement>, Omit<Partial<LayerFrontProps>, "ref"> & React.RefAttributes<HTMLDivElement>>, never>, never>> & string & Omit<React.ForwardRefExoticComponent<Omit<Partial<LayerFrontProps>, "ref"> & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
export default _default;
