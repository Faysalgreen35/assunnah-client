import Image from "next/image";
import Link from "next/link";

interface Props {
  img: string;
  label: string;
  flag?: string;
}

export function _AbroadCard({ img, label, flag }: Props) {
  return (
    <Link href="/collections" className="group flex flex-col gap-2">
      <div
        className="relative w-full overflow-hidden rounded-xl transition-all group-hover:shadow-md"
        style={{ aspectRatio: "1", border: "1.5px solid #ddc9a0" }}
      >
        <Image src={img} alt={label} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width:768px) 33vw, 15vw" />
        {flag && (
          <div className="absolute top-2 right-2 h-6 w-6 overflow-hidden rounded-full border-2 border-white shadow-sm">
            <Image src={flag} alt="flag" fill className="object-cover" sizes="24px" />
          </div>
        )}
      </div>
      <p className="text-center text-[11px] font-semibold text-[#666] group-hover:text-[#a4722c] transition-colors leading-4">{label}</p>
    </Link>
  );
}
