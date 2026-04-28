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
        width: "clamp(100px, 20vw, 160px)",
        height: "clamp(50px, 10vw, 70px)",
        borderRadius: 999,
        border: "1.5px solid #ddc9a0"
      }}
    >
      <Image
        src={src}
        alt={`Partner ${index + 1}`}
        fill
        className="object-contain p-2"
        sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, 160px"
      />
    </div>
  );
});
