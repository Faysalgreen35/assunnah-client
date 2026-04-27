"use client";

import { useState, useEffect } from "react";
import { SwiperRow } from "@/components/common/SwiperRow";
import { _MobileSwiper } from "./_MobileSwiper";
import { _DiagonalCard } from "./_DiagonalCard";

interface DiagonalCardItem {
  name: string;
  slug: string;
  img: string;
}

export function _DiagonalCardsRow({
  items,
  basePath = "/categories",
}: {
  items: DiagonalCardItem[];
  basePath?: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <_MobileSwiper items={items} basePath={basePath} />
    );
  }

  return (
    <div className="grid grid-cols-6 gap-4 lg:gap-6">
      {items.map(item => (
        <_DiagonalCard
          key={item.slug}
          name={item.name}
          slug={item.slug}
          img={item.img}
          basePath={basePath}
        />
      ))}
    </div>
  );
}
