"use client";

import Image from "next/image";
// Importamos los datos y la interfaz
import { consentidosData, Consentido } from "../ts/concentido";

export default function Concentidos() {
  return (
    <div className="w-full bg-white font-sans">
      {/* ─── NUESTROS CONSENTIDOS ─── */}
      <section className="py-10">
        <div className="container mx-auto text-center mb-8 px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 sm:w-20 bg-[#4B0082]" />
            <h2 className="text-2xl sm:text-3xl font-black text-[#4B0082] uppercase">
              Nuestros Consentidos
            </h2>
            <div className="h-[2px] w-12 sm:w-20 bg-[#4B0082]" />
          </div>
        </div>

        {/* Galería Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[240px] sm:h-[320px] md:h-[400px]">
          {consentidosData.map((pet: Consentido) => (
            <div key={pet.id} className="relative overflow-hidden group">
              <Image
                src={pet.img}
                alt={pet.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              {/* Overlay sutil al hacer hover */}
              <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/20 transition duration-500" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}