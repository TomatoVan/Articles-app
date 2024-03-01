import React, { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Popover } from 'shared/ui/Popups';
import { NotificationList } from '../../../../entities/Notification';
import cls from './NotificationButton.module.scss';

export const NotificationButton = memo(() => (
    <Popover
        direction="bottom left"
        trigger={(
            <Button theme={ButtonTheme.CLEAR}>
                <Icon Svg={NotificationIcon} inverted />
            </Button>
        )}
    >
        <NotificationList className={cls.notifications} />
    </Popover>
));
