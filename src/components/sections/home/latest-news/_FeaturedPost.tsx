import Image from "next/image";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  img: string;
}

interface Props {
  post: Post;
}

export function _FeaturedPost({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative overflow-hidden rounded-2xl"
      style={{ height: 400, maxHeight: 500, border: "1.5px solid var(--color-border)" }}
    >
      <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="50vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5 text-white">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-light mb-1">{post.category}</p>
        <h3 className="text-lg font-bold leading-6 line-clamp-2">{post.title}</h3>
        <p className="mt-1.5 text-[12px] text-white/75 line-clamp-2">{post.excerpt}</p>
      </div>
    </Link>
  );
}
