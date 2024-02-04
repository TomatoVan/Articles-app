import { ArticlesDetailsPageAsync } from './ui/ArticlesDetailsPage.async';

export {
    ArticlesDetailsPageAsync as ArticlesDetailsPage,
};

export { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export { ArticleDetailsPageSchema } from './model/types';
export { ArticleDetailsPageRecommendationsSchema } from './model/types/ArticleDetailsPageRecommendationsSchema';
export { articleDetailsCommentsReducer, articleDetailsCommentsActions } from './model/slices/ArticleDetailsCommentsSlice';
export { articleDetailsPageRecommendationsReducer, articleDetailsPageRecommendationsActions } from './model/slices/ArticleDetailsPageRecommendationsSlice';
