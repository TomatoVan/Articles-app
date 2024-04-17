import { memo } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { ArticleView } from '../../../entities/Article';
import cls from './ArticleViewSelector.module.scss';
import { Icon } from '@/shared/ui/deprecated/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={() => onClick(viewType.view)}
                    key={viewType.view}
                >
                    <Icon
                        className={classNames('', {
                            [cls.notSelected]: viewType.view !== view,
                        })}
                        Svg={viewType.icon}
                        width={24}
                        height={24}
                    />
                </Button>
            ))}
        </div>
    );
});
