"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, PhoneIcon as WhatsApp } from "lucide-react";
import Image from "next/image";
import { InstagramIcon as Instagram, Facebook01Icon, Clock01Icon} from "hugeicons-react";

export default function Contacto() {
  return (
    <main className="min-h-screen bg-white">
      {/* ─── ENCABEZADO (Lila Suave) ─── */}
      <section className="bg-[#E9DFF5] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-black text-[#4B0082] uppercase tracking-tighter">
            Contacto
          </h1>
        </div>
      </section>

      {/* ─── CONTENIDO CENTRAL (Recogido) ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* LADO IZQUIERDO: CARD DE INFORMACIÓN */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-[45%] bg-white border border-gray-100 rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(75,0,130,0.04)]"
            >
              {/* Horario */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-black text-[#4B0082] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">
                  8:00 a.m - 5:00 p.m
                </span>
              </div>

              {/* Título */}
              <h2 className="text-2xl font-black text-gray-900 leading-none uppercase mb-6">
                HAPPY PETS <br />
                <span className="text-[#4B0082]">CLINICA VETERINARIA</span>
              </h2>

              {/* Botón de Acción Principal */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#FDE68A] text-[#4B0082] font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl shadow-sm mb-8 transition-colors hover:bg-[#FCD34D]"
              >
                Reservar cita
              </motion.button>

              {/* Datos de Contacto */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#4B0082] transition-colors">
                    <Mail size={16} />
                  </div>
                  <span className="text-xs font-bold text-gray-500">happyPets@hotmail.com</span>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#4B0082] transition-colors">
                    <Phone size={16} />
                  </div>
                  <span className="text-xs font-bold text-gray-500">+51 999 999 999</span>
                </div>
              </div>
            </motion.div>

            {/* LADO DERECHO: GALERÍA VISUAL (Basada en tu imagen) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-[55%] flex gap-4 h-[350px] md:h-[400px]"
            >
              {/* Columna de fotos pequeñas */}
              <div className="w-1/3 flex flex-col gap-4">
                <div className="flex-1 relative rounded-[24px] overflow-hidden bg-gray-100">
                  <Image src="/regalo-pet.jpg" alt="Pet Shop" fill className="object-cover" />
                </div>
                <div className="flex-1 relative rounded-[24px] overflow-hidden bg-gray-100">
                  <Image src="/deco-pet.jpg" alt="Interior" fill className="object-cover" />
                </div>
              </div>

              {/* Foto principal grande */}
              <div className="w-2/3 relative rounded-[32px] overflow-hidden bg-gray-200 group">
                <Image src="/fachada-pet.jpg" alt="Fachada Clinica" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── MAPA / REDES (Opcional, muy limpio) ─── */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between p-8 rounded-[32px] bg-gray-50/50 border border-gray-100">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-2">Síguenos en redes</p>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-[#4B0082] transition-colors"><Facebook01Icon size={20} /></button>
              <button className="text-gray-400 hover:text-[#4B0082] transition-colors"><Instagram size={20} /></button>
              <button className="text-gray-400 hover:text-[#4B0082] transition-colors"><WhatsApp size={20} /></button>
            </div>
          </div>
          <button className="flex items-center gap-3 text-[11px] font-black uppercase text-[#4B0082] group">
            Ver ubicación en Google Maps 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}