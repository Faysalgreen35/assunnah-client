import { memo } from "react";
import Image from "next/image";

interface Props {
  src: string;
  index: number;
}

export const _LogoItem = memo(function LogoItem({ src, index }: Props) {
  return (
    <div
      className="relative shrink-0 bg-white transition-all duration-300 flex items-center justify-center hover:shadow-lg"
      style={{
        width: "clamp(150px, 30vw, 220px)",
        height: "clamp(85px, 15vw, 120px)",
        border: "3px solid #ddc9a0",
        padding: "12px",
        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        boxShadow: "0 8px 16px rgba(164, 114, 44, 0.15), 0 2px 4px rgba(164, 114, 44, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
        backgroundImage: "linear-gradient(135deg, #ffffff 0%, #faf8f5 100%)"
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
