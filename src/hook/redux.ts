import { TypeRootStore} from './../store/store';
import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";

type AppDispatch = Dispatch<AnyAction> & ThunkDispatch<TypeRootStore, null, AnyAction> 

export const useAppDispatch = () => useDispatch<AppDispatch>() 
export const useAppSelector: TypedUseSelectorHook<TypeRootStore> = useSelector
