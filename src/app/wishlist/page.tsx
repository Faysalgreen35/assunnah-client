"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import { useCart } from "@/hooks/useCart";
import { useGetWishlistQuery, useRemoveFromWishlistMutation } from "@/services/api/wishlistApi";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function WishlistPage() {
  const { data: wishlistData, isLoading, error } = useGetWishlistQuery();
  const [removeFromWishlist, { isLoading: isRemoving }] = useRemoveFromWishlistMutation();
  const { addItem } = useCart();

  const wishlistItems = wishlistData?.data?.products || [];

  const handleAddToCart = useCallback((product: any) => {
    addItem({
      productId: product._id,
      name: product.name,
      price: typeof product.price === 'number' ? product.price : parseInt(String(product.price).replace(/[^\d]/g, '')) || 0,
      image: product.imageUrls?.[0] || product.image,
      quantity: 1,
    });
  }, [addItem]);

  const handleRemove = useCallback(async (productId: string) => {
    try {
      await removeFromWishlist(productId).unwrap();
    } catch (err) {
      console.error("Failed to remove from wishlist:", err);
    }
  }, [removeFromWishlist]);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-bg flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="text-body mt-4">Loading your wishlist...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-bg flex flex-col">
          <div className="flex-1 flex items-center justify-center px-4 py-12">
            <div className="text-center max-w-md">
              <div className="text-5xl mb-4">⚠️</div>
              <h1 className="text-2xl font-bold text-heading mb-2">Error loading wishlist</h1>
              <p className="text-body mb-6">Please try again later or contact support.</p>
              <Link
                href="/collections"
                className="inline-block bg-primary hover:bg-[#8b5e24] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Back to Shopping
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (wishlistItems.length === 0) {
    return (
      <>
        <Header />
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
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
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
            {wishlistItems.map((product: any) => (
              <div key={product._id} className="flex gap-4 pb-6 border-b border-border last:border-b-0">
                {/* Product Image */}
                <Link href={`/products/${product.slug}`} className="flex-shrink-0">
                  <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-surface hover:opacity-80 transition-opacity">
                    <Image
                      src={product.imageUrls?.[0] || "/placeholder.png"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                </Link>

                {/* Product Details */}
                <div className="flex-1">
                  <Link href={`/products/${product.slug}`}>
                    <h3 className="font-semibold text-heading text-sm mb-1 hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-body mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center gap-2">
                    {product.offerPrice && product.offerPrice < product.price ? (
                      <>
                        <p className="font-bold text-primary">₹{product.offerPrice}</p>
                        <p className="text-xs text-body line-through">₹{product.price}</p>
                      </>
                    ) : (
                      <p className="font-bold text-primary">₹{product.price}</p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="text-xs font-semibold text-white bg-primary hover:bg-[#8b5e24] px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Add to Basket
                  </button>
                  <button
                    onClick={() => handleRemove(product._id)}
                    disabled={isRemoving}
                    className="text-xs text-red-500 hover:text-red-700 font-medium disabled:opacity-50 transition-colors"
                  >
                    {isRemoving ? "Removing..." : "Remove"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
