import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { cartSlice } from '../pages/cart/CartSlice';
import { shopApi } from "../pages/shop/shop.store";

export const store = configureStore({
    reducer: {
        [cartSlice.name]: cartSlice.reducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(shopApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;