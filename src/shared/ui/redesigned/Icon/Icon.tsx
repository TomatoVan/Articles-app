import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<SvgProps>;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
    'data-testid'?: string;
}

interface ClickableIconProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;

    'data-testid'?: string;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        'data-testid': dataTestId = 'Icon',
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            width={width}
            height={height}
            data-testid={dataTestId}
            {...otherProps}
            // @ts-ignore
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                type="button"
                className={cls.button}
                onClick={props.onClick}
                style={{ height, width }}
                data-testid={dataTestId}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
