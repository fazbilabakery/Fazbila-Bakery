import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fazbila Bakery",
  description:
    "Manisnya Kebahagiaan di Setiap Gigitan. Pesan kue dengan mudah dan cepat melalui WhatsApp.",
  keywords: [
    "Fazbila Bakery",
    "bakery rumahan",
    "toko kue",
    "kue rumahan premium",
    "pesan kue via whatsapp",
    "bakery terdekat",
  ],
  openGraph: {
    title: "Fazbila Bakery | Kue Rumahan Premium",
    description:
      "Kue rumahan premium, fresh setiap hari. Order cepat via WhatsApp.",
    url: "https://fazbila-bakery.vercel.app",
    siteName: "Fazbila Bakery",
    images: [
      {
        url: "/logo FAZBILA.png",
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
    title: "Fazbila Bakery",
    description:
      "Kue rumahan premium, fresh setiap hari. Pesan via WhatsApp.",
    images: ["/logo FAZBILA.png"],
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
