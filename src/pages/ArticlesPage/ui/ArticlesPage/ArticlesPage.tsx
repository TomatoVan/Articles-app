import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoared/DynamicModuleLoared';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hook/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    getArticlesPageisLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {
    articlesPageReducer,
    getArticles,
} from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { ArticleList } from '../../../../entities/Article';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageisLoading);
    const view = useSelector(getArticlesPageView);

    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
