import Image from "next/image";
import Link from "next/link";
import type { ICollectionStripItem } from "@/types/navbar";

interface Props {
  items: ICollectionStripItem[];
}

export function _CollectionStrip({ items }: Props) {
  return (
    <div className="border-b border-[#ebebeb] bg-white">
      <div className="mx-auto max-w-[1280px] overflow-x-auto px-5 py-4 scrollbar-none">
        <div className="flex gap-4 sm:gap-5 md:gap-6 min-w-max mx-auto justify-center">
          {items.map(item => (
            <Link
              key={item.slug}
              href={`/collections/${item.slug}`}
              className="group flex flex-col items-center text-center"
            >
              <div
                className="relative transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                style={{
                  width: "90px",
                  height: "90px",
                }}
              >
                {/* SVG Octagon Border Background */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30"
                    fill="#ffffff"
                    stroke="#ddc9a0"
                    strokeWidth="2"
                    className="group-hover:stroke-[#a4722c] transition-colors duration-300"
                    style={{
                      filter: "drop-shadow(0 2px 6px rgba(164, 114, 44, 0.15))"
                    }}
                  />
                </svg>

                {/* Content wrapper */}
                <div
                  className="relative z-10 w-full h-full overflow-hidden"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="65px"
                  />
                </div>
              </div>
              <span className="mt-2 w-[90px] text-[10.5px] font-semibold leading-[13px] text-[#3d3d3d] group-hover:text-[#a4722c] transition-colors text-center">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
