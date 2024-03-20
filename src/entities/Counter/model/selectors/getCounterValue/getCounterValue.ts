import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../../types/counterSchema';
import { getCounter } from '../getCounter/getCounter';

// createSelector не только для переиспользования селекторов, но и для меморизации (перерасчет произойдет только при изменении getCounter)
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);

// using custom select

// export const [useCounterValue, getCounterValue] = buildSelector(
//     (state) => state.counter.value,
// );
