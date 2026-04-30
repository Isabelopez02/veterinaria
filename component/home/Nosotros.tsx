"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <div className="w-full">
      <section
        className="relative section-px py-14 md:py-20 overflow-hidden"
        style={{ backgroundColor: "var(--color-brand)" }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-[220px] h-[260px] sm:w-[280px] sm:h-[340px] md:w-[380px] md:h-[460px] lg:w-[440px] lg:h-[520px]">
              <div
                className="absolute inset-0 opacity-20 scale-110"
                style={{ backgroundColor: "var(--color-brand-light)", borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%" }}
              />
              <Image src="/img/doctor.png" alt="Sobre Nosotros" fill className="object-contain relative z-10 drop-shadow-2xl" />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full md:w-1/2 text-white text-center md:text-left"
          >
            <span
              className="text-[10px] font-bold tracking-[0.35em] uppercase"
              style={{ color: "var(--color-brand-light)" }}
            >
              Amor en cada consulta
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-5 leading-tight">
              SOBRE<br className="hidden sm:block" /> NOSOTROS
            </h2>

            <div className="w-12 h-1 rounded-full mb-5 mx-auto md:mx-0" style={{ backgroundColor: "var(--color-accent)" }} />

            <p className="leading-relaxed text-sm sm:text-base max-w-lg mx-auto md:mx-0 mb-8 opacity-85">
              Somos una clínica veterinaria comprometida con el bienestar y la salud de tu mascota.
              Brindamos atención profesional con amor, cuidando a cada paciente como parte de nuestra familia.
            </p>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-6 sm:gap-10 mb-8">
              {[{ num: "10+", label: "Años de experiencia" }, { num: "5k+", label: "Pacientes atendidos" }, { num: "24/7", label: "Disponibilidad" }].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-black" style={{ color: "var(--color-accent)" }}>{num}</p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider mt-0.5 opacity-70">{label}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {["AMOR", "PROFESIONALISMO", "COMPROMISO"].map((item) => (
                <div
                  key={item}
                  className="px-5 py-2 rounded-lg font-bold text-xs shadow-md transition cursor-default"
                  style={{ backgroundColor: "white", color: "var(--color-brand)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-accent)";
                    (e.currentTarget as HTMLElement).style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "white";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-brand)";
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}