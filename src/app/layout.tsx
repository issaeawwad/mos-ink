import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
