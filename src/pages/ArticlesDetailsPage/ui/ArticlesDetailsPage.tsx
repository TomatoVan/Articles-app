import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoared/DynamicModuleLoared';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hook/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from 'pages/ArticlesDetailsPage/model/services/addCommetForArticle/addCommetForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../model/slices/ArticleDetailsCommentsSlice';
import { ArticleDetails } from '../../../entities/Article';
import { Text } from '../../../shared/ui/Text/Text';
import { CommentList } from '../../../entities/Comment';
import cls from './ArticlesDetailsPage.module.scss';

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticlesDetailsPage = (props: any) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return <Page>{t('article_not_found')}</Page>;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Back to list')}
                </Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Comments')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesDetailsPage);
