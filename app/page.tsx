"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaBookOpen,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#FFF9F2] via-[#FDEEDC] to-[#F6E5C6] flex items-center justify-center px-5 pt-14 pb-28 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#C6A64B_1px,transparent_1px)] [background-size:24px_24px]" />

      <div
        className={`relative w-full max-w-md rounded-3xl p-7 sm:p-10 text-center transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } bg-white/90 backdrop-blur-xl shadow-2xl border border-[#EAD7A1]`}
      >
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 mb-4">
            <Image
              src="/logo.png"
              alt="Fazbila Bakery"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="text-2xl font-semibold text-[#5B2B1E] leading-snug">
            Snack & Kue Kering
            <br />
            Oleh-oleh Sukoharjo
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Untuk Acara • Instansi • Pengajian • Wisuda
          </p>

          <div className="mt-3 text-[11px] tracking-[0.2em] text-[#C6A64B] uppercase font-medium">
            Halal Certified حلال
          </div>
        </div>

        {/* CTA Utama */}
        <div className="mt-8">
          <a
            href="https://wa.me/6285878269410"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full rounded-2xl bg-gradient-to-r from-[#5B2B1E] to-[#C6A64B] text-white py-5 text-lg font-semibold shadow-lg active:scale-[0.98] transition"
          >
            <FaWhatsapp size={22} />
            Pesan Sekarang via WhatsApp
          </a>
        </div>

        {/* Katalog */}
        <div className="mt-6">
          <a
            href="https://drive.google.com/drive/folders/1zVWYjDxEk8lFpg4E6TazinZCj6YvRGb7?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm text-[#5B2B1E] font-medium hover:text-[#C6A64B] transition"
          >
            <FaBookOpen />
            Lihat Katalog Lengkap
          </a>
        </div>

        {/* Social & Maps */}
        <div className="mt-8 flex justify-center gap-10 text-[#5B2B1E]">

          <a
            href="https://www.instagram.com/fazbila.bakery?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="flex flex-col items-center hover:text-[#C6A64B] transition"
          >
            <FaInstagram size={22} />
            
          </a>

          <a
            href="https://maps.app.goo.gl/yvET3aR36MEZ5MdT8"
            target="_blank"
            className="flex flex-col items-center hover:text-[#C6A64B] transition"
          >
            <FaMapMarkerAlt size={22} />
            
          </a>
        </div>

        {/* USP */}
        <div className="mt-8 text-xs text-gray-500 leading-relaxed">
          ✔ Fresh by Order <br />
          ✔ Bisa Custom Snack Box <br />
          ✔ Kemasan Rapi & Higienis
        </div>

        {/* Footer */}
        <div className="mt-10 text-[11px] text-gray-400">
          © {new Date().getFullYear()} Fazbila Bakery <br />
          Gumpang – Kartasura, Sukoharjo
        </div>
      </div>

      {/* Sticky WhatsApp Mobile Only */}
      <div className="fixed bottom-4 left-4 right-4 sm:hidden">
        <a
          href="https://wa.me/6285878269410"
          className="flex items-center justify-center gap-3 w-full rounded-2xl bg-[#25D366] text-white py-4 font-semibold shadow-xl active:scale-[0.97] transition"
        >
          <FaWhatsapp size={20} />
          Pesan Sekarang
        </a>
      </div>

    </main>
  );
}
