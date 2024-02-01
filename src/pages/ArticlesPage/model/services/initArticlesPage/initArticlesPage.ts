import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const inited = getArticlesPageInited(getState());

    if (!inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder ?? 'asc';
        const sortFromUrl = searchParams.get('sort') as ArticleSortField ?? ArticleSortField.CREATED;
        const searchFromUrl = searchParams.get('search') ?? '';

        dispatch(articlesPageActions.setOrder(orderFromUrl));
        dispatch(articlesPageActions.setSort(sortFromUrl));
        dispatch(articlesPageActions.setSearch(searchFromUrl));

        dispatch(articlesPageActions.initState());

        dispatch(
            fetchArticlesList({}),
        );
    }
});
