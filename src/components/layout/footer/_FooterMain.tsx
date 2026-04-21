import Link from "next/link";
import Image from "next/image";
import type { IFooterData } from "@/types/footer";

const SocialIcon = ({ platform }: { platform: string }) => {
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    instagram: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    youtube: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    ),
    pinterest: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  };
  return <>{icons[platform] ?? null}</>;
};

interface Props {
  data: Pick<IFooterData, "about" | "columns" | "locateUs" | "contact" | "social" | "paymentMethods">;
}

export function _FooterMain({ data }: Props) {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-12">
      <div className="grid gap-8 lg:grid-cols-[220px_1fr_1fr_1fr_220px]">

        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#c9973a] bg-gradient-to-br from-[#f9eed8] to-[#e8cc88] shadow">
              <span className="text-xl font-extrabold tracking-wider text-[#654321]">AS</span>
            </div>
            <div>
              <p className="text-base font-extrabold tracking-[0.18em] text-[#1a1a1a]">AS-SUNNAH</p>
              <p className="text-[9px] tracking-[0.18em] text-[#999] uppercase">Islamic Gifting</p>
            </div>
          </Link>

          <p className="text-sm leading-6 text-[#666]">{data.about.tagline}</p>
          <p className="text-xs italic text-[#a4722c]">&ldquo;{data.about.quote}&rdquo;</p>

          <div className="flex gap-2 pt-1">
            {data.social.map(s => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4c4b0] text-[#a4722c] hover:bg-[#a4722c] hover:text-white hover:border-[#a4722c] transition-colors"
              >
                <SocialIcon platform={s.platform} />
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Columns */}
        {data.columns.map(col => (
          <div key={col.heading} className="flex flex-col gap-1.5">
            <h3 className="mb-2 text-sm font-bold text-[#1a1a1a]">{col.heading}</h3>
            {col.links.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[12.5px] text-[#666] hover:text-[#a4722c] transition-colors leading-6"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}

        {/* Locate Us + Contact + Payments */}
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="mb-2 text-sm font-bold text-[#1a1a1a]">Locate Us</h3>
            {data.locateUs.map(line => (
              <p key={line} className="text-[12.5px] leading-6 text-[#666]">{line}</p>
            ))}
          </div>

          <div>
            <h3 className="mb-1.5 text-sm font-bold text-[#1a1a1a]">Customer Care</h3>
            <a href={`tel:${data.contact.phone}`} className="text-[12.5px] font-semibold text-[#a4722c] hover:underline">
              {data.contact.phone}
            </a>
            <p className="text-[11.5px] text-[#888] mt-0.5">{data.contact.email}</p>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a4722c" strokeWidth="1.8">
                <rect x="3" y="11" width="18" height="11" rx="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span className="text-xs font-bold text-[#333]">100% SECURE<br/>Payment Gateways</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.paymentMethods.map(pay => (
                <div key={pay.name} className="relative h-6 w-10 rounded border border-[#e0d4c8] bg-white overflow-hidden">
                  <Image src={pay.src} alt={pay.name} fill className="object-contain p-0.5" sizes="40px" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
