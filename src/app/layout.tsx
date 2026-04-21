import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/nextui-provider";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "As-Sunnah Store",
  description: "India's first online Islamic gifting platform. Curated collections for Ramadan, Eid, Nikah, Aqiqah and every meaningful milestone.",
};

// Anti-flash script — reads localStorage before React hydrates
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('assunnah-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${assistant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full bg-bg text-heading flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
