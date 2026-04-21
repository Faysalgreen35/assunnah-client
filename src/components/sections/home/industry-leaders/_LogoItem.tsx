import Image from "next/image";

interface Props {
  src: string;
  index: number;
}

export function _LogoItem({ src, index }: Props) {
  return (
    <div
      className="relative shrink-0 overflow-hidden bg-white"
      style={{ width: 128, height: 52, borderRadius: 999, border: "1.5px solid #ddc9a0" }}
    >
      <Image src={src} alt={`Partner ${index + 1}`} fill className="object-contain p-2" sizes="128px" />
    </div>
  );
}
