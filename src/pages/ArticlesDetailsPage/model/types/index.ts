import { ArticleDetailsCommentsSchema, ArticleDetailsPageRecommendationsSchema } from 'pages/ArticlesDetailsPage';

export interface ArticleDetailsPageSchema {
	comments: ArticleDetailsCommentsSchema;
	recommendations: ArticleDetailsPageRecommendationsSchema;
}
