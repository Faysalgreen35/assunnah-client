"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "./_ProductCard";
import { FilterSidebar } from "@/components/product/FilterSidebar";
import { useGetProductsQuery } from "@/services/api/productApi";
import { useParams } from "next/navigation";

function slugToLabel(slug: string): string {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export default function CollectionSlugPage() {
  const params = useParams();
  const slug = params.slug as string;
  const label = slugToLabel(slug);

  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("");

  const queryParams = {
    occasion: selectedOccasions.length > 0 ? selectedOccasions.join(",") : undefined,
    recipient: selectedRecipients.length > 0 ? selectedRecipients.join(",") : undefined,
    sort: sortBy || undefined,
    limit: 100,
  };

  const { data: productsData, isLoading, error } = useGetProductsQuery(
    Object.fromEntries(Object.entries(queryParams).filter(([_, v]) => v !== undefined))
  );

  const displayProducts = productsData?.data || [];

  const handleOccasionChange = (occasion: string) => {
    setSelectedOccasions((prev) =>
      prev.includes(occasion) ? prev.filter((o) => o !== occasion) : [...prev, occasion]
    );
  };

  const handleRecipientChange = (recipient: string) => {
    setSelectedRecipients((prev) =>
      prev.includes(recipient) ? prev.filter((r) => r !== recipient) : [...prev, recipient]
    );
  };

  const handleClearFilters = () => {
    setSelectedOccasions([]);
    setSelectedRecipients([]);
  };

  return (
    <div className="min-h-screen text-[#1a1a1a]" style={{ background: "#faf8f4" }}>
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-[#ede8df] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-2">
          <nav className="flex items-center gap-1 text-[11px] text-[#aaa]">
            <Link href="/" className="hover:text-[#a4722c] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-[#a4722c] transition-colors">
              Collections
            </Link>
            <span>/</span>
            <span className="text-[#a4722c]">{label}</span>
          </nav>
        </div>
      </div>

      {/* Page title */}
      <div className="bg-white border-b border-[#ede8df]">
        <div className="mx-auto max-w-[1280px] px-5 py-4">
          <h1 className="text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Georgia, serif" }}>
            {label}
          </h1>
          <p className="mt-0.5 text-[12px] text-[#aaa]">
            {isLoading ? "Loading..." : `${displayProducts.length} products`}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 py-5">
        {/* Sort bar */}
        <div className="mb-4 flex items-center justify-between rounded border border-[#ede8df] bg-white px-4 py-2">
          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-[12px] font-semibold text-[#555] hover:text-[#a4722c] transition-colors cursor-pointer bg-transparent border-0"
            >
              <option value="">Featured</option>
              <option value="-averageRating">Best Rating</option>
              <option value="price">Price: Low to High</option>
              <option value="-price">Price: High to Low</option>
              <option value="-createdAt">Newest First</option>
            </select>
          </div>
          <span className="text-[12px] text-[#bbb]">
            {isLoading ? "Loading..." : `${displayProducts.length} products`}
          </span>
        </div>

        <div className="flex gap-5 items-start">
          {/* Sidebar with Filters */}
          <div className="w-72">
            <FilterSidebar
              selectedOccasions={selectedOccasions}
              selectedRecipients={selectedRecipients}
              onOccasionChange={handleOccasionChange}
              onRecipientChange={handleRecipientChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {error ? (
              <div className="rounded border border-[#ede8df] bg-white p-8 text-center">
                <p className="text-[#888]">Error loading products. Please try again.</p>
              </div>
            ) : isLoading ? (
              <div className="rounded border border-[#ede8df] bg-white p-8 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#a4722c]"></div>
                <p className="text-[#888] mt-4">Loading products...</p>
              </div>
            ) : displayProducts.length === 0 ? (
              <div className="rounded border border-[#ede8df] bg-white p-8 text-center">
                <p className="text-[#888]">No products found. Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {displayProducts.map((product: any) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
