import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageisLoading,
    getArticlesPageNum,
} from '../../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';

export const fetchNextArticlePage = createAsyncThunk<
void,
void,
ThunkConfig<string>
>('articlesPage/fetchNextArticlePage', async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesPageisLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesList({}));
    }
});
