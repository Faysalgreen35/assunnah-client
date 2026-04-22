"use client";

import Link from "next/link";
import { GoldDivider } from "@/components/common/GoldDivider";
import { SwiperRow } from "@/components/common/SwiperRow";
import { _FeaturedPost } from "./_FeaturedPost";
import { _PostCard } from "./_PostCard";
import blogPosts from "@/data/blog-posts.json";

export function LatestNews() {
  const featured = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <section className="py-12 bg-bg">
      <div className="page-width">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-heading lg:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
            Latest News &amp; Updates
          </h2>
          <GoldDivider />
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
          {/* Featured Post */}
          {featured && <_FeaturedPost post={featured} />}

          {/* Carousel Section */}
          <div className="flex flex-col">
            <SwiperRow
              gridClassName="grid-cols-1"
              mobileSlides={1.2}
              tabletSlides={1.2}
              spaceBetween={16}
              showPagination={false}
            >
              {otherPosts.map((post) => (
                <_PostCard key={post.slug} post={post} variant="card" />
              ))}
            </SwiperRow>

            {/* Read All Link */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#a4722c] hover:underline mt-4">
              Read All Articles →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
