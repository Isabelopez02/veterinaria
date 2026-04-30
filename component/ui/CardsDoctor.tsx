"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Staff } from "../../types/staf";
import { ArrowRight01Icon as ArrowRightIcon } from "hugeicons-react";

interface CardsDoctorProps {
  doc: Staff;
  small?: boolean;
}

export const CardDoctor = ({ doc, small = false }: CardsDoctorProps) => {
  return (
    <Link href={`/staff-medico/${doc.id}`} className="block h-full group">
      <div
        className={`group rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:shadow-xl${
          small ? 'p-0' : 'p-0' 
        }`}
        style={{ borderColor: "var(--color-brand-light)" }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-brand)")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-brand-light)")}
      >
        {/* Contenedor de Imagen con Gradiente */}
        <div
          className="relative h-56 flex items-end justify-center overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--color-brand-light), #f3e8ff)" }}
        >
          <Image
            src={doc.img}
            alt={doc.name}
            fill
            className="object-contain object-bottom p-4 z-10 transition-transform duration-700 group-hover:scale-110"
          />
          {/* Círculo decorativo de fondo al hacer hover */}
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full scale-150 blur-3xl" />
        </div>

        {/* Información del Doctor */}
        <div className="px-6 py-6 text-center">
          <h3
            className="text-[13px] font-black uppercase leading-tight mb-1.5 tracking-wide"
            style={{ color: "var(--color-text-base)" }}
          >
            {doc.name}
          </h3>
          <p
            className="text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{ color: "var(--color-brand)" }}
          >
            {doc.specialty}
          </p>
          
          {/* Link estilizado como "Ver detalles" - NO es un botón */}
          <div
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all group-hover:gap-3 cursor-pointer"
            style={{ color: "var(--color-brand)" }}
          >
            Ver detalles
            <ArrowRightIcon 
              size={12} 
              className="transition-transform group-hover:translate-x-1" 
            />
          </div>
        </div>
      </div>
    </Link>
  );
};