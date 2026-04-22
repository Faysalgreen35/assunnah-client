"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface SwiperRowProps {
  children: ReactNode[];
  gridClassName?: string; // Desktop grid classes, e.g., "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
  mobileSlides?: number;
  tabletSlides?: number;
  spaceBetween?: number;
  showPagination?: boolean;
}

export function SwiperRow({
  children,
  gridClassName = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  mobileSlides = 1.3,
  tabletSlides = 2.3,
  spaceBetween = 16,
  showPagination = true,
}: SwiperRowProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  if (isDesktop) {
    return (
      <div className={`grid gap-4 sm:gap-5 md:gap-6 ${gridClassName}`}>
        {children}
      </div>
    );
  }

  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={mobileSlides}
      breakpoints={{
        640: {
          slidesPerView: tabletSlides,
        },
      }}
      pagination={showPagination ? { clickable: true, dynamicBullets: true } : false}
      a11y={{ enabled: true }}
      grabCursor
      className="w-full"
    >
      {children.map((child, idx) => (
        <SwiperSlide key={idx} className="!h-auto">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
