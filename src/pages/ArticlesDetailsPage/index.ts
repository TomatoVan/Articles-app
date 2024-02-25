import { ArticlesDetailsPageAsync } from './ui/ArticlesDetailsPage/ArticlesDetailsPage.async';

export {
    ArticlesDetailsPageAsync as ArticlesDetailsPage,
};

export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export type { ArticleDetailsPageSchema } from './model/types';
export type { ArticleDetailsPageRecommendationsSchema } from './model/types/ArticleDetailsPageRecommendationsSchema';
export { articleDetailsCommentsReducer, articleDetailsCommentsActions } from './model/slices/ArticleDetailsCommentsSlice';
export { articleDetailsPageRecommendationsReducer, articleDetailsPageRecommendationsActions } from './model/slices/ArticleDetailsPageRecommendationsSlice';
