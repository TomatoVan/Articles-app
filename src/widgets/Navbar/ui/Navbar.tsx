import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Popups/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Popover } from 'shared/ui/Popups';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '../../../entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    text={t('Articles app')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.article_create}
                    className={cls.createBtn}
                >
                    {t('Create new article')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <Popover
                        direction="bottom left"
                        trigger={(
                            <Button theme={ButtonTheme.CLEAR}>
                                <Icon Svg={NotificationIcon} inverted />
                            </Button>
                        )}
                    >
                        test
                    </Popover>

                    <Dropdown
                        direction="bottom left"
                        items={[
                            ...(isAdminPanelAvailable ? [{
                                content: t('Admin panel'),
                                href: RoutePath.admin_panel,
                            }] : []),
                            {
                                content: t('Profile'),
                                href: RoutePath.profile + authData.id,
                            },
                            {
                                content: t('Exit'),
                                onClick: onLogout,
                            },
                        ]}
                        trigger={<Avatar size={30} src={authData.avatar} />}
                    />
                </HStack>

            </header>
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
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
        </header>
    );
});
