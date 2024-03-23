import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch/useAppDispatch';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '../../../../entities/User';
import { getRouterAdminPanel, getRouterProfile } from '@/shared/const/router';

export const AvatarDropDown = memo(() => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const isAdmin = useSelector(isUserAdmin);
    const authData = useSelector(getUserAuthData);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable
                    ? [
                        {
                            content: t('Admin panel'),
                            href: getRouterAdminPanel(),
                        },
                    ]
                    : []),
                {
                    content: t('Profile'),
                    href: getRouterProfile(authData.id),
                },
                {
                    content: t('Exit'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} fallbackInverted />}
        />
    );
});
