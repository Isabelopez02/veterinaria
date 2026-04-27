"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Phone, MapPin } from 'lucide-react';

export default function Staf() {
  const staff = [
    { name: "DTRA. MARIA ANGELES", img: "/doc1.png" },
    { name: "DTR. JOSE GONZALES", img: "/doc2.png" },
    { name: "DTRA. ELIZABET", img: "/doc3.png" },
    { name: "DTR. JOSE ALVAREZ", img: "/doc4.png" },
  ];

  return (
    <div className="w-full bg-white font-sans">
      
      {/* --- SECCIÓN: STAFF MEDICO --- */}
      <section className="py-20 px-8">
        <div className="container mx-auto text-center">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#4B0082] uppercase">Conoce a nuestro</span>
          <h2 className="text-4xl font-black text-[#4B0082] mt-1 mb-16 uppercase">Staff Médico</h2>

          <div className="relative flex items-center justify-center gap-4">
            {/* Botón Izquierdo */}
            <button className="absolute left-0 lg:left-10 p-2 bg-purple-100 rounded-full text-[#4B0082] hover:bg-purple-200 transition">
              <ChevronLeft size={24} />
            </button>

            {/* Grid de Doctores */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {staff.map((doc, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4">
                    {/* El círculo lila detrás */}
                    <div className="absolute inset-0 bg-purple-100 rounded-full scale-95 translate-y-2"></div>
                    <Image 
                      src={doc.img} 
                      alt={doc.name}
                      fill
                      className="object-contain relative z-10"
                    />
                  </div>
                  <h3 className="text-[12px] font-black text-[#222] mb-1">{doc.name}</h3>
                  <button className="text-[10px] text-gray-400 border-b border-gray-300 pb-1 hover:text-purple-700 hover:border-purple-700 transition">
                    Reservar cita →
                  </button>
                </div>
              ))}
            </div>

            {/* Botón Derecho */}
            <button className="absolute right-0 lg:right-10 p-2 bg-purple-100 rounded-full text-[#4B0082] hover:bg-purple-200 transition">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN: NUESTROS CONSENTIDOS (Galería) --- */}
      <section className="py-10">
        <div className="container mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-20 bg-[#4B0082]"></div>
            <h2 className="text-3xl font-black text-[#4B0082] uppercase">Nuestros Consentidos</h2>
            <div className="h-[2px] w-20 bg-[#4B0082]"></div>
          </div>
        </div>
        
        {/* Imágenes en tira completa */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[300px] md:h-[400px]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative overflow-hidden group">
              <Image 
                src={`/pet-gallery-${i}.jpg`} 
                alt="Pet"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- BARRA DE CONTACTO RÁPIDO --- */}
      <div className="bg-[#4B0082] text-white py-6">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-center gap-12 md:gap-24">
          <div className="flex items-center gap-4">
            <Phone className="text-white" size={24} />
            <div>
              <p className="font-bold text-lg">+51 999 999 999</p>
              <p className="text-[10px] opacity-70 italic">¿Alguna consulta? Atención 24/7</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-white" size={24} />
            <div>
              <p className="text-xs font-bold uppercase">Encuéntranos</p>
              <p className="text-[10px] opacity-70">cuadra de Qhata Plaza, Av. Santa Rosa A-1, Ate 15487</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER FINAL --- */}
      <footer className="bg-white pt-16 pb-4">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-100 pb-12">
          {/* Logo y Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="#4B0082"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
               <span className="text-xl font-bold text-[#4B0082]">Happy Pets</span>
            </div>
          </div>

          {/* Columna Servicios */}
          <div>
            <h4 className="font-black text-[#222] text-xs mb-6 uppercase tracking-widest">Servicios</h4>
            <ul className="text-[11px] text-gray-500 space-y-3">
              <li>• Consulta especializada</li>
              <li>• Odontología</li>
              <li>• Hemografía</li>
              <li>• Ecografía</li>
              <li>• Laboratorio IDEXX</li>
              <li>• SDMA</li>
            </ul>
          </div>

          {/* Columna Guía Rápida */}
          <div>
            <h4 className="font-black text-[#222] text-xs mb-6 uppercase tracking-widest">Guía Rápida</h4>
            <ul className="text-[11px] text-gray-500 space-y-3">
              <li>• Nosotros</li>
              <li>• Staff Medico</li>
              <li>• Contacto</li>
            </ul>
          </div>

          {/* Columna Mapa */}
          <div className="relative h-32 w-full rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
            <Image 
              src="/map-placeholder.jpg" // Imagen de Google Maps
              alt="Ubicación"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8">
          <p className="text-[9px] text-gray-400 font-medium">Happy Pets 2026 | Derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}