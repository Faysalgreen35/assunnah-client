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

export function _ReviewCard({ review }: Props) {
  return (
    <div className="shrink-0 w-56 rounded-2xl border border-[#e8dcc8] bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#a4722c] text-sm font-bold text-white">
          {review.initial}
        </div>
        <div>
          <p className="text-[12px] font-semibold text-[#222] leading-4">{review.name}</p>
          <p className="text-[10px] text-[#bbb]">{review.time}</p>
        </div>
      </div>
      <div className="mb-2 flex gap-0.5">
        {Array.from({ length: review.stars }).map((_, i) => (
          <span key={i} className="text-[#fbbc05] text-sm">★</span>
        ))}
      </div>
      <p className="text-[12px] leading-5 text-[#777] line-clamp-4">{review.review}</p>
      <button className="mt-2 text-[11px] font-semibold text-[#4285f4]">See More</button>
    </div>
  );
}
