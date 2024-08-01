//import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

//Redux Toolkit
const initialState = { counter: 0 }
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        decrease(state, action) {
            state.counter = state.counter - action.payload;
        },
        reset(state) {
            state.counter = 0;
        }
    }
})


// Redux
// const counterReducer = (state = { counter : 0 }, action) => {
//     if(action.type === 'increment') {
//         return {
//             counter : state.counter + 1,
//         }
//     }

//     if(action.type === 'increase') {
//         return {
//             counter : state.counter + action.amount,
//         }
//     }

//     if(action.type === 'decrement') {
//         return {
//             counter : state.counter - 1,
//         }
//     }

//     if(action.type === 'decrease') {
//         return {
//             counter : state.counter - action.amount,
//         }
//     }

//     if(action.type === 'reset') {
//         return {
//             counter : 0
//         }
//     }

//     return state;
// }

// const store = createStore(counterReducer);

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;
