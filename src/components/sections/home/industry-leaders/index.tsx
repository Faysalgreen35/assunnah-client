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
  const [isHovered, setIsHovered] = useState(false);

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

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIdx((i) => {
        const nextIdx = i + 1;
        if (nextIdx >= logos.length * 2) {
          return 0;
        }
        return nextIdx;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

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
    <section className="py-12 relative overflow-visible" style={{ background: "#faf6ef" }}>
      <div className="page-width">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Georgia, serif" }}>Our Trusted Industry Leaders</h2>
          <GoldDivider />
        </div>
        <div
          className="flex items-center justify-center gap-0 relative min-h-[140px] sm:min-h-[180px] md:min-h-[200px] w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={handlePrev}
            className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-15 md:w-15 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-full border-4 border-[#ddc9a0] text-[#a4722c] transition hover:bg-[#a4722c] hover:text-white hover:border-[#a4722c] relative z-20 hover:z-30 -mr-2 sm:-mr-3 md:-mr-4"
            style={{
              background: "transparent",
              fontSize: "clamp(18px, 5vw, 28px)"
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-5 justify-center">
            {getDisplayedLogos().map((src, i) => (
              <_LogoItem key={`${idx}-${i}`} src={src} index={i} />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-15 md:w-15 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-full border-4 border-[#ddc9a0] text-[#a4722c] transition hover:bg-[#a4722c] hover:text-white hover:border-[#a4722c] relative z-20 hover:z-30 -ml-2 sm:-ml-3 md:-ml-4"
            style={{
              background: "transparent",
              fontSize: "clamp(18px, 5vw, 28px)"
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
