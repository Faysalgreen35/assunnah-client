import Image from "next/image";
import Link from "next/link";

interface Props {
  label: string;
  img: string;
}

export function _DeliveryCard({ label, img }: Props) {
  return (
    <Link href="/collections" className="group flex flex-col items-center gap-3">
      <div
        className="relative w-full overflow-hidden rounded-2xl transition-all duration-300 group-hover:shadow-lg"
        style={{ aspectRatio: "1", border: "2px solid #ddc9a0" }}
      >
        <Image
          src={img}
          alt={label}
          fill
          className="object-cover transition-transform duration-400 group-hover:scale-105"
          sizes="(max-width:768px) 50vw, 25vw"
        />
      </div>
      <p className="text-center text-[13px] font-semibold text-[#555] group-hover:text-[#a4722c] transition-colors leading-5 max-w-[160px]">
        {label}
      </p>
    </Link>
  );
}
