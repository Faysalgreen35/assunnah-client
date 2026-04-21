"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleWishlist, clearWishlist } from "@/redux/features/wishlist/wishlistSlice";
import { IWishlistItem } from "@/types";

export function useWishlist() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((s) => s.wishlist);

  return {
    items,
    count: items.length,
    isInWishlist: (productId: string) => items.some((i) => i.productId === productId),
    toggle: (item: IWishlistItem) => dispatch(toggleWishlist(item)),
    clear: () => dispatch(clearWishlist()),
  };
}
