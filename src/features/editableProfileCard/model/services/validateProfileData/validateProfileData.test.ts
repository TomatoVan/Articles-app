import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { validateProfileData } from '../../../model/services/validateProfileData/validateProfileData';

const data = {
    username: 'test',
    first: 'test firstname',
    lastname: 'test lastname',
    age: 20,
    country: Country.Armenia,
    currency: Currency.EUR,
    avatar:
    'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    city: 'yaroslavl',
};

describe('validateProfileData.test', () => {
    test('validateProfileData async thunk test', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('validateProfileData with errors test (first, lastname)', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('validateProfileData with errors test (age)', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('validateProfileData with errors test (country)', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('validateProfileData with errors test (all)', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
