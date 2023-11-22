import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state:DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getCounter(state as StateSchema)).toEqual(undefined);
    });
});
