"use client";
import {useDispatch} from "react-redux";
import {setBasketValue, updateBasketValue, resetBasketValue} from "../reducer/BasketReducer";
import {useCallback} from "react";

export const useBasketAction = () => {
    const dispatch = useDispatch();
    const setBasket = useCallback((data) => {
        dispatch(setBasketValue(data));
    }, []);

    const updateBasket = useCallback((data) => {
        dispatch(updateBasketValue(data));
    }, []);

    const resetBasket = useCallback(() => {
        dispatch(resetBasketValue());
    }, []);

    return{
        setBasket,
        updateBasket,
        resetBasket
    }
}
