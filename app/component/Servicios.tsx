"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Reutilizamos tu componente de huella con el archivo paw-icon.svg
const CustomPaw = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <div 
    className={`inline-block ${className}`} 
    style={{ 
      maskImage: 'url(/paw-icon.svg)', 
      maskRepeat: 'no-repeat', 
      maskSize: 'contain',
      WebkitMaskImage: 'url(/paw-icon.svg)',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      backgroundColor: 'currentColor',
      ...style 
    }} 
  />
);

export default function Servicios() {
  const services = [
    { title: "ONCOLOGIA", desc: "Estudio, diagnóstico y tratamiento del cáncer", img: "/servicios/ONCOLOGIA.png" },
    { title: "CONSULTA ESPECIALIZADA", desc: "Diagnóstico experto y preciso.", img: "/servicios/consulta_per.png" },
    { title: "MEDICINA FELINA", desc: "Cuidado especializado para gatos", img: "/servicios/consulta.png" },
    { title: "HEMOGRAFIA", desc: "Análisis sanguíneo completo.", img: "/servicios/hemografia.png" },
     { title: "LABORATORIO IDEXX", desc: "Estudio, diagnóstico y tratamiento del cáncer", img: "/servicios/laboratorio.png" },
  { title: "ECOGRAFIA", desc: "Diagnóstico experto y preciso.", img: "/servicios/ecografia.png" },
  { title: "SDMA", desc: "Cuidado especializado para gatos", img: "/servicios/sdma.png" },
  { title: "HEMOGRAFIA", desc: "Análisis sanguíneo completo.", img: "/servicios/hemografia.png" },
];
  return (
    <div className="w-full">

      {/* --- SECCIÓN: SERVICIOS --- */}
      <section className="relative bg-white py-24 px-8 md:px-16 overflow-hidden">
        
        {/* Huellas decorativas de fondo (Lila claro) idénticas al diseño */}
        <CustomPaw className="absolute left-[-2%] bottom-[5%] h-48 w-48 text-purple-100 rotate-12" />
        <CustomPaw className="absolute right-[-2%] top-[15%] h-64 w-64 text-purple-100 -rotate-12" />
        <CustomPaw className="absolute left-[15%] top-[10%] h-32 w-32 text-purple-100 opacity-50" />
        <CustomPaw className="absolute right-[20%] bottom-[10%] h-40 w-40 text-purple-100 opacity-40" />
        <CustomPaw className="absolute left-[40%] top-[5%] h-12 w-12 text-purple-100" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#4B0082] uppercase tracking-tight">
              CUIDAMOS A TU MEJOR AMIGO
            </h2>
            <p className="text-gray-400 mt-2 font-medium">Servicios pensados para su salud y felicidad</p>
          </div>

          {/* Grid de Tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center text-center group transition-all"
              >
                <div className="h-48 w-full relative mb-4">
                  <Image 
                    src={service.img} 
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[13px] font-black text-[#222] mb-2 tracking-wide uppercase">
                  {service.title}
                </h3>
                <p className="text-[11px] text-gray-400 leading-tight">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}