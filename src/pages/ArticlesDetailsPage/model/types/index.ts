import {
    ArticleDetailsCommentsSchema,
    ArticleDetailsPageRecommendationsSchema,
} from '../../index';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsPageRecommendationsSchema;
}
