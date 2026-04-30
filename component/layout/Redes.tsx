"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ContactIcon,
  InstagramIcon,
  Facebook02Icon,
  Location01Icon,
  Cancel01Icon,
} from "hugeicons-react";

const redes = [
  {
    href: "tel:+51999999999",
    icon: <ContactIcon size={18} variant="stroke" />,
    label: "Teléfono",
  },
  {
    href: "/contacto",
    icon: <Location01Icon size={18} variant="stroke" />,
    label: "Ubicacion",
  },
  {
    href: "#",
    icon: <InstagramIcon size={18} variant="stroke" />,
    label: "Instagram",
  },
  {
    href: "#",
    icon: <Facebook02Icon size={18} variant="stroke" />,
    label: "Facebook",
  },
];

export default function Redes() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ─── DISEÑO DESKTOP (Izquierda fija) ─── */}
      <div className="hidden md:flex fixed left-0 top-0 h-full w-20 z-50 flex-col items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-5 pointer-events-auto">
          {redes.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm border border-gray-100 hover:text-[#4B0082] transition-all duration-300 hover:scale-110 active:scale-95"
            >
              {icon}
            </a>
          ))}
          <div className="h-16 w-[1px] bg-gray-200 mt-2" />
          <span className="vertical-text text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 select-none mt-1">
            Siguenos
          </span>
        </div>
      </div>

      {/* ─── DISEÑO MÓVIL (Burbuja Flotante) ─── */}
      <div className="md:hidden fixed bottom-6 right-6 z-[60] flex flex-col items-center gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.5 }}
              className="flex flex-col gap-3"
            >
              {redes.map(({ href, icon, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-12 h-12 bg-[#4B0082] text-white rounded-full flex items-center justify-center shadow-xl border border-white/20"
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón Principal (Toggle) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl border border-gray-100 text-[#4B0082] active:scale-90 transition-transform"
        >
          {isOpen ? <Cancel01Icon size={24} /> : <Location01Icon size={24} />}
        </button>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}</style>
    </>
  );
}