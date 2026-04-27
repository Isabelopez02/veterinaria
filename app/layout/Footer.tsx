"use client";

import { MapPin, Phone, PawPrint } from "lucide-react";
import { motion } from "framer-motion";

const footerServices = ["Consulta especializada", "Odontología", "Hemografía", "Ecografía", "Laboratorio IDEXX", "SDMA"];
const footerLinks = ["Nosotros", "Staff Médico", "Contacto"];

export default function Footer() {
  return (
    <div className="w-full">

      {/* ── Barra de contacto rápido ── */}
      <div style={{ backgroundColor: "var(--color-brand)" }} className="text-white py-8">
        <div className="section-px container mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-20 text-center sm:text-left">

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
              <Phone size={18} style={{ color: "var(--color-accent)" }} />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base">+51 999 999 999</p>
              <p className="text-[10px] opacity-60 italic mt-0.5">¿Alguna consulta? Atención 24/7</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 opacity-20 bg-white" />

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
              <MapPin size={18} style={{ color: "var(--color-accent)" }} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Encuéntranos</p>
              <p className="text-xs mt-0.5 opacity-80">Av. Santa Rosa A-1, Ate 15487</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-white pt-14 pb-6">
        <div className="section-px container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b" style={{ borderColor: "var(--color-brand-light)" }}>

          {/* Marca */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
            <div className="flex items-center gap-2">
              <PawPrint size={20} style={{ color: "var(--color-brand)" }} />
              <span className="text-lg font-black" style={{ color: "var(--color-brand)" }}>Happy Pets</span>
            </div>
            <p className="text-[11px] leading-relaxed max-w-[170px]" style={{ color: "var(--color-text-light)" }}>
              Tu clínica veterinaria de confianza, siempre a tu lado.
            </p>
            {/* Acento amarillo */}
            <div className="w-8 h-1 rounded-full mt-1" style={{ backgroundColor: "var(--color-accent)" }} />
          </div>

          {/* Servicios */}
          <div>
            <h4
              className="text-[10px] font-black uppercase tracking-[0.2em] mb-5"
              style={{ color: "var(--color-text-base)" }}
            >
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li
                  key={s}
                  className="text-[11px] cursor-pointer transition-colors hover:font-medium"
                  style={{ color: "var(--color-text-light)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-brand)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-light)")}
                >
                  · {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Guía */}
          <div>
            <h4
              className="text-[10px] font-black uppercase tracking-[0.2em] mb-5"
              style={{ color: "var(--color-text-base)" }}
            >
              Guía Rápida
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((s) => (
                <li
                  key={s}
                  className="text-[11px] cursor-pointer transition-colors"
                  style={{ color: "var(--color-text-light)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-brand)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-light)")}
                >
                  · {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Mapa */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-32 w-full rounded-xl overflow-hidden flex items-center justify-center cursor-pointer"
            style={{ backgroundColor: "var(--color-brand-light)", border: "1px solid var(--color-brand-light)" }}
          >
            <div className="text-center">
              <MapPin className="mx-auto mb-1.5" size={26} style={{ color: "var(--color-brand)" }} />
              <p className="text-[10px] font-bold" style={{ color: "var(--color-brand)" }}>
                Ver en Google Maps
              </p>
            </div>
          </motion.div>

        </div>

        {/* Copyright */}
        <div className="text-center pt-7">
          <p className="text-[10px]" style={{ color: "var(--color-text-light)" }}>
            Happy Pets 2026 · Todos los derechos reservados
          </p>
        </div>
      </footer>

    </div>
  );
}