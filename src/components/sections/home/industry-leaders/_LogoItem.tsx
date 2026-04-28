import { memo } from "react";
import Image from "next/image";

interface Props {
  src: string;
  index: number;
}

export const _LogoItem = memo(function LogoItem({ src, index }: Props) {
  return (
    <div
      className="relative shrink-0 bg-white transition-all duration-300 flex items-center justify-center"
      style={{
        width: "clamp(150px, 30vw, 220px)",
        height: "clamp(85px, 15vw, 120px)",
        border: "2.5px solid #ddc9a0",
        padding: "12px",
        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
      }}
    >
      <Image
        src={src}
        alt={`Partner ${index + 1}`}
        width={100}
        height={60}
        className="object-contain"
        sizes="(max-width: 640px) 130px, (max-width: 1024px) 160px, 240px"
      />
    </div>
  );
});
