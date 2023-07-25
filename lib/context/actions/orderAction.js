"use client";
import {useDispatch} from "react-redux";
import {setOrderValue, updateOrderValue, resetOrderValue} from "../reducer/orderReducer";
import {useCallback} from "react";

export const useOrderAction = () => {
    const dispatch = useDispatch();
    const setOrders = useCallback((data) => {
        dispatch(setOrderValue(data));
    }, []);

    const updateOrders = useCallback((data) => {
        dispatch(updateOrderValue(data));
    }, []);

    const resetOrders = useCallback(() => {
        dispatch(resetOrderValue());
    }, []);

    return{
        setOrders,
        updateOrders,
        resetOrders
    }
}
