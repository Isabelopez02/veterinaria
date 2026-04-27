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

export default function Nosotros() {

  return (
    <div className="w-full">
      
      {/* --- SECCIÓN: SOBRE NOSOTROS --- */}
      <section className="relative bg-[#4B0082] py-20 px-8 md:px-16 overflow-hidden min-h-[500px] flex items-center">
        {/* Huella gigante de fondo decorativa */}
        <CustomPaw className="absolute left-[-5%] top-[10%] h-[400px] w-[400px] text-white opacity-5 -rotate-12" />
        
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Imagen del Veterinario */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image 
              src="/vet-doctor.png" // Reemplaza con tu imagen del Dr. con el perro
              alt="Sobre Nosotros"
              width={500}
              height={600}
              className="object-contain"
            />
          </div>

          {/* Texto Sobre Nosotros */}
          <div className="w-full md:w-1/2 text-white">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-80">Amor en cada consulta</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">SOBRE NOSOTROS</h2>
            <p className="text-purple-100 leading-relaxed max-w-lg mb-8">
              Somos una clínica veterinaria comprometida con el bienestar y la salud de tu mascota. 
              Brindamos atención profesional con amor, cuidando a cada paciente como parte de nuestra familia.
            </p>
            
            {/* Tags/Botones Blancos */}
            <div className="flex flex-wrap gap-4">
              {["AMOR", "PROFESIONALISMO", "COMPROMISO"].map((item) => (
                <div key={item} className="bg-white text-[#4B0082] px-6 py-2 rounded-md font-bold text-xs shadow-md">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}