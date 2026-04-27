import type { Metadata } from "next";
import { Suspense } from "react";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MO's Ink | Professional Tattoo Studio",
  description:
    "MO's Ink — a professional tattoo studio offering custom tattoos, cover-ups, and fine-line work. Book your appointment today.",
  keywords: "tattoo, tattoo studio, custom tattoo, MO's Ink, fine line tattoo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
