"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  name: string;
}

export function _Gallery({ images, name }: Props) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  const prev = () => setActive(i => (i - 1 + images.length) % images.length);
  const next = () => setActive(i => (i + 1) % images.length);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin({ x, y });
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div
        className="relative w-full overflow-hidden bg-white"
        style={{ aspectRatio: "1/1", borderRadius: 10, border: "1px solid #ede8df", cursor: zoomed ? "zoom-out" : "zoom-in" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
      >
        <Image
          src={images[active]}
          alt={name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          style={{
            transformOrigin: `${origin.x}% ${origin.y}%`,
            transform: zoomed ? "scale(2.5)" : "scale(1)",
            transition: zoomed ? "transform 0.1s ease-out" : "transform 0.25s ease",
            pointerEvents: "none",
          }}
        />

        {/* Arrows — hidden while zoomed */}
        {images.length > 1 && !zoomed && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md text-[#555] hover:text-[#a4722c] transition-colors"
              aria-label="Previous"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md text-[#555] hover:text-[#a4722c] transition-colors"
              aria-label="Next"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </>
        )}

        {/* Counter — hidden while zoomed */}
        {!zoomed && (
          <span className="absolute bottom-2 right-3 text-[10px] text-[#999]">
            {active + 1} / {images.length}
          </span>
        )}

        {/* Zoom hint */}
        {!zoomed && (
          <span className="absolute bottom-2 left-3 flex items-center gap-1 text-[10px] text-[#bbb]">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
            Hover to zoom
          </span>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative h-[64px] w-[64px] shrink-0 overflow-hidden bg-white transition-all"
            style={{
              borderRadius: 6,
              border: i === active ? "2px solid #a4722c" : "1.5px solid #ede8df",
            }}
            aria-label={`View image ${i + 1}`}
          >
            <Image src={img} alt={`${name} ${i + 1}`} fill className="object-contain p-1" sizes="64px" />
          </button>
        ))}
      </div>
    </div>
  );
}
