import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should get profile data', () => {
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
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
