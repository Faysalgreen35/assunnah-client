"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState, ICartItem } from "@/types";

const initialState: ICartState = {
  items: [],
  totalAmount: 0,
  deliveryCharge: 60,
};

function calcTotal(items: ICartItem[]): number {
  return items.reduce((sum, item) => {
    const unitPrice = item.offerPrice ?? item.price;
    return sum + unitPrice * item.quantity;
  }, 0);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const existing = state.items.find(
        (i) => i.productId === action.payload.productId && i.color === action.payload.color
      );
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalAmount = calcTotal(state.items);
    },
    removeFromCart: (state, action: PayloadAction<{ productId: string; color?: string }>) => {
      state.items = state.items.filter(
        (i) => !(i.productId === action.payload.productId && i.color === action.payload.color)
      );
      state.totalAmount = calcTotal(state.items);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; color?: string; quantity: number }>
    ) => {
      const item = state.items.find(
        (i) => i.productId === action.payload.productId && i.color === action.payload.color
      );
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
      state.totalAmount = calcTotal(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
