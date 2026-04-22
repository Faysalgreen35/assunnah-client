"use client";

import Link from "next/link";

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-heading">Orders</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <div className="bg-white rounded-lg p-12 text-center max-w-md w-full">
            <h2 className="text-xl font-bold text-heading mb-2">No orders yet</h2>
            <p className="text-body text-sm mb-6">Go to store to place an order.</p>
            <Link
              href="/collections"
              className="inline-block bg-primary hover:bg-[#8b5e24] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
