import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingEmergencyHelp } from "@/components/layout/FloatingEmergencyHelp";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { SITE } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const bodyFont = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body" });
const displayFont = Fraunces({ subsets: ["latin"], variable: "--font-display" });

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
    images: [
      {
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Safe Home Solution & Restoration Inc. – Edmonton Water Damage Restoration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Edmonton Water Damage Restoration`,
    description: SITE.description,
    images: ["https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&h=630&q=80"],
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
        <Analytics />
      </body>
    </html>
  );
}
