import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    isDisabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'outline',
        square,
        isDisabled,
        size = 'm',
        fullWidth,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.isDisabled]: isDisabled,
        [cls.fullWidth]: fullWidth,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    const additional = [className, cls[variant], cls[size]];

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, additional)}
            disabled={isDisabled}
            {...otherProps}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    );
});
