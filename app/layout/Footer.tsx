"use client";


import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full bg-white font-sans">

      {/* ─── BARRA CONTACTO ─── */}
      <div className="bg-[#4B0082] text-white py-8">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 md:gap-24 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Phone className="text-yellow-400" size={22} />
            </div>
            <div>
              <p className="font-bold text-base sm:text-lg">+51 999 999 999</p>
              <p className="text-[10px] opacity-70 italic">¿Alguna consulta? Atención 24/7</p>
            </div>
          </div>
          <div className="w-px h-10 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <MapPin className="text-yellow-400" size={22} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase">Encuéntranos</p>
              <p className="text-[10px] opacity-70">Av. Santa Rosa A-1, Ate 15487</p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white pt-14 pb-4">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-100 pb-12">
          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#4B0082">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-xl font-bold text-[#4B0082]">Happy Pets</span>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed max-w-[180px]">
              Tu clínica veterinaria de confianza, siempre a tu lado.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-black text-[#222] text-xs mb-5 uppercase tracking-widest">Servicios</h4>
            <ul className="text-[11px] text-gray-500 space-y-2.5">
              {["Consulta especializada", "Odontología", "Hemografía", "Ecografía", "Laboratorio IDEXX", "SDMA"].map((s) => (
                <li key={s} className="hover:text-purple-700 cursor-pointer transition">• {s}</li>
              ))}
            </ul>
          </div>

          {/* Guía Rápida */}
          <div>
            <h4 className="font-black text-[#222] text-xs mb-5 uppercase tracking-widest">Guía Rápida</h4>
            <ul className="text-[11px] text-gray-500 space-y-2.5">
              {["Nosotros", "Staff Médico", "Contacto"].map((s) => (
                <li key={s} className="hover:text-purple-700 cursor-pointer transition">• {s}</li>
              ))}
            </ul>
          </div>

          {/* Mapa placeholder */}
          <div className="relative h-32 w-full rounded-xl overflow-hidden bg-purple-50 border border-purple-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto text-purple-300 mb-1" size={28} />
              <p className="text-[10px] text-purple-300 font-medium">Ver en Google Maps</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <p className="text-[9px] text-gray-400 font-medium">Happy Pets 2026 | Derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}