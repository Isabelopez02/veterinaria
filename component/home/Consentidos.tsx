"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { consentidosData, Consentido } from "../../types/concentido";

export default function Concentidos() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-px container mx-auto text-center mb-10"
      >
        <span
          className="block text-[10px] font-black tracking-[0.4em] uppercase mb-2"
          style={{ color: "var(--color-brand)" }}
        >
          Ellos nos inspiran
        </span>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-[80px] rounded-full" style={{ backgroundColor: "var(--color-brand-light)" }} />
          <h2
            className="text-2xl sm:text-3xl font-black uppercase"
            style={{ color: "var(--color-brand)" }}
          >
            Nuestros Consentidos
          </h2>
          <div className="h-px flex-1 max-w-[80px] rounded-full" style={{ backgroundColor: "var(--color-brand-light)" }} />
        </div>
      </motion.div>

      {/* Galería */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[220px] sm:h-[300px] md:h-[380px]">
        {consentidosData.map((pet: Consentido, i: number) => (
          <motion.div
            key={pet.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative overflow-hidden group"
          >
            <Image
              src={pet.img}
              alt={pet.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay gradiente en hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(to top, rgba(75,0,130,0.45) 0%, transparent 60%)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}