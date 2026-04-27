"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { services } from "../ts/servicio";

const CustomPaw = ({ className }: { className?: string }) => (
  <div
    className={`inline-block ${className}`}
    style={{
      maskImage: "url(/paw-icon.svg)",
      maskRepeat: "no-repeat",
      maskSize: "contain",
      WebkitMaskImage: "url(/paw-icon.svg)",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      backgroundColor: "currentColor",
    }}
  />
);

export default function Servicios() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Huellas decorativas */}
      <CustomPaw className="absolute -left-8 bottom-12 h-52 w-52 text-purple-50 rotate-12 pointer-events-none" />
      <CustomPaw className="absolute -right-8 top-12 h-64 w-64 text-purple-50 -rotate-12 pointer-events-none" />

      <div className="section-px container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

          {/* ── Columna izquierda: header sticky ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="w-full lg:w-[30%] lg:sticky lg:top-24 shrink-0"
          >
            <span
              className="block text-[10px] font-black tracking-[0.4em] uppercase mb-3"
              style={{ color: "var(--color-brand)" }}
            >
              Lo que ofrecemos
            </span>

            <h2
              className="text-4xl md:text-5xl font-black leading-[1.05] uppercase"
              style={{ color: "var(--color-text-base)" }}
            >
              Cuidamos<br />a tu{" "}
              <span style={{ color: "var(--color-brand)" }}>
                Mejor<br />Amigo
              </span>
            </h2>

            <p className="mt-5 text-sm leading-relaxed max-w-[260px]" style={{ color: "var(--color-text-muted)" }}>
              Servicios especializados con tecnología de punta para garantizar
              la salud y felicidad de tus mascotas en todo momento.
            </p>

            <div className="w-10 h-1 rounded-full mt-7" style={{ backgroundColor: "var(--color-accent)" }} />

            {/* Contador de servicios */}
            <p className="mt-5 text-xs font-bold" style={{ color: "var(--color-text-light)" }}>
              {services.length} servicios disponibles
            </p>
          </motion.div>

          {/* ── Columna derecha: carrusel draggable ── */}
          <div className="w-full lg:flex-1 min-w-0">
            <div
              className="overflow-hidden cursor-grab active:cursor-grabbing"
              ref={emblaRef}
            >
              <div className="flex gap-5">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, duration: 0.4 }}
                    whileHover={{ y: -6 }}
                    /* Card: ancho fijo para hacer scroll */
                    className="flex-[0_0_220px] sm:flex-[0_0_240px] min-w-0 select-none"
                  >
                    <div className="h-full rounded-2xl border border-purple-50 bg-white shadow-[0_6px_24px_rgba(75,0,130,0.06)] hover:border-purple-200 hover:shadow-[0_10px_36px_rgba(75,0,130,0.10)] transition-all duration-300 flex flex-col items-center text-center p-6 group">
                      {/* Imagen con micro-zoom */}
                      <div className="relative h-36 w-full mb-5 overflow-hidden">
                        <Image
                          src={service.img}
                          alt={service.title}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Pill de categoría */}
                      <span
                        className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-2"
                        style={{
                          backgroundColor: "var(--color-brand-light)",
                          color: "var(--color-brand)",
                        }}
                      >
                        Servicio
                      </span>

                      <h3
                        className="text-[12px] font-black uppercase leading-tight mb-1.5"
                        style={{ color: "var(--color-text-base)" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-[11px] leading-snug"
                        style={{ color: "var(--color-text-light)" }}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hint de deslizamiento */}
            <div
              className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"
              style={{ color: "var(--color-text-light)" }}
            >
              <div className="h-px w-8 rounded-full" style={{ backgroundColor: "var(--color-brand-light)" }} />
              Desliza para ver más
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}