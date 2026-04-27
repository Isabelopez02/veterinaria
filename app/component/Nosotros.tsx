"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CustomPaw = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
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
      ...style,
    }}
  />
);

export default function Nosotros() {
  return (
    <div className="w-full">
      <section className="relative bg-[#4B0082] py-14 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Huella decorativa de fondo */}
        <CustomPaw className="absolute left-[-8%] top-[5%] h-[300px] w-[300px] md:h-[400px] md:w-[400px] text-white opacity-5 -rotate-12 pointer-events-none" />
        <CustomPaw className="absolute right-[-5%] bottom-[5%] h-[200px] w-[200px] md:h-[300px] md:w-[300px] text-white opacity-5 rotate-12 pointer-events-none" />

        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">

          {/* Imagen — en móvil aparece primero, más pequeña */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-[220px] h-[260px] sm:w-[280px] sm:h-[340px] md:w-[380px] md:h-[460px] lg:w-[440px] lg:h-[520px]">
              {/* Blob decorativo detrás */}
              <div
                className="absolute inset-0 bg-purple-400 opacity-20 scale-110"
                style={{ borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%" }}
              />
              <Image
                src="/vet-doctor.png"
                alt="Sobre Nosotros"
                fill
                className="object-contain relative z-10 drop-shadow-2xl"
              />
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
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-purple-200">
              Amor en cada consulta
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-5 leading-tight">
              SOBRE<br className="hidden sm:block" /> NOSOTROS
            </h2>

            <div className="w-12 h-1 bg-yellow-400 rounded-full mb-5 mx-auto md:mx-0" />

            <p className="text-purple-100 leading-relaxed text-sm sm:text-base max-w-lg mx-auto md:mx-0 mb-8">
              Somos una clínica veterinaria comprometida con el bienestar y la salud de tu mascota.
              Brindamos atención profesional con amor, cuidando a cada paciente como parte
              de nuestra familia.
            </p>

            {/* Stats breves */}
            <div className="flex justify-center md:justify-start gap-6 sm:gap-10 mb-8">
              {[
                { num: "10+", label: "Años de experiencia" },
                { num: "5k+", label: "Pacientes atendidos" },
                { num: "24/7", label: "Disponibilidad" },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-yellow-400">{num}</p>
                  <p className="text-[9px] sm:text-[10px] text-purple-200 uppercase tracking-wider mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {["AMOR", "PROFESIONALISMO", "COMPROMISO"].map((item) => (
                <div
                  key={item}
                  className="bg-white text-[#4B0082] px-5 py-2 rounded-lg font-bold text-xs shadow-md hover:bg-yellow-400 hover:text-black transition"
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