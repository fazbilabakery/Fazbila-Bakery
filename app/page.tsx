"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

type LinkItem = {
  id: string;
  label: string;
  url: string;
  desc: string;
  icon: IconType;
  color: string;
};

const LINKS: LinkItem[] = [
  {
    id: "whatsapp",
    label: "Order via WhatsApp",
    url: "https://wa.me/6285878269410",
    desc: "Pesan kue & konsultasi cepat",
    icon: FaWhatsapp,
    color: "#22C55E",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/fazbila_bakery",
    desc: "Produk, testimoni & promo",
    icon: FaInstagram,
    color: "#E1306C",
  },
  {
    id: "maps",
    label: "Lokasi Toko",
    url: "https://maps.app.goo.gl/mStdKAbndMLrehF19",
    desc: "Ambil pesanan langsung",
    icon: FaMapMarkerAlt,
    color: "#F97316",
  },
  {
    id: "catalog",
    label: "Katalog Produk",
    url: "https://drive.google.com/drive/folders/1zVWYjDxEk8lFpg4E6TazinZCj6YvRGb7?usp=sharing",
    desc: "Lihat semua menu",
    icon: HiOutlineDocumentText,
    color: "#6366F1",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#FFF7ED] via-[#FFFDF9] to-white flex items-center justify-center px-4 overflow-hidden">

      {/* Soft bakery glow */}
      <div className="absolute -top-32 -right-32 h-[380px] w-[380px] rounded-full bg-amber-300/30 blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 h-[380px] w-[380px] rounded-full bg-orange-300/30 blur-[120px]" />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6285878269410"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-md rounded-[36px] bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_30px_80px_rgba(0,0,0,0.12)] p-8 text-center"
      >

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative rounded-full bg-gradient-to-br from-amber-400 to-orange-400 p-[4px] shadow-xl">
            <div className="rounded-full bg-white p-3">
              <Image
                src="/logo FAZBILA.png"
                alt="Fazbila Bakery"
                width={120}
                height={120}
                priority
                className="rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Brand */}
        <h1 className="mt-6 text-[28px] font-semibold tracking-tight text-zinc-800">
          Fazbila Bakery
        </h1>

        <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
          Manisnya kebahagiaan <br className="sm:hidden" />
          di setiap gigitan 🍰
        </p>

        {/* Divider */}
        <div className="my-6 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-zinc-300" />
          <span className="text-xs text-amber-500">✦</span>
          <span className="h-px w-12 bg-zinc-300" />
        </div>

        {/* CTA Primary */}
        <motion.a
          href="https://wa.me/6285878269410"
          target="_blank"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="mb-6 block rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 py-4 text-base font-semibold text-white shadow-lg shadow-amber-500/30"
        >
          🍰 Order Sekarang
        </motion.a>

        {/* Links */}
        <div className="grid gap-4">
          {LINKS.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white/70 p-4 hover:bg-amber-50 hover:shadow-md transition"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow"
                style={{ color: link.color }}
              >
                <link.icon className="text-xl" />
              </div>

              <div className="flex flex-col text-left">
                <span className="font-semibold text-zinc-800 text-sm">
                  {link.label}
                </span>
                <span className="text-xs text-zinc-500">
                  {link.desc}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs tracking-wide text-zinc-400">
          Homemade bakery • Fresh daily • Made with love
        </p>
      </motion.div>
    </main>
  );
}
