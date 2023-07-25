import {configureStore, combineReducers, applyMiddleware} from "@reduxjs/toolkit";
import {persistStore, persistReducer, createTransform} from "redux-persist";
import thunk from "redux-thunk";
import storage from "@react-native-async-storage/async-storage";


import siteReducer from "@/lib/context/reducer/siteReducer";
import orderReducer from "@/lib/context/reducer/orderReducer";
import * as Flatted from "flatted";

 const transformCircular = createTransform(
    (inboundState, key) => Flatted.stringify(inboundState),
    (outboundState, key) => Flatted.parse(outboundState),
)

const reducer = combineReducers({
    site: siteReducer,
    orders: orderReducer
});


const persistConfig = {
    key: "root",
    storage,
    transform: [transformCircular]
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk];
export const store = configureStore({
        reducer: persistedReducer,
        middleware
});

export const persistor = persistStore(store);
