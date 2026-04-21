"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWishlistState, IWishlistItem } from "@/types";

const initialState: IWishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IWishlistItem>) => {
      const exists = state.items.some((i) => i.productId === action.payload.productId);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.productId !== action.payload);
    },
    toggleWishlist: (state, action: PayloadAction<IWishlistItem>) => {
      const idx = state.items.findIndex((i) => i.productId === action.payload.productId);
      if (idx >= 0) {
        state.items.splice(idx, 1);
      } else {
        state.items.push(action.payload);
      }
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, toggleWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
