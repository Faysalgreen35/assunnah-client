import type { Metadata } from "next";
import Script from "next/script";
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
  manifest: "/manifest.json",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#a4722c" },
    { media: "(prefers-color-scheme: dark)", color: "#a4722c" },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "As-Sunnah",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

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
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.svg" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="As-Sunnah" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {
  try {
    var stored = localStorage.getItem('assunnah-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();`,
          }}
        />
      </head>
      <body className="min-h-full bg-bg text-heading flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
