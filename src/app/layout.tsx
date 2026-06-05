import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Bitter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingEmergencyHelp } from "@/components/layout/FloatingEmergencyHelp";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { SITE } from "@/lib/site";

const bodyFont = Manrope({ subsets: ["latin"], variable: "--font-body" });
const displayFont = Bitter({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Edmonton Water Damage Restoration`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Edmonton Water Damage Restoration`,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-canvas)] text-slate-900">
        <LocalBusinessSchema />
        <Header />
        <ViewTransition name="page-shell" enter="page-shell" exit="page-shell">
          <main>{children}</main>
        </ViewTransition>
        <FloatingEmergencyHelp />
        <Footer />
      </body>
    </html>
  );
}
