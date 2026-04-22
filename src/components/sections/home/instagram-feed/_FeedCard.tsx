import { memo } from "react";
import Image from "next/image";

interface Props {
  src: string;
  index: number;
}

export const _FeedCard = memo(function FeedCard({ src, index }: Props) {
  return (
    <div
      className="group relative shrink-0 overflow-hidden rounded-2xl shadow-sm"
      style={{ width: 200, height: 320, border: "1.5px solid #e8dcc8" }}
    >
      <Image
        src={src}
        alt={`Instagram ${index + 1}`}
        fill
        className="object-cover transition-transform duration-400 group-hover:scale-105"
        sizes="200px"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
    </div>
  );
});
