import { _GoogleBadge } from "./_GoogleBadge";
import { _ReviewCard } from "./_ReviewCard";
import reviewData from "@/data/home/google-reviews.json";

export function GoogleReviews() {
  return (
    <section className="py-12 bg-white">
      <div className="page-width">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <_GoogleBadge rating={reviewData.rating} total={reviewData.total} />
          <div className="flex gap-4 overflow-x-auto scrollbar-none flex-1 pb-1">
            {reviewData.reviews.map(r => (
              <_ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
