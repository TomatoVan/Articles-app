import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block?: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => (
        <div
            className={classNames(cls.ArticleImageBlockComponent, {}, [
                className,
            ])}
        >
            <img alt={block?.title} src={block?.src} className={cls.img} />
            {block?.title && (
                <Text
                    title={block?.title}
                    className={cls.title}
                    align="center"
                />
            )}
        </div>
    ),
);
