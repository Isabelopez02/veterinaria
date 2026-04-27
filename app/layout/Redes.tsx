"use client";

import React from "react";
import {
  ContactIcon,
  InstagramIcon,
  Facebook02Icon,
} from "hugeicons-react";

const redes = [
  {
    href: "tel:+51999999999",
    icon: <ContactIcon size={16} variant="stroke" />,
    label: "Teléfono",
  },
  {
    href: "#",
    icon: <InstagramIcon size={16} variant="stroke" />,
    label: "Instagram",
  },
  {
    href: "#",
    icon: <Facebook02Icon size={16} variant="stroke" />,
    label: "Facebook",
  },
];

export default function Redes() {
  return (
    /* Mobile: right-4 top-1/2 (Derecha para no estorbar lectura)
       Desktop: left-0 top-0 h-full (Izquierda original)
    */
    <div className="fixed left-4 md:right-auto md:left-0 top-1/4 -translate-y-1/2 md:top-0 md:translate-y-0 md:h-full w-auto md:w-20 z-50 flex flex-col items-center justify-center pointer-events-none">
      
      <div className="flex flex-col items-center gap-4 md:gap-5 pointer-events-auto bg-white/10 md:bg-transparent p-2 md:p-0 rounded-full backdrop-blur-sm md:backdrop-blur-none">
        
        {/* Iconos */}
        {redes.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-8 h-8 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-lg md:shadow-sm border border-gray-100 hover:text-[#4B0082] transition-all duration-300 hover:scale-110 active:scale-95"
          >
            {icon}
          </a>
        ))}

        {/* Línea decorativa - Solo visible en tablets/desktop para no saturar el móvil */}
        <div className="hidden md:block h-16 w-[1px] bg-gray-200 mt-2" />

        {/* Texto vertical - Solo visible en desktop */}
        <span className="vertical-text hidden md:block text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 select-none mt-1">
          Siguenos
        </span>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}