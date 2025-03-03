import {configureStore} from "@reduxjs/toolkit";
import { counterReducer } from "./slide/counterSlide";
import { destinationReducer } from "./slide/destinationSlide";
import { increment, decrement, multiincrement, multidecrement } from "./slide/counterSlide";
import { destinationClick } from './slide/destinationSlide';
export const store = configureStore({
    reducer:{
        counterStore: counterReducer,
        destinationStore: destinationReducer,
    }
})

console.log(store.getState());
export {
    increment,decrement, multiincrement, multidecrement, destinationClick,
};