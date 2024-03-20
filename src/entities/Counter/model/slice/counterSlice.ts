import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;

// using custom slice

// export const counterSlice = buildSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment: (state) => {
//             state.value += 1;
//         },
//         add: (state, { payload }: PayloadAction<number>) => {
//             state.value += payload;
//         },
//         decrement: (state) => {
//             state.value -= 1;
//         },
//     },
// });
//
// export const {
//     actions: counterActions,
//     reducer: counterReducer,
//     useActions: useCounterActions,
// } = counterSlice;
