import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  img: string;
}

export const _ArchCard = memo(function ArchCard({ name, img }: Props) {
  return (
    <Link href="/collections" className="group flex flex-col items-center gap-3">
      <div
        className="relative w-full overflow-hidden transition-all duration-300 group-hover:shadow-lg"
        style={{ aspectRatio: "3/4", borderRadius: "9999px 9999px 16px 16px", border: "1.5px solid #ddc9a0", background: "#f5ede0" }}
      >
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 50vw, 25vw"
        />
      </div>
      <div className="text-center">
        <p className="text-[12px] font-semibold text-[#333] group-hover:text-[#a4722c] transition-colors leading-5 line-clamp-2 mb-1">{name}</p>
        <span className="inline-block text-[11px] font-bold text-[#a4722c] border border-[#c9973a] rounded-full px-3 py-0.5 group-hover:bg-[#a4722c] group-hover:text-white transition-colors">
          Shop Now
        </span>
      </div>
    </Link>
  );
});
