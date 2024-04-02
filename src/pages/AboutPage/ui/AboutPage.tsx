import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = memo((props: any) => {
    const { t } = useTranslation('about');

    return <Page data-testid="AboutPage">{t('About website')}</Page>;
});

export default AboutPage;
