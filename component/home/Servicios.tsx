"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link"; // 1. Importamos Link
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "../../types/servicio";

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

export default function Servicios() {
  const doubleServices = [...services, ...services];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: "start", 
      loop: true, 
      skipSnaps: false, 
      duration: 30 
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative pt-24 md:pt-32 pb-0 overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-purple-100/20">
      
      <CustomPaw className="absolute left-[-5%] top-[10%] h-[500px] w-[500px] text-purple-100/40 -rotate-12 z-0" />
      <CustomPaw className="absolute right-[-10%] top-[30%] h-[400px] w-[400px] text-purple-100/30 rotate-12 z-0" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">
          
          <div className="w-full lg:w-[400px] shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[12px] font-black tracking-[0.4em] uppercase block mb-4 text-purple-600">
                Lo que ofrecemos
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] uppercase mb-6 text-gray-900">
                CUIDAMOS <br />
                A TU <span className="text-purple-700">MEJOR</span> <br />
                <span className="text-purple-700">AMIGO</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-[320px]">
                Servicios especializados con tecnología de punta para garantizar la salud y felicidad de tus mascotas.
              </p>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={scrollPrev}
                  className="w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg z-20"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={scrollNext}
                  className="w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg z-20"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="w-full overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {doubleServices.map((service, index) => (
                <div 
                  key={`${service.id}-${index}`} // Usamos el ID del servicio
                  className="flex-[0_0_280px] sm:flex-[0_0_320px] min-w-0 px-4 py-6"
                >
                  {/* 2. Envolvemos la card en un Link dinámico */}
                  <Link href={`/servicios/${service.id}`}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="bg-white rounded-[32px] p-8 h-full flex flex-col items-center text-center shadow-[0_15px_35px_rgba(75,0,130,0.08)] border border-purple-50 group cursor-pointer"
                    >
                      <div className="h-44 w-full relative mb-6">
                        <Image 
                          src={service.img} 
                          alt={service.title} 
                          fill 
                          className="object-contain transition-transform duration-500 group-hover:scale-110" 
                        />
                      </div>
                      
                      <span className="text-[10px] font-black px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider bg-purple-100 text-purple-700">
                        Servicio Especializado
                      </span>
                      
                      <h3 className="text-sm font-black mb-3 tracking-wide uppercase text-gray-800 group-hover:text-purple-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-gray-400">
                        {service.desc}
                      </p>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-purple-300" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-300">
                Explora nuestros servicios
              </span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-purple-300" />
            </div>
          </div>

        </div>
      </div>

      <div className="relative w-full overflow-hidden leading-[0] mt-16">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full h-[80px] fill-purple-700">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
      </div>
    </section>
  );
}