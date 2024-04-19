import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch/useAppDispatch';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '../../../../entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

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

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Admin panel'),
                      href: getRouteAdminPanel(),
                  },
              ]
            : []),
        {
            content: t('Profile'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Exit'),
            onClick: onLogout,
        },
    ];
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Dropdown
                    direction="bottom left"
                    items={items}
                    trigger={<Avatar size={40} src={authData.avatar} />}
                />
            }
            off={
                <DropdownDeprecated
                    direction="bottom left"
                    items={items}
                    trigger={
                        <AvatarDeprecated
                            size={30}
                            src={authData.avatar}
                            fallbackInverted
                        />
                    }
                />
            }
        />
    );
});
