import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LoginModal } from '@/features/AuthByUsername';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropDown } from '@/features/avatarDropdown';
import { getUserAuthData } from '../../../entities/User';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header
                        className={classNames(cls.NavbarRedesigned, {}, [
                            className,
                        ])}
                    >
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropDown />
                        </HStack>
                    </header>
                }
                off={
                    <header className={classNames(cls.Navbar, {}, [className])}>
                        <Text
                            className={cls.appName}
                            text={t('Articles app')}
                            theme={TextTheme.INVERTED}
                        />
                        <AppLink
                            theme={AppLinkTheme.SECONDARY}
                            to={getRouteArticleCreate()}
                            className={cls.createBtn}
                        >
                            {t('Create new article')}
                        </AppLink>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropDown />
                        </HStack>
                    </header>
                }
            />
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('login')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onClose} />
            )}
        </header>
    );
});
