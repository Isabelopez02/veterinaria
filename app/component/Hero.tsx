"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Componente para usar tu propio SVG y poder cambiarle el color/tamaño
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

// Componente de huella con animación de aparición/desaparición al 50%
const AnimatedPaw = ({ className, delay = 0, duration = 4 }: { className?: string, delay?: number, duration?: number }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setOpacity(prev => prev === 0 ? 0.5 : 0);
      }, duration * 1000);
      
      setOpacity(0.5);
      
      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [delay, duration]);

  return (
    <motion.div
      animate={{ opacity }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className={className}
    >
      <CustomPaw className="w-full h-full" />
    </motion.div>
  );
};

export default function Hero() {
  // Configuración de huellas con diferentes tiempos
  const paws = [
    { id: 1, className: "absolute left-[8%] top-[18%] h-40 w-40 -rotate-12 text-purple-50", delay: 0, duration: 4 },
    { id: 2, className: "absolute right-[10%] top-[10%] h-32 w-32 rotate-45 text-purple-50", delay: 0.5, duration: 5 },
    { id: 3, className: "absolute right-[2%] top-[45%] h-24 w-24 rotate-12 text-purple-50", delay: 1, duration: 3.5 },
    { id: 4, className: "absolute left-[4%] bottom-[32%] h-20 w-20 -rotate-12 text-[#4B0082]", delay: 0.3, duration: 4.5 },
    { id: 5, className: "absolute left-[22%] bottom-[22%] h-12 w-12 rotate-12 text-[#4B0082]", delay: 0.8, duration: 3.8 },
    { id: 6, className: "absolute left-[48%] bottom-[28%] h-16 w-16 -rotate-6 text-[#4B0082]", delay: 1.2, duration: 5.2 },
    { id: 7, className: "absolute right-[18%] bottom-[18%] h-14 w-14 rotate-[35deg] text-[#4B0082]", delay: 0.4, duration: 4.2 },
    { id: 8, className: "absolute left-[45%] top-[42%] h-6 w-6 text-[#4B0082]", delay: 1.5, duration: 3 },
    { id: 9, className: "absolute right-[12%] top-[25%] h-5 w-5 text-[#4B0082]", delay: 0.7, duration: 3.3 },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white font-sans">
      
      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="container mx-auto flex flex-col items-center px-8 pt-12 lg:flex-row lg:px-16 relative z-10">
        
        {/* Texto */}
        <div className="w-full lg:w-1/2">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-black leading-[1.1] text-[#222] md:text-7xl"
          >
            CUIDADO REAL PARA<br />
            AMIGOS REALES
          </motion.h1>
          <p className="mt-6 text-lg text-gray-500 max-w-md">
            Consultas, vacunas y emergencias en un solo lugar
          </p>
          <button className="mt-10 rounded-lg bg-[#4B0082] px-10 py-4 font-bold text-white shadow-lg hover:bg-purple-900 transition-all active:scale-95">
            NUESTROS SERVICIOS
          </button>
        </div>

        {/* Imagen de Mascotas */}
        <div className="relative mt-16 w-full lg:mt-0 lg:w-1/2 flex justify-center">
          <div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px] overflow-hidden bg-[#4B0082]" 
               style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}>
            <Image 
              src="/img/hero.png"
              alt="Mascotas felices"
              fill
              className="object-cover object-top p-4"
            />
          </div>
        </div>
      </main>

      {/* --- HUELLAS ANIMADAS (aparecen y desaparecen al 50%) --- */}
      {paws.map((paw) => (
        <AnimatedPaw
          key={paw.id}
          className={paw.className}
          delay={paw.delay}
          duration={paw.duration}
        />
      ))}

      {/* --- ONDA INFERIOR MÁS ONDEADA (una sola capa) --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="relative block h-[150px] w-full fill-[#4B0082]">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}