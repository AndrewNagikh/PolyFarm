import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../pages/shop/shop.store";

export const store = configureStore({
    reducer: {
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware)
})