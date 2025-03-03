import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/action";
const initalState = () => {
    return {
      destinations: [
        {
          name: "Hong Kong",
          days: 7,
          fact: "World's longest covered escalator",
        },
        {
          name: "Japan",
          days: 10,
          fact: "Japan is mostly mountains",
        },
        {
          name: "New Zealand",
          days: 14,
          fact: "Last country in the world to be inhabited by humans",
        },
      ],
      destinationSelected: null,    
    };
  };
export const destinationSlide = createSlice({
    name: "destination",
    initialState: initalState,
    reducers: {
        destinationClick: (state, action) => {
            state.destinationSelected = action.payload;
        },
        // resetDestination: (state,action) => {
        //     state.destinationSelected = null;
        //     console.log(action);
        // }
    },
    extraReducers: (builder) => {
            builder.addCase(resetReduxOPedia, (state, actions) => {
                state.destinationSelected = null;
            })
    },
})
export const {destinationClick, resetDestination} = destinationSlide.actions;
export const destinationReducer = destinationSlide.reducer;
