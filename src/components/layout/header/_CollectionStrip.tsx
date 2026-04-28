"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ICollectionStripItem } from "@/types/navbar";

interface Props {
  items: ICollectionStripItem[];
}

export function _CollectionStrip({ items }: Props) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile || isHovered) return;

    const interval = setInterval(() => {
      setScrollIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= items.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, isHovered, items.length]);

  const getDisplayedItems = () => {
    if (!isMobile) return items;

    // Always ensure exactly 3 cards are displayed
    const displayed = [];
    const itemsCount = items.length;

    for (let i = 0; i < 3; i++) {
      const index = (scrollIndex + i) % itemsCount;
      displayed.push(items[index]);
    }

    return displayed;
  };

  const containerStyle = isMobile
    ? {
        display: "flex",
        gap: "1rem",
        width: "100%",
        transition: "none",
      }
    : undefined;

  return (
    <div className="border-b border-[#ebebeb] bg-white">
      <div className="mx-auto max-w-[1280px] overflow-hidden px-5 py-4 scrollbar-none">
        <div
          className={`flex gap-4 sm:gap-5 md:gap-6 ${isMobile ? "w-full justify-start" : "min-w-max mx-auto justify-center"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {getDisplayedItems().map((item, idx) => (
            <Link
              key={item.slug}
              href={`/collections/${item.slug}`}
              className="group flex flex-col items-center text-center"
            >
              <div
                className="relative transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                style={{
                  width: "90px",
                  height: "90px",
                }}
              >
                {/* SVG Octagon Border Background */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30"
                    fill="#ffffff"
                    stroke="#ddc9a0"
                    strokeWidth="2"
                    className="group-hover:stroke-[#a4722c] transition-colors duration-300"
                    style={{
                      filter: "drop-shadow(0 2px 6px rgba(164, 114, 44, 0.15))"
                    }}
                  />
                </svg>

                {/* Content wrapper */}
                <div
                  className="relative z-10 w-full h-full overflow-hidden"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="65px"
                  />
                </div>
              </div>
              <span className="mt-2 w-[90px] text-[10.5px] font-semibold leading-[13px] text-[#3d3d3d] group-hover:text-[#a4722c] transition-colors text-center">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
