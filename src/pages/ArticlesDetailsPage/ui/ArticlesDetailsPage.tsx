import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from '../../../entities/Article';

const ArticlesDetailsPage = (props: any) => {
    const { t } = useTranslation();
    return (
        <div>
            <ArticleDetails />
        </div>
    );
};
export default memo(ArticlesDetailsPage);
