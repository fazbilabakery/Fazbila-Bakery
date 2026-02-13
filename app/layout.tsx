import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fazbila Bakery | Snack & Oleh-oleh Sukoharjo",
  description:
    "Snack & Kue Kering Oleh-oleh Sukoharjo. Halal Certified. Pesan mudah via WhatsApp.",
  keywords: [
    "Fazbila Bakery",
    "oleh oleh sukoharjo",
    "snack box sukoharjo",
    "kue kering sukoharjo",
    "bakery sukoharjo",
    "pesan snack box via whatsapp",
  ],
  openGraph: {
    title: "Fazbila Bakery | Snack & Oleh-oleh Sukoharjo",
    description:
      "Snack & Kue Kering Oleh-oleh Sukoharjo. Halal Certified. Order cepat via WhatsApp.",
    url: "https://fazbila-bakery.vercel.app",
    siteName: "Fazbila Bakery",
    images: [
      {
        url: "https://fazbila-bakery.vercel.app/logo.png",
        width: 800,
        height: 800,
        alt: "Fazbila Bakery",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fazbila Bakery | Snack & Oleh-oleh Sukoharjo",
    description:
      "Snack & Kue Kering Oleh-oleh Sukoharjo. Halal Certified.",
    images: ["https://fazbila-bakery.vercel.app/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} antialiased bg-[#FFF8F1]`}
      >
        {children}
      </body>
    </html>
  );
}
