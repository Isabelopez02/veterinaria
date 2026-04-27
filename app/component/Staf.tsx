"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, } from "lucide-react";
import { staff } from "../ts/staf";

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
    </div>
  );
}