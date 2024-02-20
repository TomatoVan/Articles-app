import { rtkApi } from 'shared/api/rtkApi';
import { Article } from 'entities/Article';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendaionsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                    _expand: 'user',
                },
            }),
        }),
    }),
});

export const useArticleRecommendaionsList = recommendationsApi.useGetArticleRecommendaionsListQuery;
