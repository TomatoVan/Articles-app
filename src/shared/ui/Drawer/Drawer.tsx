import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme])}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
