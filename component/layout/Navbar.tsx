"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PawPrint, Menu, X } from "lucide-react";
import { CustomPaw } from "../customPaw";

const navLinks = ["Nosotros", "Staff Médico", "Servicios", "Ubicación", "Blogs", "Contacto"];

// SVG de huella inline para el fondo decorativo
const PawBg = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="50" cy="72" rx="22" ry="18" />
    <ellipse cx="28" cy="50" rx="10" ry="13" />
    <ellipse cx="72" cy="50" rx="10" ry="13" />
    <ellipse cx="36" cy="30" rx="9" ry="11" />
    <ellipse cx="64" cy="30" rx="9" ry="11" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 overflow-hidden">
        {/* ── Huellas decorativas de fondo en el header ── */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* Usamos CustomPaw en lugar de PawBg */}
          <CustomPaw className="absolute -left-3 -top-4 w-16 h-16 text-purple-100 rotate-[-20deg]" />
          <CustomPaw className="absolute left-28 top-1 w-10 h-10 text-purple-100 rotate-[15deg]" />
          <CustomPaw className="absolute left-1/2 -translate-x-1/2 -top-3 w-14 h-14 text-yellow-100 rotate-[30deg]" />
          <CustomPaw className="absolute right-56 top-0 w-9 h-9 text-purple-100 rotate-[-10deg]" />
          <CustomPaw className="absolute right-24 -top-2 w-12 h-12 text-purple-100 rotate-[25deg]" />
          <CustomPaw className="absolute right-6 top-2 w-8 h-8 text-yellow-100 rotate-[-30deg]" />
          <CustomPaw className="absolute left-1/3 bottom-0 w-7 h-7 text-purple-100 rotate-[40deg]" />
          <CustomPaw className="absolute left-2/3 -bottom-1 w-6 h-6 text-purple-100 rotate-[-15deg]" />
        </div>

        <nav className="relative mx-auto max-w-7xl px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-purple-700 font-bold text-xl z-10">
            <PawPrint className="w-6 h-6" />
            Happy Pets
          </div>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            {navLinks.map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <span className="group-hover:text-purple-700 transition">{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-700 transition-all group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5 py-2 rounded-full shadow-md"
          >
            RESERVAR CITA
          </motion.button>

          {/* Botón hamburguesa móvil */}
          <button
            className="md:hidden relative z-10 p-2 rounded-lg text-purple-700 hover:bg-purple-50 transition"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      {/* ── DRAWER — slide desde la derecha, 50% de ancho ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay oscuro */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel — entra desde la derecha, ocupa 50vw */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 z-50 h-full w-1/2 min-w-[220px] max-w-xs bg-white shadow-2xl flex flex-col md:hidden overflow-hidden"
            >
              {/* Huellas decorativas dentro del drawer */}
              <div className="absolute inset-0 pointer-events-none select-none">
                <PawBg className="absolute -right-4 top-8 w-24 h-24 text-purple-50 rotate-[20deg]" />
                <PawBg className="absolute left-2 top-32 w-16 h-16 text-yellow-50 rotate-[-15deg]" />
                <PawBg className="absolute right-2 bottom-28 w-20 h-20 text-purple-50 rotate-[10deg]" />
                <PawBg className="absolute left-4 bottom-14 w-12 h-12 text-purple-50 rotate-[-25deg]" />
              </div>

              {/* Cabecera drawer */}
              <div className="relative flex items-center justify-between px-5 py-4 border-b border-purple-50">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-base">
                  <PawPrint className="w-5 h-5" />
                  Happy Pets
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-purple-700 hover:bg-purple-50 transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links con fade + slide escalonado */}
              <nav className="relative flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-0.5">
                {navLinks.map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 24 }}
                    transition={{ delay: i * 0.07, duration: 0.35, ease: "easeOut" }}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 py-3 px-3 rounded-xl text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-700 transition group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-200 group-hover:bg-purple-600 transition" />
                    <span className="text-sm">{item}</span>
                  </motion.a>
                ))}
              </nav>

              {/* CTA en el drawer */}
              <div className="relative px-5 pb-6 pt-3 border-t border-purple-50">
                <motion.button
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.07 + 0.1 }}
                  className="w-full bg-[#4B0082] hover:bg-purple-900 text-white font-bold py-3 rounded-full shadow-lg transition active:scale-95 text-sm"
                >
                  RESERVAR CITA
                </motion.button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}