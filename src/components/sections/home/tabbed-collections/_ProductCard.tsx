import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  price: string;
  img: string;
}

export const _ProductCard = memo(function ProductCard({ name, price, img }: Props) {
  return (
    <Link
      href="/collections"
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8dcc8] bg-white transition-all hover:shadow-md hover:border-[#c4a87a]"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width:640px) 50vw, 17vw"
        />
      </div>
      <div className="p-3 border-t border-[#f0e8d8]">
        <h3 className="text-[12px] font-semibold leading-4 text-[#222] group-hover:text-[#a4722c] line-clamp-2 mb-1">{name}</h3>
        <p className="text-xs font-bold text-[#a4722c]">{price}</p>
      </div>
    </Link>
  );
});
