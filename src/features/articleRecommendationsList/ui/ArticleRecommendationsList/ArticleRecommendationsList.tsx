import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '../../../../entities/Article';
import { useArticleRecommendaionsList } from '../../api/ArticleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            error,
            data: articles,
        } = useArticleRecommendaionsList(3);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack
                data-testid="ArticleRecommendationsList"
                gap="16"
                max
                className={classNames('', {}, [className])}
            >
                <Text size="l" title={t('Recommend')} />
                <ArticleList articles={articles} target="_blank" />
            </VStack>
        );
    },
);
