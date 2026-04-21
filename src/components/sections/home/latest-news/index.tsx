"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { GoldDivider } from "@/components/common/GoldDivider";
import { _FeaturedPost } from "./_FeaturedPost";
import { _PostCard } from "./_PostCard";
import blogPosts from "@/data/blog-posts.json";

export function LatestNews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
            <div className="relative group">
              {/* Carousel Container */}
              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollBehavior: "smooth", msOverflowStyle: "none", scrollbarWidth: "none" }}
              >
                {otherPosts.map((post) => (
                  <div key={post.slug} className="flex-shrink-0 w-72">
                    <_PostCard post={post} variant="card" />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              {showLeftArrow && (
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-bg/90 hover:bg-surface p-2 rounded-full shadow-md transition-all"
                  aria-label="Scroll left"
                >
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {showRightArrow && (
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-bg/90 hover:bg-surface p-2 rounded-full shadow-md transition-all"
                  aria-label="Scroll right"
                >
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>

            {/* Read All Link */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#a4722c] hover:underline mt-4">
              Read All Articles →
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
