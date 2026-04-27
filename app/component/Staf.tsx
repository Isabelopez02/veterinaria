"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, MapPin } from "lucide-react";

const staff = [
  { name: "DTRA. MARIA ANGELES", specialty: "Medicina General", img: "/doc1.png" },
  { name: "DTR. JOSE GONZALES", specialty: "Cirugía Veterinaria", img: "/doc2.png" },
  { name: "DTRA. ELIZABET", specialty: "Odontología", img: "/doc3.png" },
  { name: "DTR. JOSE ALVAREZ", specialty: "Ecografía", img: "/doc4.png" },
];

// Cuántas tarjetas mostrar por viewport
function useSlideCount() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(4);
      else if (window.innerWidth >= 640) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

export default function Staf() {
  const [current, setCurrent] = useState(0);
  const slideCount = useSlideCount();
  const maxIndex = Math.max(0, staff.length - slideCount);
  const dragStart = useRef<number | null>(null);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  // Swipe touch
  const onTouchStart = (e: React.TouchEvent) => {
    dragStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    dragStart.current = null;
  };

  const cardWidthPercent = 100 / slideCount;

  return (
    <div className="w-full bg-white font-sans">

      {/* ─── STAFF MÉDICO ─── */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#4B0082] uppercase">
              Conoce a nuestro
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#4B0082] mt-1 uppercase">
              Staff Médico
            </h2>
            <div className="w-12 h-1 bg-yellow-400 rounded-full mx-auto mt-3" />
          </div>

          {/* Carrusel */}
          <div className="relative">
            {/* Botón izquierdo */}
            <button
              onClick={prev}
              disabled={current === 0}
              className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg text-[#4B0082] hover:bg-purple-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Ventana del carrusel */}
            <div
              className="overflow-hidden mx-6 sm:mx-8"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <motion.div
                className="flex"
                animate={{ x: `-${current * cardWidthPercent}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {staff.map((doc, index) => (
                  <div
                    key={index}
                    style={{ minWidth: `${cardWidthPercent}%` }}
                    className="px-3 flex-shrink-0"
                  >
                    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-purple-50 hover:border-purple-200">
                      {/* Imagen con fondo */}
                      <div className="relative h-52 sm:h-60 bg-gradient-to-b from-purple-50 to-purple-100 flex items-end justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-purple-100 opacity-50 group-hover:opacity-70 transition" />
                        <Image
                          src={doc.img}
                          alt={doc.name}
                          fill
                          className="object-contain object-bottom p-4 relative z-10 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Info */}
                      <div className="p-5 text-center">
                        <h3 className="text-xs sm:text-[13px] font-black text-[#222] mb-1 leading-tight">
                          {doc.name}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-purple-400 mb-3 font-medium">
                          {doc.specialty}
                        </p>
                        <button className="w-full bg-[#4B0082] hover:bg-purple-900 text-white text-[10px] sm:text-xs font-bold py-2 px-4 rounded-full transition active:scale-95">
                          Reservar cita →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Botón derecho */}
            <button
              onClick={next}
              disabled={current === maxIndex}
              className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg text-[#4B0082] hover:bg-purple-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${
                  i === current
                    ? "w-6 h-2.5 bg-[#4B0082]"
                    : "w-2.5 h-2.5 bg-purple-200 hover:bg-purple-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

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

        <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[240px] sm:h-[320px] md:h-[400px]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative overflow-hidden group">
              <Image
                src={`/pet-gallery-${i}.jpg`}
                alt={`Mascota ${i}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/20 transition duration-500" />
            </div>
          ))}
        </div>
      </section>

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