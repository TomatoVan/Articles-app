import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from '@/shared/ui/deprecated/Avatar/Avatar';
import { Text } from '@/shared/ui/deprecated/Text/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton/Skeleton';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo(
    ({ className, comment, isLoading }: CommentCardProps) => {
        const { t } = useTranslation();

        if (isLoading) {
            return (
                <VStack
                    data-testid="CommentCard.Loading"
                    gap="8"
                    max
                    className={classNames(cls.CommentCard, {}, [
                        className,
                        cls.loading,
                    ])}
                >
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton
                            width={100}
                            height={16}
                            className={cls.username}
                        />
                    </div>
                    <Skeleton height={50} width="100%" className={cls.text} />
                </VStack>
            );
        }

        if (!comment) {
            return null;
        }

        return (
            <VStack
                data-testid="CommentCard.Content"
                max
                gap="8"
                className={classNames(cls.CommentCard, {}, [className])}
            >
                <AppLink
                    to={getRouteProfile(comment.user.id)}
                    className={cls.header}
                >
                    {comment.user.avatar && (
                        <Avatar
                            src={comment.user.avatar}
                            alt={comment.user.username}
                            size={30}
                        />
                    )}
                    <Text
                        className={cls.username}
                        title={comment.user.username}
                    />
                </AppLink>
                <Text className={cls.text} text={comment.text} />
            </VStack>
        );
    },
);
