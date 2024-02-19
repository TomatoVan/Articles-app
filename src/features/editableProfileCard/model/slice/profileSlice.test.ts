import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/editableProfileCardSchema';
import {
    profileActions,
    profileReducer,
} from './profileSlice';

const data = {
    username: 'test',
    first: 'test firstname',
    lastname: 'test lastname',
    age: 20,
    country: Country.Armenia,
    currency: Currency.EUR,
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    city: 'yaroslavl',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
        ).toEqual({ readonly: true });
    });

    test('test set cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readonly: true, validateErrors: undefined, data, form: data,
        });
    });

    test('test set updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
        expect(
            profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: 'test123' })),
        ).toEqual({
            form: { username: 'test123' },
        });
    });

    test('test set service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test set service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });
});
