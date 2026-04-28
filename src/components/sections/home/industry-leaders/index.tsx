"use client";

import { useState, useCallback, useEffect } from "react";
import { GoldDivider } from "@/components/common/GoldDivider";
import { _LogoItem } from "./_LogoItem";

const logos = [
  "/all-pic/AL-HADAYA/logo1_medium.png",
  "/all-pic/AL-HADAYA/logo2_medium.png",
  "/all-pic/AL-HADAYA/logo3_medium.png",
  "/all-pic/AL-HADAYA/logo4_medium.png",
  "/all-pic/AL-HADAYA/logo5_medium.png",
];

// Duplicate logos for infinite scroll effect
const infiniteLogos = [...logos, ...logos, ...logos];

export function IndustryLeaders() {
  const [idx, setIdx] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleItems(2);
      } else if (width < 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setIdx((i) => {
      const nextIdx = i + 1;
      if (nextIdx >= logos.length * 2) {
        return 0;
      }
      return nextIdx;
    });
  }, []);

  const handlePrev = useCallback(() => {
    setIdx((i) => {
      const prevIdx = i - 1;
      if (prevIdx < 0) {
        return logos.length - 1;
      }
      return prevIdx;
    });
  }, []);

  const getDisplayedLogos = () => {
    const displayed = [];
    for (let i = 0; i < visibleItems; i++) {
      displayed.push(infiniteLogos[(idx + i) % infiniteLogos.length]);
    }
    return displayed;
  };

  return (
    <section className="py-12" style={{ background: "#faf6ef" }}>
      <div className="page-width">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Georgia, serif" }}>Our Trusted Industry Leaders</h2>
          <GoldDivider />
        </div>
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={handlePrev}
            className="shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-transparent border border-[#ddc9a0] text-[#a4722c] transition hover:bg-[#a4722c] hover:text-white hover:border-[#a4722c]"
            aria-label="Previous"
          >
            ‹
          </button>
          <div className="flex flex-1 items-center gap-3 sm:gap-5 justify-center overflow-hidden">
            {getDisplayedLogos().map((src, i) => (
              <_LogoItem key={`${idx}-${i}`} src={src} index={i} />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-transparent border border-[#ddc9a0] text-[#a4722c] transition hover:bg-[#a4722c] hover:text-white hover:border-[#a4722c]"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
