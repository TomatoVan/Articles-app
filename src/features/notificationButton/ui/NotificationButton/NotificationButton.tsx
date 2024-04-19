import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import {
    ButtonTheme,
    Button as ButtonDeprecated,
} from '@/shared/ui/deprecated/Button';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '../../../../entities/Notification';
import cls from './NotificationButton.module.scss';
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

export const NotificationButton = memo(() => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
            }
            off={
                <ButtonDeprecated
                    onClick={onOpenDrawer}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            }
        />
    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover direction="bottom left" trigger={trigger}>
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    }
                />
            </BrowserView>
            <MobileView>
                {trigger}
                <DrawerDeprecated isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </DrawerDeprecated>
            </MobileView>
        </div>
    );
});
