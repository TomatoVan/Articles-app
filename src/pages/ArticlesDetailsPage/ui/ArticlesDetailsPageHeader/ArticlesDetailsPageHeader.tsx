import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { HStack } from 'shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import { getArticlesDetailsData } from '../../../../entities/Article';

interface ArticlesDetailsPageHeaderProps {
  className?: string;
}

export const ArticlesDetailsPageHeader = memo((props: ArticlesDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const navigate = useNavigate();
    const article = useSelector(getArticlesDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    const canEdit = useSelector(getCanEditArticle);

    return (
        <HStack justify="between" max className={classNames('', {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Back to list')}
            </Button>
            {canEdit && (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('Edit')}
                </Button>
            )}

        </HStack>
    );
});
