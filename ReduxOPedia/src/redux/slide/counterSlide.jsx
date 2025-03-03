import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/action";
const initialState = {count: 10};
export const counterSlide = createSlice({
    name: "counter",
    initialState: initialState,
    reducers:{
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        multiincrement: (state, actions) => {
            state.count += Number(actions.payload);
        },
        multidecrement: (state, actions) => {
            state.count -= Number(actions.payload);
        },
        // resetCounter: (state) => {
        //     state.count = 10;
        // }
    },
    //khi chay dispatch resetDestination thì nó chạy luôn cái state.count = 10;
    extraReducers: (builder) => {
        builder.addCase(resetReduxOPedia, (state, actions) => {
            state.count = 10;
        })
    }
});

export const {increment, decrement, multiincrement, multidecrement} = counterSlide.actions;
export const counterReducer = counterSlide.reducer;
