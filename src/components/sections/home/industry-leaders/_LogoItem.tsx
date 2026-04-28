import { memo } from "react";
import Image from "next/image";

interface Props {
  src: string;
  index: number;
}

export const _LogoItem = memo(function LogoItem({ src, index }: Props) {
  return (
    <div
      className="relative shrink-0 bg-white transition-all duration-300"
      style={{
        width: "clamp(130px, 25vw, 198px)",
        height: "clamp(70px, 12vw, 100px)",
        border: "1.5px solid #ddc9a0",
        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
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
