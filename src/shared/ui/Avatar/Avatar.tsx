import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

export interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
	fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
        alt,
        fallbackInverted,
    } = props;
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon width={size} height={size} Svg={UserIcon} inverted={fallbackInverted} />;

    return (
        <AppImage
            src={src}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            alt={alt}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
};
