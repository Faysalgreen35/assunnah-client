"use client";

import { useState } from "react";
import Link from "next/link";
import { GoldDivider } from "@/components/common/GoldDivider";
import { SwiperRow } from "@/components/common/SwiperRow";
import { _ProductCard } from "./_ProductCard";
import data from "@/data/home/tabbed-collections.json";

type ProductMap = Record<string, { name: string; price: string; img: string }[]>;

// Map tab IDs to collection slugs
const tabCollectionMap: Record<string, string> = {
  "ramadan": "ramadan-2026",
  "hajj": "hajj-umrah",
  "quran": "quran-gift-sets",
  "eid": "eid-gifts",
  "wedding": "wedding",
};

export function TabbedCollections() {
  const [activeTab, setActiveTab] = useState(data.tabs[0].id);
  const displayedTabs = data.tabs.slice(0, 4);
  const allTabs = data.tabs;
  const products = (data.products as ProductMap)[activeTab] ?? [];

  return (
    <section className="py-14 bg-white">
      <div className="page-width">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#a4722c] lg:text-4xl" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            For Every Blessed Occasion
          </h2>
          <GoldDivider />
        </div>

        {/* Mobile: 4 tabs and 2.5 cards swiping */}
        <div className="md:hidden">
          {/* Tabs row */}
          <div className="flex gap-0 mb-0">
            {displayedTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={activeTab === tab.id ? { boxShadow: "0 -12px 24px rgba(164, 114, 44, 0.6)" } : {}}
                className={`flex-1 flex flex-col items-center justify-start pt-3 pb-2 rounded-t-3xl border border-b-0 text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? "border-[#a4722c] bg-[#a4722c] text-white"
                    : "border-[#e8dcc8] bg-[#faf6f0] text-[#888]"
                } ${index !== 3 ? "border-r-0" : ""}`}
              >
                <span className="text-[20px] leading-none mb-1">{tab.icon}</span>
                <span className="text-[9px] text-center line-clamp-2 px-1">{tab.label}</span>
              </button>
            ))}
          </div>
          {/* Cards swiper - products from active tab */}
          <SwiperRow gridClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" mobileSlides={2.5} showPagination={false}>
            {products.map(product => (
              <_ProductCard key={product.name} name={product.name} price={product.price} img={product.img} />
            ))}
          </SwiperRow>
        </div>

        {/* Desktop: 5 columns with tabs above cards */}
        <div className="hidden md:grid grid-cols-5 gap-0">
          {allTabs.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const productToShow = products[index] || products[0];
            return (
              <div key={tab.id} className="flex flex-col">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  style={isActive ? { boxShadow: "0 -12px 24px rgba(164, 114, 44, 0.6)" } : {}}
                  className={`flex flex-col items-center justify-start pt-4 pb-3 px-2 rounded-t-3xl border border-b-0 text-sm font-semibold transition-all ${
                    isActive
                      ? "border-[#a4722c] bg-[#a4722c] text-white"
                      : "border-[#e8dcc8] bg-[#faf6f0] text-[#888] hover:text-[#a4722c]"
                  } ${index !== 4 ? "border-r-0" : ""}`}
                >
                  <span className="text-[28px] leading-none mb-2">{tab.icon}</span>
                  <span className="text-[11px] text-center line-clamp-2">{tab.label}</span>
                </button>
                {productToShow ? (
                  <_ProductCard name={productToShow.name} price={productToShow.price} img={productToShow.img} />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
