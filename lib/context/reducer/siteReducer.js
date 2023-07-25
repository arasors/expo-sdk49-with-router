import {createSlice} from "@reduxjs/toolkit";

const initialState = {

};

const siteReducer = createSlice({
    name: "site",
    initialState,
    reducers: {
        setSiteValue: (state, action) => {
            state.value = action.payload
        },
        updateSiteValue: (state, action) => {
            state.value = {
                ...state,
                ...action.payload
            }
        },
        resetSiteValue: (state) => {
            state.value = initialState
        },
    }
})

export const {setSiteValue, updateSiteValue, resetSiteValue} = siteReducer.actions;
export default siteReducer.reducer;

// export default function siteReducer(state = initialState, action){
//     let data;
//     switch (action.type){
//         case "SET_SITE":
//             data = action.payload;
//             return data;
//         case "UPDATE_SITE":
//             data = {
//                 ...state,
//                 ...action.payload
//             };
//             return data;
//         case "RESET_SITE":
//             data = initialState;
//             return data;
//
//         default: return state;
//     }
// };

