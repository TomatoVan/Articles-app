import { memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';

interface NotificationItemProps {
    className?: string;
    notification?: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, notification } = props;

    const content = (
        <Card className={classNames(cls.NotificationItem, {}, [className])}>
            <Text
                title={notification?.title}
                text={notification?.description}
            />
        </Card>
    );

    if (notification?.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={notification?.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
});
