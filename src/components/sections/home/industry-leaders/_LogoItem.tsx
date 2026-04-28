import { memo } from "react";
import Image from "next/image";

interface Props {
  src: string;
  index: number;
}

export const _LogoItem = memo(function LogoItem({ src, index }: Props) {
  return (
    <div
      className="relative shrink-0 transition-all duration-300 flex items-center justify-center hover:shadow-lg group"
      style={{
        width: "clamp(150px, 30vw, 220px)",
        height: "clamp(85px, 15vw, 120px)",
      }}
    >
      {/* SVG Octagon Border Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 120"
        preserveAspectRatio="none"
      >
        <polygon
          points="60,0 140,0 200,30 200,90 140,120 60,120 0,90 0,30"
          fill="#ffffff"
          stroke="#ddc9a0"
          strokeWidth="3"
          style={{
            filter: "drop-shadow(0 8px 16px rgba(164, 114, 44, 0.15)) drop-shadow(0 2px 4px rgba(164, 114, 44, 0.1))"
          }}
        />
      </svg>

      {/* Content wrapper */}
      <div
        className="relative z-10 flex items-center justify-center w-full h-full"
        style={{
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
    </div>
  );
});
