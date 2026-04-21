import Link from "next/link";
import { GoldDivider } from "@/components/common/GoldDivider";
import { _FeedCard } from "./_FeedCard";
import feedImages from "@/data/home/instagram-feed.json";

export function InstagramFeed() {
  return (
    <section className="py-14 bg-white">
      <div className="page-width">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#a4722c]" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            Follow us on @assunnah_store
          </h2>
          <p className="mt-2 text-[13px] text-[#999]">Join our community for daily inspiration and a closer look at our creations</p>
          <GoldDivider />
        </div>
        <div className="flex gap-4 justify-center overflow-x-auto scrollbar-none pb-2">
          {feedImages.map((src, idx) => (
            <_FeedCard key={idx} src={src} index={idx} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/contact" className="inline-block rounded-full border-2 border-[#a4722c] px-8 py-3 text-sm font-semibold text-[#a4722c] hover:bg-[#a4722c] hover:text-white transition-colors">
            Visit Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
