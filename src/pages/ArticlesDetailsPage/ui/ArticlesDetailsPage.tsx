import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '../../../entities/Article';

const ArticlesDetailsPage = (props: any) => {
    const { t } = useTranslation();

    const { id } = useParams<{id: string}>();
    if (!id) {
        return (
            <div>{t('article_not_found')}</div>
        );
    }

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
};
export default memo(ArticlesDetailsPage);
