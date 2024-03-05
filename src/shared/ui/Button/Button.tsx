import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M='size_m',
	L='size_l',
	XL='size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
	isDisabled?: boolean;
	children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        isDisabled,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods:Mods = {
        [cls.square]: square,
        [cls.isDisabled]: isDisabled,
    };

    const additional = [
        className,
        cls[theme],
        cls[size],
    ];

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, additional)}
            disabled={isDisabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
