import Link from "next/link";
import announcement from "@/data/layout/announcement.json";

export function _AnnouncementBar() {
  return (
    <div className="bg-[#654321] py-2 text-center text-[11px] font-medium tracking-[0.04em] text-white">
      {announcement.text}{" "}
      <Link href={announcement.cta.href} className="underline font-bold hover:text-[#f4dda0] transition-colors">
        {announcement.cta.label}
      </Link>
    </div>
  );
}
