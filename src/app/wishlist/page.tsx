"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { products } from "@/lib/site-data";

export default function WishlistPage() {
  const { items: wishlistItems, toggle } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = useCallback((product: (typeof products)[0]) => {
    addItem({
      productId: product.slug,
      name: product.name,
      price: `₹${product.price}`,
      image: product.image,
      quantity: 1,
    });
  }, [addItem]);

  const handleRemove = useCallback((productSlug: string) => {
    toggle(productSlug);
  }, [toggle]);

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-bg flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-4">❤️</div>
            <h1 className="text-2xl font-bold text-heading mb-2">Your wishlist is empty</h1>
            <p className="text-body mb-6">Save items to your wishlist to view them later.</p>
            <Link
              href="/collections"
              className="inline-block bg-primary hover:bg-[#8b5e24] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Shop Now
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
          <h1 className="text-3xl font-bold text-heading">My Wishlist</h1>
          <p className="text-sm text-body">{wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg p-6 space-y-6">
          {wishlistItems.map((item) => {
            const product = products.find(p => p.slug === item.productId);
            if (!product) return null;

            return (
              <div key={item.productId} className="flex gap-4 pb-6 border-b border-border last:border-b-0">
                {/* Product Image */}
                <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden bg-surface">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-heading text-sm mb-1">{product.name}</h3>
                  <p className="text-xs text-body mb-3">{product.shortDescription}</p>
                  <p className="font-bold text-primary">₹{product.price}</p>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="text-xs font-semibold text-white bg-primary hover:bg-[#8b5e24] px-4 py-2 rounded-lg transition-colors"
                  >
                    Add to Basket
                  </button>
                  <button
                    onClick={() => handleRemove(item.productId)}
                    className="text-xs text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
