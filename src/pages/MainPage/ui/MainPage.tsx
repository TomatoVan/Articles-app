import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo((props: any) => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
});

export default MainPage;
