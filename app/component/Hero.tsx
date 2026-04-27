"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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

const AnimatedPaw = ({
  className,
  delay = 0,
  duration = 4,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setOpacity((prev) => (prev === 0 ? 0.5 : 0));
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
  const paws = [
    { id: 1, className: "absolute left-[8%] top-[18%] h-28 w-28 md:h-40 md:w-40 -rotate-12 text-purple-50", delay: 0, duration: 4 },
    { id: 2, className: "absolute right-[10%] top-[10%] h-20 w-20 md:h-32 md:w-32 rotate-45 text-purple-50", delay: 0.5, duration: 5 },
    { id: 3, className: "absolute right-[2%] top-[45%] h-16 w-16 md:h-24 md:w-24 rotate-12 text-purple-50", delay: 1, duration: 3.5 },
    { id: 4, className: "absolute left-[4%] bottom-[32%] h-14 w-14 md:h-20 md:w-20 -rotate-12 text-[#4B0082]", delay: 0.3, duration: 4.5 },
    { id: 5, className: "hidden sm:block absolute left-[22%] bottom-[22%] h-10 w-10 md:h-12 md:w-12 rotate-12 text-[#4B0082]", delay: 0.8, duration: 3.8 },
    { id: 6, className: "hidden sm:block absolute left-[48%] bottom-[28%] h-12 w-12 md:h-16 md:w-16 -rotate-6 text-[#4B0082]", delay: 1.2, duration: 5.2 },
    { id: 7, className: "hidden md:block absolute right-[18%] bottom-[18%] h-14 w-14 rotate-[35deg] text-[#4B0082]", delay: 0.4, duration: 4.2 },
  ];

  return (
    <div className="md:px-20 relative min-h-screen w-full overflow-hidden bg-white">
      {/* Contenido principal */}
      <main className="container mx-auto flex flex-col items-center px-6 pt-10 pb-32 md:pt-16 lg:flex-row lg:px-16 relative z-10 min-h-screen">
        
        {/* Texto */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-[#222]"
          >
            CUIDADO REAL<br />
            PARA AMIGOS<br />
            REALES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-base md:text-lg text-gray-500 max-w-md mx-auto lg:mx-0"
          >
            Consultas, vacunas y emergencias en un solo lugar
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 rounded-lg bg-[#4B0082] px-8 py-4 font-bold text-white shadow-lg hover:bg-purple-900 transition-all"
          >
            NUESTROS SERVICIOS
          </motion.button>
        </div>

        {/* Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px] lg:h-[500px] lg:w-[500px] overflow-hidden bg-[#4B0082]"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          >
            <Image
              src="/img/hero.png"
              alt="Mascotas felices"
              fill
              className="object-cover object-top p-4"
            />
          </motion.div>
        </div>
      </main>

      {/* Huellas */}
      {paws.map((paw) => (
        <AnimatedPaw key={paw.id} className={paw.className} delay={paw.delay} duration={paw.duration} />
      ))}

      {/* Onda inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="relative block h-[100px] sm:h-[130px] md:h-[150px] w-full fill-[#4B0082]"
        >
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </div>
  );
}