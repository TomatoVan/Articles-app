import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { Drawer } from '@/shared/ui/redesigned/Drawer';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '../../../../entities/Notification';
import cls from './NotificationButton.module.scss';
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
        <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
    );

    return (
        <div>
            <BrowserView>
                <Popover direction="bottom left" trigger={trigger}>
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
