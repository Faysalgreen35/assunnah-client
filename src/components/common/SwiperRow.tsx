"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface SwiperRowProps {
  children: ReactNode[];
  gridClassName?: string;
  mobileSlides?: number;
  tabletSlides?: number;
  spaceBetween?: number;
  showPagination?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
}

export function SwiperRow({
  children,
  gridClassName = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  mobileSlides = 1.3,
  tabletSlides = 2.3,
  spaceBetween = 16,
  showPagination = true,
  autoplay = false,
  autoplayDelay = 3000,
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

  const autoplayConfig = autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false;

  return (
    <Swiper
      modules={[Pagination, A11y, ...(autoplay ? [Autoplay] : [])]}
      spaceBetween={spaceBetween}
      slidesPerView={mobileSlides}
      breakpoints={{
        640: {
          slidesPerView: tabletSlides,
        },
      }}
      pagination={showPagination ? { clickable: true, dynamicBullets: true } : false}
      autoplay={autoplayConfig}
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
