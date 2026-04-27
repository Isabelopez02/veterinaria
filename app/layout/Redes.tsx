"use client";

import React from 'react';
// Importamos los equivalentes de Hugeicons
import { 
  ContactIcon, 
  InstagramIcon, 
  Facebook02Icon 
} from 'hugeicons-react';

export default function Redes() {
  return (
    <div className="fixed left-0 top-0 h-full w-20 z-50 hidden lg:flex flex-col items-center justify-center gap-8 text-gray-400">
      
      {/* Iconos de Hugeicons */}
      <div className="flex flex-col items-center gap-6">
        <a href="tel:+51999999999" className="hover:text-[#4B0082] transition-colors cursor-pointer">
          <ContactIcon size={22} variant="stroke" />
        </a>
        <a href="#" className="hover:text-[#4B0082] transition-colors cursor-pointer">
          <InstagramIcon size={22} variant="stroke" />
        </a>
        <a href="#" className="hover:text-[#4B0082] transition-colors cursor-pointer">
          <Facebook02Icon size={22} variant="stroke" />
        </a>
      </div>

      {/* Línea vertical identica al diseño */}
      <div className="h-24 w-[1px] bg-gray-200"></div>

      {/* Texto Vertical */}
      <div className="vertical-text text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 select-none">
        Siguenos
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