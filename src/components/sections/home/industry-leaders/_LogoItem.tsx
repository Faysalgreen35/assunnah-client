import { memo } from "react";
import Image from "next/image";

interface Props {
  src: string;
  index: number;
}

export const _LogoItem = memo(function LogoItem({ src, index }: Props) {
  return (
    <div
      className="relative shrink-0 overflow-hidden bg-white transition-all duration-300"
      style={{
        width: "clamp(130px, 25vw, 240px)",
        height: "clamp(70px, 12vw, 100px)",
        borderRadius: 999,
        border: "1.5px solid #ddc9a0"
      }}
    >
      <Image
        src={src}
        alt={`Partner ${index + 1}`}
        fill
        className="object-contain p-2"
        sizes="(max-width: 640px) 130px, (max-width: 1024px) 160px, 240px"
      />
    </div>
  );
});
