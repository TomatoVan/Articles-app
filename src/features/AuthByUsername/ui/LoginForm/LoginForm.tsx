import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoared/DynamicModuleLoared';
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <VStack gap="8">
                    <Text title={t('auth_form')} />
                    {error && <Text text={t('login_error')} variant="error" />}
                    <Input
                        autofocus
                        type="text"
                        className={cls.input}
                        placeholder={t('auth_username')}
                        onChange={onChangeUsername}
                        value={username}
                    />
                    <Input
                        type="text"
                        className={cls.input}
                        placeholder={t('auth_password')}
                        onChange={onChangePassword}
                        value={password}
                    />
                    <Button
                        onClick={onLoginClick}
                        variant="outline"
                        className={cls.loginBtn}
                        isDisabled={isLoading}
                    >
                        {t('login')}
                    </Button>
                </VStack>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
