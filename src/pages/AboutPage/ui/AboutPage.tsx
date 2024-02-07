import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo((props: any) => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('About website')}
        </div>
    );
});

export default AboutPage;
