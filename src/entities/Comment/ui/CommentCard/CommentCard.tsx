import { memo } from 'react';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { getRouteProfile } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo(
    ({ className, comment, isLoading }: CommentCardProps) => {
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
            <Card border="partial" padding="24" max>
                <VStack
                    data-testid="CommentCard.Content"
                    max
                    gap="8"
                    className={classNames('', {}, [className])}
                >
                    <AppLink to={getRouteProfile(comment.user.id)}>
                        <HStack gap="16">
                            {comment.user.avatar && (
                                <Avatar
                                    src={comment.user.avatar}
                                    alt={comment.user.username}
                                    size={30}
                                />
                            )}
                            <Text text={comment.user.username} bold />
                        </HStack>
                    </AppLink>
                    <Text text={comment.text} />
                </VStack>
            </Card>
        );
    },
);
