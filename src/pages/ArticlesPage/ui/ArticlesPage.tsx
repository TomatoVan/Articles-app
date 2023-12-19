import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const ArticlesPage = (props: any) => {
    const { t } = useTranslation();
    return <div>{t('articles page')}</div>;
};

export default memo(ArticlesPage);
