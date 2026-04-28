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
    <section className="py-12 relative" style={{ background: "#faf6ef" }}>
      <div className="page-width">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Georgia, serif" }}>Our Trusted Industry Leaders</h2>
          <GoldDivider />
        </div>
        <div
          className="flex items-center justify-center gap-4 sm:gap-6 relative min-h-[140px] sm:min-h-[160px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={handlePrev}
            className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full border-2 border-[#ddc9a0] text-[#a4722c] transition hover:bg-[#a4722c] hover:text-white hover:border-[#a4722c] absolute z-10 hover:z-20"
            style={{
              background: "transparent",
              right: "clamp(10px, 2.5%, 200px)",
              top: "50%",
              transform: "translateY(-50%)"
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <div className="flex flex-1 items-center gap-3 sm:gap-5 justify-center overflow-visible">
            {getDisplayedLogos().map((src, i) => (
              <_LogoItem key={`${idx}-${i}`} src={src} index={i} />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full border-2 border-[#ddc9a0] text-[#a4722c] transition hover:bg-[#a4722c] hover:text-white hover:border-[#a4722c] absolute z-10 hover:z-20"
            style={{
              background: "transparent",
              left: "clamp(10px, 2.5%, 200px)",
              top: "50%",
              transform: "translateY(-50%)"
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
