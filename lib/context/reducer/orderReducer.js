import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {

    }
}

const orderReducer = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrderValue: (state, action) => {
            state.value = action.payload
        },
        updateOrderValue: (state, action) => {
            state.value = {
                ...state,
                ...action.payload
            }
        },
        resetOrderValue: (state) => {
            state.value = initialState
        },
    }
})

export const {setOrderValue, updateOrderValue, resetOrderValue} = orderReducer.actions;
export default orderReducer.reducer;
