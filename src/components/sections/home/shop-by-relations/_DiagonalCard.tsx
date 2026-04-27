import Image from "next/image";
import Link from "next/link";

interface DiagonalCardProps {
  name: string;
  slug: string;
  img: string;
  basePath?: string;
}

export function _DiagonalCard({ name, slug, img, basePath = "/categories" }: DiagonalCardProps) {
  return (
    <Link href={`${basePath}/${slug}`} className="group flex flex-col items-center gap-3">
      <div className="card-shape relative flex h-32 w-32 lg:h-40 lg:w-40 items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:shadow-[0_4px_14px_rgba(164,114,44,0.22)]">
        <div className="relative h-24 w-24 lg:h-32 lg:w-32 overflow-hidden">
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover transition-transform duration-400 group-hover:scale-110"
            sizes="192px"
          />
        </div>
      </div>

      {/* Text */}
      <p className="text-[13px] font-semibold text-[#555] group-hover:text-[#a4722c] transition-colors text-center max-w-[200px] leading-4">
        {name}
      </p>
    </Link>
  );
}
