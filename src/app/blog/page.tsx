"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GoldDivider } from "@/components/common/GoldDivider";
import blogPosts from "@/data/blog-posts.json";

const POSTS_PER_PAGE = 4;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "All",
    ...Array.from(new Set(blogPosts.map((post: any) => post.category))),
  ];

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return blogPosts;
    return blogPosts.filter((post: any) => post.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const featuredPost = blogPosts.find((p: any) => p.featured) || blogPosts[0];

  const popularPosts = blogPosts.slice(0, 4);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <main className="bg-bg">
        {/* Hero Featured Post */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src={featuredPost.img}
            alt={featuredPost.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="page-width pb-12 text-white w-full">
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  {featuredPost.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ fontFamily: "Georgia, serif" }}>
                  {featuredPost.title}
                </h1>
                <p className="text-accent-light text-sm">
                  {new Date(featuredPost.publishDate).toLocaleDateString()} • By {featuredPost.author}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-width py-12">
          {/* Category Filters */}
          <div className="mb-10 flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-surface border border-border text-body hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Main Content + Sidebar */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Grid */}
            <div className="lg:col-span-2">
              <div className="grid gap-6 md:grid-cols-2">
                {paginatedPosts.map((post: any) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface hover:shadow-lg transition-shadow h-full"
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted-bg">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-5">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted">
                            {new Date(post.publishDate).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-sm md:text-base font-bold text-heading group-hover:text-primary transition-colors mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-xs md:text-sm text-body line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-4">
                  <span className="text-sm text-muted">
                    {currentPage} / of {totalPages}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg border border-border text-body hover:border-primary disabled:opacity-50 transition-colors"
                    >
                      ← Prev
                    </button>
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg border border-border text-body hover:border-primary disabled:opacity-50 transition-colors"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Popular Posts */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold text-heading mb-6" style={{ fontFamily: "Georgia, serif" }}>
                  Popular Posts
                </h3>
                <div className="space-y-5">
                  {popularPosts.map((post: any) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex gap-4 overflow-hidden rounded-xl border border-border bg-surface hover:shadow-md transition-shadow p-3"
                    >
                      <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={post.img}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="96px"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-1 min-w-0">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                            {post.category}
                          </p>
                          <h4 className="text-xs md:text-sm font-bold text-heading group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                        </div>
                        <p className="text-[10px] text-subtle">
                          {new Date(post.publishDate).toLocaleDateString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-surface">
          <div className="page-width py-12">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-heading mb-3" style={{ fontFamily: "Georgia, serif" }}>
                Find the Perfect Gift
              </h2>
              <p className="text-body mb-6 max-w-2xl mx-auto">
                Explore our complete collection of Islamic gift sets, prayer essentials, and meaningful presents for every occasion.
              </p>
              <Link
                href="/products"
                className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors"
              >
                Shop Now →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
