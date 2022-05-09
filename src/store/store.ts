import  userReducer  from './reducers/User/UsersSlice';
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
export const store = configureStore({
    reducer:{
        user:userReducer
    },
    middleware: [thunkMiddleware],
   
})

export type TypeRootStore=ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
