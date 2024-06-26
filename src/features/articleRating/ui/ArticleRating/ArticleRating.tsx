import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { RatingCard } from '@/entities/Rating';
import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/articleRatingAPI';
import { getUserAuthData } from '@/entities/User';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const rating = data?.[0];

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} border="8px" />;
    }

    return (
        <RatingCard
            className={className}
            title={t('Rate the article')}
            feedbackTitle={t(
                'Leave your feedback on the article, it will help improve the quality',
            )}
            hasFeedback
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    );
});

export default ArticleRating;
