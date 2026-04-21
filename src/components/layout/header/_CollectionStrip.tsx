import Image from "next/image";
import Link from "next/link";
import type { ICollectionStripItem } from "@/types/navbar";

interface Props {
  items: ICollectionStripItem[];
}

export function _CollectionStrip({ items }: Props) {
  return (
    <div className="border-b border-[#ebebeb] bg-white">
      <div className="mx-auto max-w-[1280px] overflow-x-auto px-5 py-3 scrollbar-none">
        <div className="flex gap-6 min-w-max mx-auto justify-center">
          {items.map(item => (
            <Link
              key={item.slug}
              href={`/collections/${item.slug}`}
              className="group flex flex-col items-center text-center"
            >
              <div className="card-shape relative flex h-[78px] w-[78px] items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:shadow-[0_4px_14px_rgba(164,114,44,0.22)]">
                <div className="relative h-[58px] w-[58px] overflow-hidden">
                  <Image src={item.src} alt={item.label} fill className="object-contain" sizes="58px" />
                </div>
              </div>
              <span className="mt-2 w-[80px] text-[10.5px] font-semibold leading-[13px] text-[#3d3d3d] group-hover:text-[#a4722c] transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
