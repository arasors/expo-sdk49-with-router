import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {

    }
}

const basketReducer = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setBasketValue: (state, action) => {
            state.value = action.payload
        },
        updateBasketValue: (state, action) => {
            state.value = {
                ...state,
                ...action.payload
            }
        },
        resetBasketValue: (state) => {
            state.value = initialState
        },
    }
})

export const {setBasketValue, updateBasketValue, resetBasketValue} = baksetReducer.actions;
export default baksetReducer.reducer;
