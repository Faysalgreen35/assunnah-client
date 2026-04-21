import Image from "next/image";
import Link from "next/link";

interface CircleItem {
  name: string;
  slug: string;
  img: string;
}

export function CircleCardsRow({ items, basePath = "/categories" }: { items: CircleItem[]; basePath?: string }) {
  return (
    <div className="overflow-x-auto scrollbar-none">
      <div className="flex gap-6 lg:gap-8 min-w-max justify-center px-4 pb-2">
        {items.map(item => (
          <Link key={item.slug} href={`${basePath}/${item.slug}`} className="group flex flex-col items-center gap-3">
            <div className="relative h-32 w-32 lg:h-36 lg:w-36 overflow-hidden rounded-full border-[2.5px] border-[#ddc9a0] shadow-sm transition-all duration-300 group-hover:border-[#a4722c] group-hover:shadow-md">
              <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-400 group-hover:scale-110" sizes="144px" />
            </div>
            <p className="text-[12px] font-semibold text-[#555] group-hover:text-[#a4722c] transition-colors text-center max-w-[130px] leading-4">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
