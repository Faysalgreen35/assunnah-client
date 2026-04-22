import { memo } from "react";
import Link from "next/link";

interface Props {
  label: string;
  price: string;
  pos: string;
}

export const _PriceBox = memo(function PriceBox({ label, price, pos }: Props) {
  return (
    <Link
      href="/collections"
      className={`absolute ${pos} group flex flex-col items-center w-[86px] rounded-xl bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all`}
      style={{ border: "1.5px dashed #c9973a" }}
    >
      <div className="flex justify-center pt-2 pb-1">
        <svg width="32" height="20" viewBox="0 0 36 22" fill="none">
          <path d="M18 11C18 11 10 3 5 6C1 8 5 14 18 11Z" fill="#c9973a" fillOpacity="0.85"/>
          <path d="M18 11C18 11 26 3 31 6C35 8 31 14 18 11Z" fill="#c9973a" fillOpacity="0.85"/>
          <path d="M18 11C18 11 10 19 5 16C1 14 5 8 18 11Z" fill="#c9973a" fillOpacity="0.6"/>
          <path d="M18 11C18 11 26 19 31 16C35 14 31 8 18 11Z" fill="#c9973a" fillOpacity="0.6"/>
          <circle cx="18" cy="11" r="3" fill="#a4722c"/>
          <rect x="16" y="11" width="4" height="9" rx="1" fill="#c9973a" fillOpacity="0.45"/>
        </svg>
      </div>
      <div className="px-2 pb-3 text-center">
        <p className="text-[8.5px] font-bold uppercase tracking-[0.1em] text-[#aaa]">{label}</p>
        <p className="text-[13px] font-extrabold text-[#222] leading-tight mt-0.5">{price}</p>
      </div>
    </Link>
  );
});
