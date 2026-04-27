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
  // Configuración del carrusel: alineación inicial y arrastre libre
  const [emblaRef] = useEmblaCarousel({ 
    align: "start", 
    containScroll: "trimSnaps",
    dragFree: true 
  });

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Huellas decorativas de fondo */}
      <CustomPaw className="absolute left-[-2%] bottom-[5%] h-48 w-48 text-purple-50 rotate-12" />
      <CustomPaw className="absolute right-[-2%] top-[10%] h-64 w-64 text-purple-50 -rotate-12" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          {/* LADO IZQUIERDO: Título y texto (30% de ancho en desktop) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[11px] font-black tracking-[0.4em] uppercase text-purple-600 block mb-2"
            >
              Lo que ofrecemos
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-[#222] leading-tight uppercase"
            >
              Cuidamos a tu <br />
              <span className="text-purple-800">Mejor Amigo</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-gray-500 text-sm max-w-xs leading-relaxed"
            >
              Servicios especializados con tecnología de punta para garantizar la salud y felicidad de tus mascotas en todo momento.
            </motion.p>
            <div className="w-12 h-1.5 bg-yellow-400 rounded-full mt-8" />
          </div>

          {/* LADO DERECHO: Carrusel (70% de ancho) */}
          <div className="w-full lg:w-2/3 cursor-grab active:cursor-grabbing">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    // Efecto de rebote al aparecer
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 12,
                      delay: index * 0.05 
                    }}
                    // Efecto hover de la card
                    whileHover={{ y: -10 }}
                    className="flex-[0_0_260px] min-w-0 bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(75,0,130,0.06)] border border-purple-50 flex flex-col items-center text-center group transition-all hover:border-purple-200 hover:shadow-purple-100"
                  >
                    <div className="h-40 w-full relative mb-6 transform transition-transform group-hover:scale-110 duration-500">
                      <Image 
                        src={service.img} 
                        alt={service.title} 
                        fill 
                        className="object-contain" 
                      />
                    </div>
                    <h3 className="text-[13px] font-black text-[#222] mb-3 tracking-wide uppercase">
                      {service.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 leading-snug">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Indicador visual de que se puede arrastrar */}
            <div className="mt-8 flex items-center gap-2 text-gray-300 text-[10px] font-bold uppercase tracking-widest">
              <div className="h-[1px] w-10 bg-gray-200" />
              Desliza para ver más
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}