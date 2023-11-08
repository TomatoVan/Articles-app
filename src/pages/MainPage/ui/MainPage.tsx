import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = (props: any) => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
