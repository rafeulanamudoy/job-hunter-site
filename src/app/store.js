import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../features/api/apiSlice';


import authSlice from '../features/auth/authSlice';
import fliterSlice from '../features/job/fliterSlice';



export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        filter: fliterSlice


    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})