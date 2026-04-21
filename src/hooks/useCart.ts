"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, removeFromCart, updateQuantity, clearCart } from "@/redux/features/cart/cartSlice";
import { ICartItem } from "@/types";

export function useCart() {
  const dispatch = useAppDispatch();
  const { items, totalAmount, deliveryCharge } = useAppSelector((s) => s.cart);

  return {
    items,
    totalAmount,
    deliveryCharge,
    finalAmount: totalAmount + deliveryCharge,
    itemCount: items.reduce((sum, i) => sum + i.quantity, 0),
    addItem: (item: ICartItem) => dispatch(addToCart(item)),
    removeItem: (productId: string, color?: string) => dispatch(removeFromCart({ productId, color })),
    updateQty: (productId: string, quantity: number, color?: string) =>
      dispatch(updateQuantity({ productId, quantity, color })),
    clear: () => dispatch(clearCart()),
  };
}
