"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CustomPaw } from "../ui/customPaw";

const AnimatedPaw = ({ className, style, delay = 0, duration = 4 }: { className?: string;  style?: React.CSSProperties; delay?: number; duration?: number }) => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => setOpacity((p) => (p === 0 ? 0.3 : 0)), duration * 1000);
      setOpacity(0.3);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay, duration]);

  return (
    <motion.div animate={{ opacity }} style={style} transition={{ duration: 1.5, ease: "easeInOut" }} className={className}>
      <CustomPaw className="w-full h-full" />
    </motion.div>
  );
};

export default function Hero() {
const paws = [
  { 
    id: 1, 
    className: "absolute left-[8%] top-[18%] h-20 w-20 md:h-28 md:w-28 -rotate-12", 
    style: { color: "var(--color-brand-light)", opacity: 0.35 },
    delay: 0, 
    duration: 4 
  },
  { 
    id: 2, 
    className: "absolute right-[10%] top-[10%] h-14 w-14 md:h-20 md:w-20 rotate-45", 
    style: { color: "var(--color-brand-light)", opacity: 0.3 },
    delay: 0.5, 
    duration: 5 
  },
  { 
    id: 3, 
    className: "absolute right-[2%] top-[45%] h-12 w-12 md:h-16 md:w-16 rotate-12", 
    style: { color: "var(--color-brand-light)", opacity: 0.35 },
    delay: 1, 
    duration: 3.5 
  },
  { 
    id: 4, 
    className: "absolute left-[4%] bottom-[32%] h-10 w-10 md:h-14 md:w-14 -rotate-12", 
    style: { color: "var(--color-brand)", opacity: 0.25 },
    delay: 0.3, 
    duration: 4.5 
  },
  { 
    id: 5, 
    className: "hidden sm:block absolute left-[22%] bottom-[22%] h-8 w-8 md:h-10 md:w-10 rotate-12", 
    style: { color: "var(--color-brand)", opacity: 0.2 },
    delay: 0.8, 
    duration: 3.8 
  },
  { 
    id: 6, 
    className: "hidden sm:block absolute left-[48%] bottom-[28%] h-9 w-9 md:h-12 md:w-12 -rotate-6", 
    style: { color: "var(--color-brand-light)", opacity: 0.3 },
    delay: 1.2, 
    duration: 5.2 
  },
  { 
    id: 7, 
    className: "hidden md:block absolute right-[18%] bottom-[18%] h-10 w-10 md:h-14 md:w-14 rotate-[35deg]", 
    style: { color: "var(--color-brand)", opacity: 0.25 },
    delay: 0.4, 
    duration: 4.2 
  },
];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-white to-purple-50/30">
      <section className="section-px max-w-6xl mx-auto flex flex-col items-center justify-center pt-12 pb-28 md:pt-16 lg:flex-row relative z-10 gap-6 lg:gap-12">
        
        {/* Texto */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
            style={{ color: "var(--color-text-base)" }}
          >
            CUIDADO REAL
            <br />
            PARA AMIGOS
            <br />
            REALES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Consultas, vacunas y emergencias en un solo lugar
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 rounded-full px-8 py-3.5 font-semibold text-white shadow-md transition-all hover:shadow-lg"
            style={{ backgroundColor: "var(--color-brand)" }}
          >
            NUESTROS SERVICIOS
          </motion.button>
        </div>

        {/* Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px] overflow-hidden shadow-xl"
            style={{
              backgroundColor: "var(--color-brand-light)",
              borderRadius: "35% 65% 65% 35% / 35% 35% 65% 65%",
            }}
          >
            <Image src="/img/hero.png" alt="Mascotas felices" fill className="object-cover object-top p-5" />
          </motion.div>
        </div>
      </section>

      {/* Huellas con opacidad reducida */}
      {paws.map((paw) => (
        <AnimatedPaw key={paw.id} className={paw.className} delay={paw.delay} duration={paw.duration} style={paw.style} />
      ))}

      {/* Onda más sutil */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] opacity-70">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="block h-[80px] sm:h-[100px] md:h-[120px] w-full" style={{ fill: "var(--color-brand)" }}>
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </div>
  );
}