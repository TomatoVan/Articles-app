import React, { useCallback } from 'react';

import ThemeIcon from '../../../shared/assets/icons/theme.svg';
import { useTheme } from '@/shared/lib/hook/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch/useAppDispatch';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return <Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />;
};
