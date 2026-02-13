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
    <main className="relative min-h-screen bg-gradient-to-br from-[#FFF9F2] via-[#FDEEDC] to-[#F6E5C6] flex items-center justify-center px-6 py-14 overflow-hidden">

      {/* Pattern Halus */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#C6A64B_1px,transparent_1px)] [background-size:26px_26px]" />

      <div
        className={`relative w-full max-w-md rounded-3xl p-8 text-center transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } bg-white/80 backdrop-blur-xl shadow-2xl border border-[#EAD7A1]`}
      >
        {/* LOGO */}
        <div className="flex flex-col items-center">
          <div className="relative w-28 h-28 mb-4">
            <Image
              src="/logo.png"
              alt="Fazbila Bakery"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* HEADLINE */}
          <h1 className="text-2xl font-semibold text-[#5B2B1E] leading-snug">
            Toko Snack & Kue Kering
            <br />
            Oleh-oleh Sukoharjo
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Untuk Acara • Instansi • Pengajian • Wisuda
          </p>

          <div className="mt-3 text-xs tracking-[0.25em] text-[#C6A64B] uppercase font-medium">
            Halal Certified حلال
          </div>
        </div>

        {/* CTA UTAMA */}
        <div className="mt-8">
          <a
            href="https://wa.me/628XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full rounded-xl bg-[#5B2B1E] text-white py-4 px-6 font-medium text-base transition-all duration-300 hover:scale-[1.05] hover:bg-[#C6A64B] shadow-lg"
          >
            <FaWhatsapp size={20} />
            Pesan Sekarang via WhatsApp
          </a>
        </div>

        {/* LINK KATALOG */}
        <div className="mt-6">
          <a
            href="https://drive.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm text-[#5B2B1E] font-medium hover:text-[#C6A64B] transition"
          >
            <FaBookOpen />
            Lihat Katalog Lengkap
          </a>
        </div>

        {/* SOCIAL + MAPS */}
        <div className="mt-6 flex justify-center gap-6 text-[#5B2B1E]">
          <a
            href="https://instagram.com/fazbilabakery"
            target="_blank"
            className="hover:text-[#C6A64B] transition"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://maps.google.com/"
            target="_blank"
            className="hover:text-[#C6A64B] transition"
          >
            <FaMapMarkerAlt size={20} />
          </a>
        </div>

        {/* USP */}
        <div className="mt-8 text-xs text-gray-500 leading-relaxed">
          ✔ Fresh by Order <br />
          ✔ Bisa Custom Snack Box <br />
          ✔ Kemasan Rapi & Higienis
        </div>

        {/* FOOTER */}
        <div className="mt-10 text-[11px] text-gray-400">
          © {new Date().getFullYear()} Fazbila Bakery <br />
          Gumpang – Kartasura, Sukoharjo
        </div>
      </div>
    </main>
  );
}
