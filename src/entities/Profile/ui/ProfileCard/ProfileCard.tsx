import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Country, CountrySelect } from '../../../Country';
import { Currency, CurrencySelect } from '../../../Currency';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <Card padding="24" max>
                <VStack gap="32">
                    <HStack max justify="center">
                        <Skeleton border="100%" width={128} height={128} />
                    </HStack>
                    <HStack gap="32" max>
                        <VStack gap="16" max>
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                        </VStack>

                        <VStack gap="16" max>
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                        </VStack>
                    </HStack>
                </VStack>
            </Card>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max>
                <Text
                    variant="error"
                    title={t('Error with getting profile data')}
                    text={t('Try to reload page')}
                    align="center"
                />
            </HStack>
        );
    }

    return (
        <Card
            padding="24"
            max
            className={classNames(cls.ProfileCardRedesigned, {}, [className])}
        >
            <VStack gap="32" align="center">
                {data?.avatar && (
                    <HStack justify="center" className={cls.avatarWrapper}>
                        <Avatar
                            size={128}
                            src={data?.avatar}
                            alt="avatar img"
                        />
                    </HStack>
                )}
                <HStack gap="24" max>
                    <VStack gap="16" max>
                        <Input
                            value={data?.first}
                            label={`${t('Name')}:`}
                            className={cls.input}
                            onChange={onChangeFirstName}
                            readonly={readonly}
                            data-testid="ProfileCard.firstname"
                        />
                        <Input
                            value={data?.lastname}
                            label={`${t('Lastname')}:`}
                            className={cls.input}
                            onChange={onChangeLastName}
                            readonly={readonly}
                            data-testid="ProfileCard.lastname"
                        />
                        <Input
                            value={data?.age}
                            label={`${t('Age')}:`}
                            className={cls.input}
                            onChange={onChangeAge}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.city}
                            label={`${t('City')}:`}
                            className={cls.input}
                            onChange={onChangeCity}
                            readonly={readonly}
                        />
                    </VStack>
                    <VStack gap="16" max>
                        <Input
                            value={data?.avatar}
                            label={`${t('Avatar')}:`}
                            className={cls.input}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.username}
                            label={`${t('Username')}:`}
                            className={cls.input}
                            onChange={onChangeUsername}
                            readonly={readonly}
                        />
                        <CurrencySelect
                            className={cls.input}
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readonly={readonly}
                        />
                        <CountrySelect
                            className={cls.input}
                            value={data?.country}
                            onChange={onChangeCountry}
                            readonly={readonly}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};
