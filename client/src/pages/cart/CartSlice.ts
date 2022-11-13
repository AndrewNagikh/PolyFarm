import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: string,
    name: string,
    description: string,
    image: string,
    category: string,
    amount: number,
    count: number,
}

export interface StateType {
    items: CartItem[],
    totalCount: number,
}

const initialState: StateType = {
    items: JSON.parse(localStorage.getItem('items') || '[]'),
    totalCount: JSON.parse(localStorage.getItem('totalCount') || '0'),
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index >= 0) {
                state.items[index].count += 1
            } else {
                state.items.push(action.payload)
            }
            state.totalCount += 1;
            localStorage.removeItem('items');
            localStorage.setItem('items', JSON.stringify(state.items));
            localStorage.removeItem('totalCount');
            localStorage.setItem('totalCount', JSON.stringify(state.totalCount));
        },
        removeItem: (state, action: PayloadAction<CartItem>) => {
            state.totalCount -= 1;
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            const filteredItems = state.items.filter((item) => item.id !== action.payload.id)
            if (index >= 0) {
                state.items[index].count -= 1
            }
            if (state.items[index].count === 0) {
                state.items = filteredItems;
            }
            if (state.totalCount === 0) {
                localStorage.removeItem('items');
                localStorage.removeItem('totalCount');
            } else {
                localStorage.removeItem('items');
                localStorage.setItem('items', JSON.stringify(state.items));
                localStorage.removeItem('totalCount');
                localStorage.setItem('totalCount', JSON.stringify(state.totalCount));
            }
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions;