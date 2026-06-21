import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://spikoedu.rs";
const SITE_NAME = "Spiko Edu";
const SITE_DESCRIPTION =
  "Spiko Edu je škola jezika za nemački i engleski. Časovi prilagođeni tebi, iskusni predavači i metodologija koja stvarno radi.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Spiko Edu — Škola jezika | Nemački i Engleski",
    template: "%s | Spiko Edu",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "škola jezika",
    "nemački jezik",
    "engleski jezik",
    "kurs nemačkog",
    "kurs engleskog",
    "Goethe",
    "ÖSD",
    "IELTS",
    "Cambridge",
    "Spiko Edu",
  ],
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Spiko Edu — Škola jezika | Nemački i Engleski",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiko Edu — Škola jezika | Nemački i Engleski",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <JsonLd />
        <Script
          defer
          data-domain="spikoedu.rs"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
