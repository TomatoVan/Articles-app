import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;
    /**
     * Устарел, используем новые компоненты из папки redesigned
     * @deprecated
     */
    return createPortal(children, element);
};
