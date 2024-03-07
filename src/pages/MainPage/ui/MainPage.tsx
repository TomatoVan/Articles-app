import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo((props: any) => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
            <RatingCard title="123" feedbackTitle="heyyyy" hasFeedback />
        </div>
    );
});

export default MainPage;
