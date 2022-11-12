import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../app/store";

interface CartItem {
    name: string,
    description: string,
    image: string,
    category: string,
    amount: number,
}

export interface StateType {
    items: CartItem[],
    totalCount: number,
}

const initialState: StateType = {
    items: [],
    totalCount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload)
            state.totalCount += 1
        }
    }
})

export const { addItem } = cartSlice.actions;