import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoared/DynamicModuleLoared';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../../ui/ArticleDetailsComments/ArticleDetailsComments';

import { ArticlesDetailsPageHeader } from '../../ui/ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetails } from '../../../../entities/Article';
import { ArticleRating } from '@/features/articleRating';
import { Page } from '@/widgets/Page';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticlesDetailsPage = (props: any) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    if (!id) {
        return null;
    }

    // usage example for func
    // const articleRatingCard = toggleFeatures({
    // 	name: 'isArticleRatingEnabled',
    // 	on: () => todo1(),
    // 	off: () => todo2(),
    // });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page>
                <VStack gap="16" max>
                    <ArticlesDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ToggleFeatures
                        feature="isArticleRatingEnabled"
                        on={<ArticleRating articleId={id} />}
                        off={<Card>{t('Article ratings coming soon!')}</Card>}
                    />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesDetailsPage);
