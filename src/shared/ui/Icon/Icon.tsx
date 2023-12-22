import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
	className?: string;
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg }: IconProps) => {
    const { t } = useTranslation();
    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    );
});
