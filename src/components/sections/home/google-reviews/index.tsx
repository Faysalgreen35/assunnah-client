"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { _GoogleBadge } from "./_GoogleBadge";
import { _ReviewCard } from "./_ReviewCard";
import reviewData from "@/data/home/google-reviews.json";

export function GoogleReviews() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="page-width">
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col md:flex-row gap-6 items-start">
          <_GoogleBadge rating={reviewData.rating} total={reviewData.total} />
          <div className="flex gap-4 overflow-x-auto scrollbar-none flex-1 pb-1">
            {reviewData.reviews.map(r => (
              <_ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Rating badge - full width */}
          <div className="w-full mb-2">
            <_GoogleBadge rating={reviewData.rating} total={reviewData.total} />
          </div>

          {/* All reviews - swiper with 2 visible + autoplay */}
          <div className="relative mt-2">
            <Swiper
              ref={swiperRef as any}
              modules={[Navigation, A11y, Autoplay]}
              spaceBetween={16}
              slidesPerView={2}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              a11y={{ enabled: true }}
              grabCursor
              className="w-full"
            >
              {reviewData.reviews.map(r => (
                <SwiperSlide key={r.name} className="!h-auto">
                  <div className="overflow-hidden">
                    <_ReviewCard review={r} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrow buttons */}
            <div className="flex justify-end gap-2 mt-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
