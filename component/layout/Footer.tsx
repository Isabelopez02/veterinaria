"use client";

import { MapPin, Phone, PawPrint } from "lucide-react";
import { motion } from "framer-motion";

const footerServices = ["Consulta especializada", "Odontología", "Hemografía", "Ecografía", "Laboratorio IDEXX", "SDMA"];
const footerLinks = ["Nosotros", "Staff Médico", "Contacto"];

export default function Footer() {
  return (
    <div className="w-full">
      {/* ── Barra de contacto rápido ── */}
      <div className="bg-[#4B0082] text-white py-10 md:py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
          
          {/* Teléfono */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-all">
              <Phone size={20} className="text-yellow-400" />
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold text-base md:text-lg tracking-tight">+51 999 999 999</p>
              <p className="text-[10px] opacity-60 italic tracking-wide">¿Alguna consulta? Atención 24/7</p>
            </div>
          </div>

          {/* Separador (Solo Desktop) */}
          <div className="hidden md:block w-px h-10 bg-white/20" />

          {/* Ubicación */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-all">
              <MapPin size={20} className="text-yellow-400" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Encuéntranos</p>
              <p className="text-sm opacity-90 font-medium">Av. Santa Rosa A-1, Ate 15487</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-white pt-16 pb-8">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-purple-50">

            {/* Columna 1: Marca */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-2 mb-4">
                <PawPrint size={24} className="text-[#4B0082]" />
                <span className="text-2xl font-black text-[#4B0082] tracking-tighter">Happy Pets</span>
              </div>
              <p className="text-xs leading-relaxed text-gray-500 max-w-[200px] mb-4">
                Tu clínica veterinaria de confianza, brindando amor y salud a tus mejores amigos.
              </p>
              <div className="w-10 h-1.5 bg-yellow-400 rounded-full" />
            </div>

            {/* Columna 2: Servicios */}
            <div className="text-center sm:text-left">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-6 text-gray-900">
                Servicios
              </h4>
              <ul className="space-y-3">
                {footerServices.map((s) => (
                  <li key={s} className="text-[11px] text-gray-500 hover:text-[#4B0082] hover:translate-x-1 transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-purple-300">•</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Guía */}
            <div className="text-center sm:text-left">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-6 text-gray-900">
                Guía Rápida
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((s) => (
                  <li key={s} className="text-[11px] text-gray-500 hover:text-[#4B0082] hover:translate-x-1 transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-purple-300">•</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 4: Mapa */}
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-6 text-gray-900">
                Ubicación
              </h4>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-36 w-full rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer border border-purple-100 bg-purple-50 group"
              >
                {/* Overlay de imagen opcional o solo el icono */}
                <div className="text-center z-10">
                  <MapPin className="mx-auto mb-2 text-[#4B0082] group-hover:scale-110 transition-transform" size={32} />
                  <p className="text-[10px] font-bold text-[#4B0082] uppercase tracking-wider">
                    Ver Mapa
                  </p>
                </div>
                <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors" />
              </motion.div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8">
            <p className="text-[10px] text-gray-400 font-medium tracking-widest">
              HAPPY PETS 2026 · TODOS LOS DERECHOS RESERVADOS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}