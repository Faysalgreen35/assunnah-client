"use client";

import { useState } from "react";
import Link from "next/link";
import { GoldDivider } from "@/components/common/GoldDivider";
import { SwiperRow } from "@/components/common/SwiperRow";
import { _TabButtons } from "./_TabButtons";
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
  const products = (data.products as ProductMap)[activeTab] ?? [];
  const collectionSlug = tabCollectionMap[activeTab] || "/collections";

  return (
    <section className="py-14 bg-white">
      <div className="page-width">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#a4722c] lg:text-4xl" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            For Every Blessed Occasion
          </h2>
          <GoldDivider />
        </div>
        <_TabButtons tabs={data.tabs} active={activeTab} onChange={setActiveTab} />
        <SwiperRow gridClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {products.map(product => (
            <_ProductCard key={product.name} name={product.name} price={product.price} img={product.img} />
          ))}
          <Link
            href={`/collections/${collectionSlug}`}
            className="group flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#c4a87a] bg-[#fdf8f2] transition hover:bg-[#f9efe0] min-h-[200px]"
          >
            <span className="text-2xl text-[#a4722c] mb-1">→</span>
            <p className="text-xs font-semibold text-[#a4722c]">View All</p>
          </Link>
        </SwiperRow>
      </div>
    </section>
  );
}
