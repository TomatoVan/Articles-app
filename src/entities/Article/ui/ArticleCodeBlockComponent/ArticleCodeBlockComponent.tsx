import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../model/types/article';
import { Code } from '@/shared/ui/deprecated/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block?: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    ({ className, block }: ArticleCodeBlockComponentProps) => {
        const { t } = useTranslation();
        return (
            <div className={classNames('', {}, [className])}>
                {block?.code && <Code text={block?.code} />}
            </div>
        );
    },
);
