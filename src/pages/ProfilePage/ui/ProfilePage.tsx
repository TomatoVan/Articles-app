import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoared/DynamicModuleLoared';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileIsLoading } from '../../../entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../../entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileData } from '../../../entities/Profile/model/selectors/getProfileData/getProfileData';
import { useAppDispatch } from '../../../shared/lib/hook/useAppDispatch/useAppDispatch';
import {
    fetchProfileData,
    ProfileCard,
    profileReducer,
} from '../../../entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={data}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </DynamicModuleLoader>

    );
});

export default ProfilePage;
