import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

interface OctagonalCardProps {
  name: string;
  slug: string;
  img: string;
  basePath?: string;
}

export const OctagonalCard = memo(function Card({
  name,
  slug,
  img,
  basePath = "/categories"
}: OctagonalCardProps) {
  return (
    <Link href={`${basePath}/${slug}`} className="group flex flex-col items-center gap-3">
      <div
        className="relative shrink-0 transition-all duration-300 flex items-center justify-center hover:shadow-lg"
        style={{
          width: "clamp(120px, 25vw, 180px)",
          height: "clamp(120px, 25vw, 180px)",
        }}
      >
        {/* SVG Octagon Border Background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
        >
          <polygon
            points="60,0 140,0 200,30 200,170 140,200 60,200 0,170 0,30"
            fill="#ffffff"
            stroke="#ddc9a0"
            strokeWidth="3"
            className="group-hover:stroke-[#a4722c] transition-colors duration-300"
            style={{
              filter: "drop-shadow(0 8px 16px rgba(164, 114, 44, 0.15)) drop-shadow(0 2px 4px rgba(164, 114, 44, 0.1))"
            }}
          />
        </svg>

        {/* Content wrapper */}
        <div
          className="relative z-10 flex items-center justify-center w-full h-full overflow-hidden"
          style={{
            clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
          }}
        >
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover transition-transform duration-400 group-hover:scale-110"
            sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
          />
        </div>
      </div>
      <p className="text-[12px] font-semibold text-[#555] group-hover:text-[#a4722c] transition-colors text-center max-w-[140px] leading-4">
        {name}
      </p>
    </Link>
  );
});
