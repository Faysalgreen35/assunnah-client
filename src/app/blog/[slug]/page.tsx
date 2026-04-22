import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import blogPosts from "@/data/blog-posts.json";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GoldDivider } from "@/components/common/GoldDivider";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags?: string[];
  img: string;
  publishDate?: string;
  author?: string;
  content?: {
    hero?: {
      image: string;
      alt: string;
    };
    sections?: Array<any>;
  };
}

type BlogDetailsProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailsPage({ params }: BlogDetailsProps) {
  const { slug } = await params;
  const post = (blogPosts as BlogPost[]).find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const recentPosts = (blogPosts as BlogPost[])
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 4);

  const relatedPosts = (blogPosts as BlogPost[])
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <article className="bg-bg">
        {/* Main Content + Sidebar Layout with Hero */}
        <div className="page-width py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Left Side - 3/4 Width */}
            <div className="lg:col-span-3">
              {/* Hero Image - 3/4 Width */}
              {post.content?.hero && (
                <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden border border-border mb-8">
                  <Image
                    src={post.content.hero.image}
                    alt={post.content.hero.alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="75vw"
                  />
                </div>
              )}

              {/* Article Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted">{post.publishDate}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4" style={{ fontFamily: "Georgia, serif" }}>
                  {post.title}
                </h1>
                {post.author && <p className="text-muted text-sm">By {post.author}</p>}
                <div className="mt-4">
                  <GoldDivider />
                </div>
              </div>

              {/* Content Sections */}
              {post.content?.sections && (
                <div className="space-y-8">
                  {post.content.sections.map((section: any, idx: number) => (
                    <div key={idx}>
                      {section.type === "intro" && (
                        <div>
                          {section.heading && (
                            <h2 className="text-2xl md:text-3xl font-bold text-heading mb-4">{section.heading}</h2>
                          )}
                          <p className="text-base leading-8 text-body mb-4">{section.content}</p>
                        </div>
                      )}

                      {section.type === "content" && (
                        <div>
                          {section.heading && (
                            <h2 className="text-2xl font-bold text-heading mb-4">{section.heading}</h2>
                          )}
                          <p className="text-base leading-8 text-body mb-6">{section.content}</p>
                          {section.products && (
                            <div className="space-y-4 mb-6">
                              {section.products.map((product: any, pidx: number) => (
                                <Link
                                  key={pidx}
                                  href={product.link}
                                  className="block border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                                >
                                  <div className="flex gap-4 p-4">
                                    <div className="relative w-32 h-32 shrink-0 rounded-lg overflow-hidden bg-surface">
                                      <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                        sizes="128px"
                                      />
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="text-lg font-semibold text-heading mb-2">{product.name}</h3>
                                      <p className="text-sm text-body mb-3">{product.description}</p>
                                      <span className="text-primary font-semibold text-sm">View Product →</span>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {section.type === "quote" && (
                        <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-surface p-6 rounded-lg">
                          <p className="text-lg italic text-heading font-serif mb-2">"{section.text}"</p>
                          {section.attribution && (
                            <p className="text-sm text-muted">— {section.attribution}</p>
                          )}
                        </blockquote>
                      )}

                      {section.type === "tips" && (
                        <div>
                          {section.heading && (
                            <h2 className="text-2xl font-bold text-heading mb-4">{section.heading}</h2>
                          )}
                          <ul className="space-y-3 mb-6">
                            {section.tips?.map((tip: string, tidx: number) => (
                              <li key={tidx} className="flex gap-3 text-base text-body">
                                <span className="text-primary font-bold">✓</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {section.type === "closing" && (
                        <div>
                          {section.heading && (
                            <h2 className="text-2xl font-bold text-heading mb-4">{section.heading}</h2>
                          )}
                          <p className="text-base leading-8 text-body">{section.content}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Sidebar - 1/4 Width */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Recent Articles - Smaller Cards, 3-4 Visible */}
                <div className="bg-surface rounded-xl border border-border p-5">
                  <h3 className="text-base font-bold text-heading mb-4">Recent Articles</h3>
                  <div className="space-y-3">
                    {recentPosts.slice(0, 4).map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="group flex gap-3 overflow-hidden rounded-lg border border-border hover:border-primary transition-colors"
                      >
                        <div className="relative w-16 h-16 shrink-0 rounded overflow-hidden bg-muted-bg">
                          <Image
                            src={relatedPost.img}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-wider text-primary mb-0.5 line-clamp-1">
                              {relatedPost.category}
                            </p>
                            <h4 className="text-xs font-semibold text-heading group-hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                          </div>
                          <p className="text-[9px] text-subtle">
                            {relatedPost.publishDate ? new Date(relatedPost.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : ''}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Blog Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="bg-surface rounded-xl border border-border p-5">
                    <h3 className="text-base font-bold text-heading mb-3">Blog Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog?tag=${tag}`}
                          className="inline-flex px-2.5 py-1 bg-primary/10 text-primary rounded text-xs font-semibold hover:bg-primary hover:text-white transition-colors border border-primary/20"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Featured Card */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 p-5">
                  <h3 className="text-base font-bold text-heading mb-2">Featured</h3>
                  <p className="text-xs text-body mb-3 leading-5">
                    Discover curated collections of meaningful Islamic gifts for every occasion.
                  </p>
                  <Link
                    href="/products"
                    className="inline-block px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded hover:bg-primary-hover transition-colors"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like Section - Full Width, 3 Cards in 2 columns */}
        <section className="bg-surface border-t border-b border-border py-16 mt-12">
          <div className="page-width">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-heading mb-3" style={{ fontFamily: "Georgia, serif" }}>
                You may also like
              </h2>
              <p className="text-body text-sm max-w-md">Explore more articles that might interest you</p>
            </div>

            {/* Related Articles - Bigger Cards, Only 3 */}
            <div className="grid gap-8 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg hover:shadow-xl transition-shadow h-full"
                >
                  <div className="relative aspect-square overflow-hidden bg-muted-bg">
                    <Image
                      src={relatedPost.img}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                          {relatedPost.category}
                        </span>
                        <span className="text-xs text-muted">
                          {relatedPost.publishDate ? new Date(relatedPost.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' }) : ''}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-heading group-hover:text-primary transition-colors mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm md:text-base text-body line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 text-sm font-semibold text-primary">Read More →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="page-width py-12">
          <div className="bg-surface rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h3 className="text-2xl font-bold text-heading mb-3" style={{ fontFamily: "Georgia, serif" }}>Ready to find the perfect gift?</h3>
            <p className="text-body mb-6 max-w-2xl mx-auto">Explore our full collection of Islamic gift sets and shop with confidence.</p>
            <Link href="/products" className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors">
              Shop Now →
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
