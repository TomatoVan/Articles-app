import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo((props: any) => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Main page')}
        </div>
    );
});

export default MainPage;
