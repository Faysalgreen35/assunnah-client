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
  icons: {
    icon: [
      { url: "/logo/new-logo-removebg-preview.png", type: "image/png", sizes: "32x32" },
      { url: "/logo/new-logo-removebg-preview.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/logo/new-logo-removebg-preview.png", sizes: "180x180", type: "image/png" },
    ],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5efe6" },
    { media: "(prefers-color-scheme: dark)", color: "#1a2655" },
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
        <link rel="icon" href="/logo/new-logo-removebg-preview.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo/new-logo-removebg-preview.png" />
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
