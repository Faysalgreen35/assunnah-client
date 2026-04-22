"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  slug: string;
  name: string;
  price: string;
  img: string;
  rating: number;
}

const StarRating = memo(function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-px">
      {[1,2,3,4,5].map(s => (
        <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill={s <= rating ? "#c9973a" : "#e0d5c5"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
});

export const ProductCard = memo(function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="group relative flex flex-col bg-white overflow-hidden transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.10)]"
      style={{ borderRadius: 8, border: "1px solid #ede8df" }}
    >
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="relative block overflow-hidden" style={{ aspectRatio: "1/1" }}>
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <button
          className="absolute top-2 right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm text-[#ccc] hover:text-[#e53935] transition-colors"
          aria-label="Wishlist"
          onClick={e => { e.preventDefault(); e.stopPropagation(); }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </Link>

      {/* Card body */}
      <div className="flex flex-col gap-1 px-2.5 py-2">
        <Link href={`/products/${product.slug}`}>
          <p className="text-[11.5px] font-medium text-[#1a1a1a] leading-[1.35] line-clamp-2 hover:text-[#a4722c] transition-colors">
            {product.name}
          </p>
        </Link>
        <StarRating rating={product.rating} />
        <p className="text-[12px] font-bold text-[#a4722c] mt-0.5">From {product.price}</p>
        <div className="mt-1 flex gap-1.5">
          <button className="flex-1 rounded-sm bg-[#a4722c] py-[5px] text-[10.5px] font-semibold text-white hover:bg-[#8b5e24] transition-colors leading-none">
            Add to cart
          </button>
          <button className="flex-1 rounded-sm border border-[#c9973a] py-[5px] text-[10.5px] font-semibold text-[#a4722c] hover:bg-[#fdf5e6] transition-colors leading-none">
            Quick view
          </button>
        </div>
      </div>
    </div>
  );
});
