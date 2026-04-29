"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { staff } from "../types/staf";
import { CardDoctor } from "./ui/CardsDoctor";

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

  const onTouchStart = (e: React.TouchEvent) => { dragStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    dragStart.current = null;
  };

  const cardWidthPercent = 100 / slideCount;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-px container mx-auto">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span
            className="block text-[10px] font-black tracking-[0.4em] uppercase mb-2"
            style={{ color: "var(--color-brand)" }}
          >
            Conoce a nuestro
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase"
            style={{ color: "var(--color-brand)" }}
          >
            Staff Médico
          </h2>
          <div className="w-10 h-1 rounded-full mx-auto mt-3" style={{ backgroundColor: "var(--color-accent)" }} />
        </motion.div>

        {/* Carrusel */}
        <div className="relative">

          {/* Botón prev */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-3 sm:-left-5 top-[40%] -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white shadow-md transition hover:shadow-lg disabled:opacity-25 disabled:cursor-not-allowed"
            style={{ color: "var(--color-brand)", border: "1px solid var(--color-brand-light)" }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Track */}
          <div
            className="overflow-hidden mx-5 sm:mx-7"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${current * cardWidthPercent}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              {staff.map((doc, index) => (                
                <div
                  key={index}
                  style={{ minWidth: `${cardWidthPercent}%` }}
                  className="px-2.5 shrink-0"
                >
                  <CardDoctor doc={doc} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Botón next */}
          <button
            onClick={next}
            disabled={current === maxIndex}
            className="absolute -right-3 sm:-right-5 top-[40%] -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white shadow-md transition hover:shadow-lg disabled:opacity-25 disabled:cursor-not-allowed"
            style={{ color: "var(--color-brand)", border: "1px solid var(--color-brand-light)" }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === current ? "var(--color-brand)" : "var(--color-brand-light)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}