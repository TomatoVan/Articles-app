import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getCanEditArticle } from '../../model/selectors/article';
import { getArticlesDetailsData } from '../../../../entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticlesDetailsPageHeaderProps {
    className?: string;
}

export const ArticlesDetailsPageHeader = memo(
    (props: ArticlesDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation();

        const navigate = useNavigate();
        const article = useSelector(getArticlesDetailsData);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            navigate(getRouteArticleEdit(article?.id || ''));
        }, [article?.id, navigate]);

        const canEdit = useSelector(getCanEditArticle);

        return (
            <HStack
                justify="between"
                max
                className={classNames('', {}, [className])}
            >
                <Button onClick={onBackToList}>{t('Back to list')}</Button>
                {canEdit && (
                    <Button onClick={onEditArticle}>{t('Edit')}</Button>
                )}
            </HStack>
        );
    },
);
