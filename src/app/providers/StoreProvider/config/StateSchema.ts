import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { ScrollRestorationSchema } from '@/features/scrollRestoration/model/types/scrollRestorationSchema';
import { ArticleDetailsPageSchema } from '@/pages/ArticlesDetailsPage/model/types';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/editableProfileCard';
import { ArticleDetailsSchema } from '../../../../entities/Article';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollRestoration: ScrollRestorationSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  // async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance,
}

export interface ThunkConfig<T> {
	rejectValue: T,
	extra: ThunkExtraArg,
	state: StateSchema
}
