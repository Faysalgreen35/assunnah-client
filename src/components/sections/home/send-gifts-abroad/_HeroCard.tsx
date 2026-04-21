import Image from "next/image";
import Link from "next/link";

interface Props {
  img: string;
  label: string;
  subtitle: string;
}

export function _HeroCard({ img, label, subtitle }: Props) {
  return (
    <Link
      href="/collections"
      className="group relative col-span-2 overflow-hidden rounded-2xl"
      style={{ gridRow: "span 2", minHeight: "360px", border: "2px solid #ddc9a0" }}
    >
      <Image src={img} alt={label} fill className="object-cover transition-transform duration-400 group-hover:scale-105" sizes="30vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f4e6cc] mb-0.5">{subtitle}</p>
        <p className="text-sm font-bold text-white">{label}</p>
      </div>
    </Link>
  );
}
