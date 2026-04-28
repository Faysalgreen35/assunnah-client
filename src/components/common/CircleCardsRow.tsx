import { OctagonalCard } from "./OctagonalCard";

interface CircleItem {
  name: string;
  slug: string;
  img: string;
}

export function CircleCardsRow({ items, basePath = "/categories" }: { items: CircleItem[]; basePath?: string }) {
  return (
    <div className="overflow-x-auto scrollbar-none">
      <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 min-w-max justify-center px-4 pb-2">
        {items.map(item => (
          <OctagonalCard key={item.slug} {...item} basePath={basePath} />
        ))}
      </div>
    </div>
  );
}
