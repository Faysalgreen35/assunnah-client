"use client";

import { useState, useCallback } from "react";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";

interface Props {
  price: string;
  name: string;
  slug: string;
  image: string;
  personalizationNote?: string;
}

export function _Purchase({ price, name, slug, image, personalizationNote = "" }: Props) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const { items: wishlistItems, toggle } = useWishlist();

  const isInWishlist = wishlistItems.some(item => item.productId === slug);

  const handleAddToCart = useCallback(() => {
    addItem({
      productId: slug,
      name,
      price,
      image,
      quantity: qty,
      personalizationNote,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }, [addItem, slug, name, price, image, qty, personalizationNote]);

  const handleWishlistToggle = useCallback(() => {
    toggle(slug);
  }, [toggle, slug]);

  return (
    <div className="flex flex-col gap-4">
      {/* Price */}
      <div>
        <p className="text-[11px] uppercase tracking-widest text-[#aaa] mb-0.5">Price</p>
        <p className="text-2xl font-bold text-[#a4722c]" style={{ fontFamily: "Georgia, serif" }}>
          {price}
        </p>
        <p className="text-[11px] text-[#aaa] mt-0.5">Inclusive of all taxes · Free Shipping</p>
      </div>

      <div className="h-px bg-[#f0e8da]" />

      {/* Quantity */}
      <div>
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#555] mb-2">Quantity</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-[#ddc9a0] rounded-sm overflow-hidden">
            <button
              onClick={() => setQty(q => Math.max(1, q - 1))}
              className="w-9 h-9 flex items-center justify-center text-[#555] hover:bg-[#fdf5e6] hover:text-[#a4722c] transition-colors text-lg font-light"
              aria-label="Decrease"
            >
              −
            </button>
            <span className="w-10 text-center text-[13px] font-semibold text-[#1a1a1a] border-x border-[#ddc9a0]">
              {qty}
            </span>
            <button
              onClick={() => setQty(q => q + 1)}
              className="w-9 h-9 flex items-center justify-center text-[#555] hover:bg-[#fdf5e6] hover:text-[#a4722c] transition-colors text-lg font-light"
              aria-label="Increase"
            >
              +
            </button>
          </div>
          <span className="text-[11px] text-[#aaa]">{qty} in cart</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-2">
        <button
          onClick={handleAddToCart}
          className="w-full rounded-sm py-3 text-[13px] font-bold text-white transition-all duration-200"
          style={{ background: added ? "#6a9e4a" : "#a4722c" }}
        >
          {added ? "✓ Added to Cart!" : "Add to Cart"}
        </button>
        <button
          className="w-full rounded-sm py-3 text-[13px] font-bold text-[#a4722c] border border-[#a4722c] hover:bg-[#fdf5e6] transition-colors"
        >
          Buy It Now
        </button>
      </div>

      {/* Wishlist + Share */}
      <div className="flex items-center gap-4 text-[11.5px] text-[#888]">
        <button
          onClick={handleWishlistToggle}
          className="flex items-center gap-1.5 hover:text-[#a4722c] transition-colors"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill={isInWishlist ? "#e53935" : "none"} stroke={isInWishlist ? "#e53935" : "currentColor"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          {isInWishlist ? "Saved" : "Add to Wishlist"}
        </button>
        <span className="text-[#ddd]">|</span>
        <button
          className="flex items-center gap-1.5 hover:text-[#a4722c] transition-colors"
          onClick={() => navigator.share?.({ title: name, url: window.location.href })}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
          Share
        </button>
      </div>

      <div className="h-px bg-[#f0e8da]" />

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-2 text-center">
        {[
          { icon: "🚚", label: "Free Shipping", sub: "Pan India" },
          { icon: "✨", label: "Premium Quality", sub: "Curated Gifts" },
          { icon: "🔒", label: "Secure Payment", sub: "100% Safe" },
        ].map(b => (
          <div key={b.label} className="flex flex-col items-center gap-0.5 rounded border border-[#f0e8da] py-2.5 px-1 bg-[#fffdf9]">
            <span className="text-lg">{b.icon}</span>
            <p className="text-[9.5px] font-bold text-[#555]">{b.label}</p>
            <p className="text-[9px] text-[#aaa]">{b.sub}</p>
          </div>
        ))}
      </div>

      {/* Payment icons */}
      <div>
        <p className="text-[10px] text-[#aaa] mb-1.5">Accepted Payments</p>
        <div className="flex items-center gap-2 flex-wrap">
          {["Razorpay", "UPI", "Paytm", "Visa", "Mastercard", "COD"].map(pm => (
            <span key={pm} className="rounded border border-[#ede8df] px-2 py-0.5 text-[9.5px] font-semibold text-[#888] bg-white">
              {pm}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
