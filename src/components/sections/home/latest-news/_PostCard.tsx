import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  img: string;
  publishDate?: string;
}

interface Props {
  post: Post;
  variant?: "horizontal" | "card";
}

export const _PostCard = memo(function PostCard({ post, variant = "horizontal" }: Props) {
  if (variant === "card") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg hover:shadow-md transition-shadow h-full"
      >
        <div className="relative h-[140px] overflow-hidden">
          <Image
            src={post.img}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="320px"
          />
        </div>
        <div className="flex flex-col justify-between flex-1 p-3">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-primary">{post.category}</p>
            <h3 className="mt-1.5 text-[12px] font-bold leading-4 text-heading group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
            <p className="mt-1.5 text-[10px] text-muted line-clamp-2 leading-3">{post.excerpt}</p>
          </div>
          {post.publishDate && (
            <p className="mt-2 text-[9px] text-subtle">{new Date(post.publishDate).toLocaleDateString()}</p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex gap-0 overflow-hidden rounded-2xl border border-border bg-bg hover:shadow-md transition-shadow"
    >
      <div className="relative h-[110px] w-[110px] shrink-0 overflow-hidden">
        <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="110px" />
      </div>
      <div className="flex flex-col justify-center py-3 px-4 flex-1">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary">{post.category}</p>
        <h3 className="mt-1 text-[13px] font-bold leading-5 text-heading group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
        <p className="mt-1 text-[11px] text-muted line-clamp-2 leading-4">{post.excerpt}</p>
      </div>
    </Link>
  );
});
