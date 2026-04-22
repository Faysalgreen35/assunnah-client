"use client";

import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { pageConfig } from "@/lib/site-data";

export default function CartPage() {
  const { items, totalAmount, itemCount, removeItem, updateQty } = useCart();

  const handleQuantityChange = useCallback((productId: string, color: string | undefined, newQty: number) => {
    if (newQty > 0) {
      updateQty(productId, newQty, color);
    }
  }, [updateQty]);

  const handleRemove = useCallback((productId: string, color: string | undefined) => {
    removeItem(productId, color);
  }, [removeItem]);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-bg flex flex-col">
        {/* Empty State */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-2xl font-bold text-heading mb-2">Your cart is empty</h1>
            <p className="text-body mb-6">Add items to your cart to proceed with checkout.</p>
            <Link
              href="/collections"
              className="inline-block bg-primary hover:bg-[#8b5e24] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-heading">Your cart</h1>
          <p className="text-sm text-body">{itemCount} item{itemCount !== 1 ? "s" : ""}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 space-y-6">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-4 pb-6 border-b border-border last:border-b-0">
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden bg-surface">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-heading text-sm mb-1">{item.name}</h3>
                    {item.color && <p className="text-xs text-body mb-2">Color: {item.color}</p>}
                    <p className="font-bold text-primary">{item.price}</p>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 border border-border rounded-lg">
                      <button
                        onClick={() => handleQuantityChange(item.productId, item.color, item.quantity - 1)}
                        className="px-2 py-1 text-heading hover:bg-surface"
                      >
                        −
                      </button>
                      <span className="px-3 py-1 text-heading font-medium w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.productId, item.color, item.quantity + 1)}
                        className="px-2 py-1 text-heading hover:bg-surface"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(item.productId, item.color)}
                      className="text-xs text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Notes */}
            <div className="mt-6 bg-white rounded-lg p-6">
              <label className="block text-sm font-semibold text-heading mb-2">Add special instructions</label>
              <textarea
                placeholder="e.g., Please gift wrap, Write a message, etc."
                className="w-full border border-border rounded-lg p-3 text-sm text-heading focus:outline-none focus:border-primary resize-none"
                rows={3}
              />
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 space-y-4 sticky top-6">
              {/* Gift Option */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 border border-border rounded cursor-pointer" />
                  <span className="text-sm font-medium text-heading">Is this a gift?</span>
                </label>
              </div>

              {/* Discount Code */}
              <div className="border-t border-border pt-4">
                <label className="block text-xs font-semibold text-body mb-2 uppercase tracking-wide">Discount code</label>
                <input
                  type="text"
                  placeholder="Enter code"
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm text-heading focus:outline-none focus:border-primary"
                />
              </div>

              {/* Totals */}
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-body">Subtotal</span>
                  <span className="text-heading font-medium">₹{totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-body">Shipping</span>
                  <span className="text-body text-xs">—</span>
                </div>
                <div className="flex justify-between text-sm text-xs text-body mt-2">
                  <span>Estimated taxes</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="border-t border-border pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold text-heading">Total</span>
                  <span className="text-xl font-bold text-primary">₹{totalAmount.toFixed(2)}</span>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  className="block w-full bg-primary hover:bg-[#8b5e24] text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center mb-3"
                >
                  Check out
                </Link>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/919000000000?text=I%20have%20${itemCount}%20item(s)%20in%20my%20cart%20worth%20%E2%82%B9${totalAmount}%20at%20As-Sunnah%20Store`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.562 0-3.051.546-4.178 1.532-1.127 1.005-1.75 2.354-1.75 3.77 0 1.416.623 2.765 1.75 3.77 1.127.986 2.616 1.532 4.178 1.532 1.563 0 3.051-.546 4.179-1.532 1.127-1.005 1.749-2.354 1.749-3.77 0-1.416-.622-2.765-1.749-3.77-1.128-.986-2.616-1.532-4.179-1.532z" />
                  </svg>
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
