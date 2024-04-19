import { memo } from 'react';
import { Card as DeprecatedCard, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface NotificationItemProps {
    className?: string;
    notification?: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, notification } = props;

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <Text
                        title={notification?.title}
                        text={notification?.description}
                    />
                </Card>
            }
            off={
                <DeprecatedCard
                    theme={CardTheme.OUTLINED}
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <DeprecatedText
                        title={notification?.title}
                        text={notification?.description}
                    />
                </DeprecatedCard>
            }
        />
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
