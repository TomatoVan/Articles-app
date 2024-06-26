import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesDetailsData = (state: StateSchema) =>
    state.articleDetails?.data;
export const getArticlesDetailsIsLoading = (state: StateSchema) =>
    state.articleDetails?.isLoading;
export const getArticlesDetailsIsError = (state: StateSchema) =>
    state.articleDetails?.error;
