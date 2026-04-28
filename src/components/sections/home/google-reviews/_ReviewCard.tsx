import { memo } from "react";

interface Review {
  name: string;
  initial: string;
  time: string;
  stars: number;
  review: string;
}

interface Props {
  review: Review;
}

export const _ReviewCard = memo(function ReviewCard({ review }: Props) {
  return (
    <div className="shrink-0 w-40 md:w-56 rounded-2xl border border-[#e8dcc8] bg-white p-2 md:p-5 shadow-sm">
      <div className="mb-2 md:mb-3 flex items-center gap-2.5">
        <div className="flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-full bg-[#a4722c] text-xs md:text-sm font-bold text-white">
          {review.initial}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] md:text-[12px] font-semibold text-[#222] leading-4 truncate">{review.name}</p>
          <p className="text-[9px] md:text-[10px] text-[#bbb] truncate">{review.time}</p>
        </div>
      </div>
      <div className="mb-1.5 md:mb-2 flex gap-0.5">
        {Array.from({ length: review.stars }).map((_, i) => (
          <span key={i} className="text-[#fbbc05] text-xs md:text-sm">★</span>
        ))}
      </div>
      <p className="text-[10px] md:text-[12px] leading-4 md:leading-5 text-[#777] line-clamp-1 md:line-clamp-4">{review.review}</p>
      <button className="hidden md:block mt-2 text-[11px] font-semibold text-[#4285f4]">See More</button>
    </div>
  );
});
