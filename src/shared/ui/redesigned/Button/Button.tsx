import React, {
    ButtonHTMLAttributes,
    ForwardedRef,
    forwardRef,
    ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';

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
    color?: ButtonColor;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
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
            color = 'normal',

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

        const additional = [className, cls[variant], cls[size], cls[color]];

        return (
            <button
                type="button"
                className={classNames(cls.Button, mods, additional)}
                disabled={isDisabled}
                {...otherProps}
                ref={ref}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                {children}
                <div className={cls.addonRight}>{addonRight}</div>
            </button>
        );
    },
);
