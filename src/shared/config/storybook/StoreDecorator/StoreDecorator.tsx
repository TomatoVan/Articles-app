import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername';
// TODO
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoared/DynamicModuleLoared';
// eslint-disable-next-line paths-fixes/public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice';
// eslint-disable-next-line paths-fixes/public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticlesDetailsPage/model/slices';
// eslint-disable-next-line paths-fixes/public-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import { articleDetailsReducer } from '../../../../entities/Article';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
