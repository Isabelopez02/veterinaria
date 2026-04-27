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
    icon: <ContactIcon size={18} variant="stroke" />,
    label: "Teléfono",
    color: "bg-[#4B0082] text-white hover:bg-purple-900",
  },
  {
    href: "#",
    icon: <InstagramIcon size={18} variant="stroke" />,
    label: "Instagram",
    color: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 text-white hover:opacity-90",
  },
  {
    href: "#",
    icon: <Facebook02Icon size={18} variant="stroke" />,
    label: "Facebook",
    color: "bg-[#1877F2] text-white hover:bg-blue-700",
  },
];

export default function Redes() {
  return (
    <div className="fixed left-0 top-0 h-full w-16 z-50 hidden lg:flex flex-col items-center justify-center gap-5">
      {/* Solo iconos con círculos de colores, sin panel de fondo */}
      {redes.map(({ href, icon, label, color }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          className={`
            w-9 h-9 rounded-full flex items-center justify-center shadow-md
            transition-all duration-200 hover:scale-110 active:scale-95
            ${color}
          `}
        >
          {icon}
        </a>
      ))}

      {/* Línea vertical decorativa */}
      <div className="mt-2 h-16 w-px bg-gray-200 rounded-full" />
    </div>
  );
}