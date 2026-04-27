"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { _DiagonalCard } from "./_DiagonalCard";

interface DiagonalCardItem {
  name: string;
  slug: string;
  img: string;
}

export function _MobileSwiper({
  items,
  basePath = "/categories",
}: {
  items: DiagonalCardItem[];
  basePath?: string;
}) {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, A11y]}
        spaceBetween={16}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        a11y={{ enabled: true }}
        grabCursor
        className="w-full"
      >
        {items.map(item => (
          <SwiperSlide key={item.slug} className="!h-auto">
            <_DiagonalCard
              name={item.name}
              slug={item.slug}
              img={item.img}
              basePath={basePath}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-end gap-2 mt-6">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-8 h-8 flex items-center justify-center text-xl font-semibold text-[#a4722c] hover:text-[#8b5a1f] border border-[#a4722c] rounded hover:bg-[#a4722c]/10 transition-all"
        >
          &lt;
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-8 h-8 flex items-center justify-center text-xl font-semibold text-[#a4722c] hover:text-[#8b5a1f] border border-[#a4722c] rounded hover:bg-[#a4722c]/10 transition-all"
        >
          &gt;
        </button>
      </div>
    </>
  );
}
