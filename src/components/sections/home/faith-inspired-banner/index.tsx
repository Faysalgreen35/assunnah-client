import Link from "next/link";
import { _CurvedImage } from "./_CurvedImage";
import { _CircleImage } from "./_CircleImage";

export function FaithInspiredBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="page-width">
        <div
          className="flex flex-col md:flex-row items-stretch min-h-[360px] gap-0 rounded-3xl overflow-hidden relative"
          style={{ background: "#f5ede0" }}
        >
          <_CurvedImage />

          {/* Center CTA */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-12 flex-1">
            <h3
              className="mb-4 text-[26px] lg:text-[30px] font-semibold leading-tight text-[#2a1a0a]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Faith-Inspired, Heartful,<br />
              and <span className="text-[#a4722c]">Uniquely</span> Yours
            </h3>
            <p className="mb-7 text-[13px] leading-6 text-[#888] max-w-[320px]">
              Whether it&apos;s a gift for yourself or a loved one, find something truly meaningful that reflects your connection to Allah.
            </p>
            <Link
              href="/collections"
              className="inline-block rounded-full bg-[#6b4a1f] px-7 py-3 text-sm font-semibold text-white hover:bg-[#4a321a] transition-colors tracking-wide shadow-sm"
            >
              Make Your Own Hamper
            </Link>
          </div>

          <_CircleImage />
        </div>
      </div>
    </section>
  );
}
