import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  slug: string;
  img: string;
}

export const _ArchCard = memo(function ArchCard({ name, slug, img }: Props) {
  return (
    <Link href={`/categories/${slug}`} className="group flex flex-col items-center">
      <div
        className="relative w-full overflow-hidden bg-white transition-all duration-300 group-hover:shadow-lg"
        style={{
          aspectRatio: "3 / 4",
          border: "1.5px solid #ddc9a0",
          borderRadius: "50% 50% 10px 10px / 38% 38% 10px 10px",
        }}
      >
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <p className="mt-4 text-center text-[13px] font-semibold text-[#555] group-hover:text-[#a4722c] transition-colors">
        {name}
      </p>
    </Link>
  );
});
