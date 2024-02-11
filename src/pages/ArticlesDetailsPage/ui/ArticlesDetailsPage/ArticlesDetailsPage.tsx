import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoared/DynamicModuleLoared';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hook/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommetForArticle/addCommetForArticle';

import { ArticlesDetailsPageHeader } from '../../ui/ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slices';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import { ArticleDetails, ArticleList } from '../../../../entities/Article';
import { Text, TextSize } from '../../../../shared/ui/Text/Text';
import { CommentList } from '../../../../entities/Comment';
import cls from './ArticlesDetailsPage.module.scss';
import { getArticleRecommendations } from '../../model/slices/ArticleDetailsPageRecommendationsSlice';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticlesDetailsPage = (props: any) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return <Page>{t('article_not_found')}</Page>;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page>
                <VStack gap="16" max>
                    <ArticlesDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text
                        size={TextSize.L}
                        className={cls.commentTitle}
                        title={t('Recommend')}
                    />
                    <ArticleList
                        articles={recommendations}
                        isLoading={recommendationsIsLoading}
                        target="_blank"
                        className={cls.recommendations}
                    />
                    <Text
                        size={TextSize.L}
                        className={cls.commentTitle}
                        title={t('Comments')}
                    />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList
                        isLoading={commentsIsLoading}
                        comments={comments}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesDetailsPage);
