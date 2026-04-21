"use client";

import { useState } from "react";
import { GoldDivider } from "@/components/common/GoldDivider";
import { _LogoItem } from "./_LogoItem";

const logos = [
  "/all-pic/AL-HADAYA/logo1_medium.png",
  "/all-pic/AL-HADAYA/logo2_medium.png",
  "/all-pic/AL-HADAYA/logo3_medium.png",
  "/all-pic/AL-HADAYA/logo4_medium.png",
  "/all-pic/AL-HADAYA/logo5_medium.png",
];

export function IndustryLeaders() {
  const [idx, setIdx] = useState(0);

  return (
    <section className="py-12" style={{ background: "#faf6ef" }}>
      <div className="page-width">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Georgia, serif" }}>Our Trusted Industry Leaders</h2>
          <GoldDivider />
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIdx(i => Math.max(0, i - 1))}
            disabled={idx === 0}
            className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#ddc9a0] bg-white text-[#a4722c] shadow-sm transition hover:bg-[#a4722c] hover:text-white disabled:opacity-25 disabled:cursor-not-allowed"
          >‹</button>
          <div className="flex flex-1 items-center gap-5 justify-center overflow-hidden">
            {logos.slice(idx, idx + 5).map((src, i) => (
              <_LogoItem key={src} src={src} index={idx + i} />
            ))}
          </div>
          <button
            onClick={() => setIdx(i => Math.min(logos.length - 5, i + 1))}
            disabled={idx >= logos.length - 5}
            className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#ddc9a0] bg-white text-[#a4722c] shadow-sm transition hover:bg-[#a4722c] hover:text-white disabled:opacity-25 disabled:cursor-not-allowed"
          >›</button>
        </div>
      </div>
    </section>
  );
}
