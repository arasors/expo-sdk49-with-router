"use client";
import {useDispatch} from "react-redux";
import {setSiteValue, updateSiteValue, resetSiteValue} from "../reducer/siteReducer";
import {useCallback} from "react";

export const useSiteAction = () => {
     const dispatch = useDispatch();

     const setSite = useCallback((data) => {
          dispatch(setSiteValue(data));
     }, [])

     const updateSite = useCallback((data) => {
          console.log(data)
          dispatch(updateSiteValue(data))
     }, [dispatch])

     const resetSite = useCallback(() => {
          dispatch(resetSiteValue())
     }, [])

     return {
          setSite,
          updateSite,
          resetSite
     }
}
