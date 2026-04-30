"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, PhoneIcon as WhatsApp, MapPin } from "lucide-react";
import Image from "next/image";
import { InstagramIcon as Instagram, Facebook01Icon } from "hugeicons-react";
import { CustomPaw } from "@/component/ui/customPaw";

export default function Contacto() {
  return (
    <main className="min-h-screen bg-[#fafafa] overflow-hidden">
      {/* ─── ENCABEZADO (Lila Suave con Huellas) ─── */}
      <section className="bg-gradient-to-r from-[#E9DFF5] to-[#f3e8ff] pt-10 pb-20 relative">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <CustomPaw className="absolute left-10 top-10 w-20 h-20 rotate-[-15deg] text-[#4B0082]" />
          <CustomPaw className="absolute right-20 top-20 w-32 h-32 rotate-[25deg] text-[#4B0082]" />
          <CustomPaw className="absolute left-1/2 bottom-5 w-16 h-16 rotate-[10deg] text-yellow-500" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] font-black tracking-[0.4em] text-purple-700 uppercase mb-3 block">
              Estamos para ayudarte
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#4B0082] uppercase tracking-tighter">
              Ponte en <span className="text-yellow-600">Contacto</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTENIDO CENTRAL ─── */}
      <section className="py-16 md:py-10 relative">
        {/* Huellas de fondo sutiles */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
           <CustomPaw className="absolute left-[5%] top-[20%] w-64 h-64 rotate-12" />
           <CustomPaw className="absolute right-[5%] bottom-[10%] w-80 h-80 -rotate-12" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* LADO IZQUIERDO: CARD DE INFORMACIÓN */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2 bg-white border border-purple-50 rounded-[40px] p-8 md:p-12 shadow-[0_25px_60px_rgba(75,0,130,0.06)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10">
                {/* Horario */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[11px] font-black text-[#4B0082] uppercase tracking-widest bg-purple-50 px-4 py-1.5 rounded-full">
                    Atención: 8:00 a.m - 8:00 p.m
                  </span>
                </div>

                {/* Título */}
                <h2 className="text-3xl font-black text-gray-900 leading-[1.1] uppercase mb-8">
                  HAPPY PETS <br />
                  <span className="text-purple-700">TU CLÍNICA DE CONFIANZA</span>
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
                  ¿Tienes alguna duda o emergencia? Nuestro equipo está listo para atenderte a ti y a tu mascota con el amor que merecen.
                </p>

                {/* Datos de Contacto */}
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-400 group-hover:bg-purple-700 group-hover:text-white transition-all duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-sm font-bold text-gray-700">contacto@happypets.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-400 group-hover:text-white transition-all duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-0.5">Teléfono</p>
                      <p className="text-sm font-bold text-gray-700">+51 987 654 321</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-400 group-hover:bg-purple-700 group-hover:text-white transition-all duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-0.5">Dirección</p>
                      <p className="text-sm font-bold text-gray-700">Av. Las Mascotas 123, Lima</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-yellow-400 text-[#4B0082] font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-lg shadow-yellow-200 transition-all hover:bg-yellow-300 flex items-center justify-center gap-3"
                >
                  <WhatsApp size={18} />
                  Chatear por WhatsApp
                </motion.button>
              </div>
            </motion.div>

            {/* LADO DERECHO: GALERÍA VISUAL */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-1/2 grid grid-cols-1 gap-4 h-[450px] md:h-[550px]"
            >
              <div className="relative rounded-[40px] overflow-hidden bg-purple-200 group shadow-lg">
                <Image src="/fachada-pet.jpg" alt="Fachada Clinica" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-1">Visítanos</p>
                  <p className="text-lg font-black leading-tight">NUESTRAS INSTALACIONES</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── MAPA / REDES ─── */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-10 rounded-[40px] bg-white border border-purple-50 shadow-sm relative overflow-hidden">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-50 rounded-full" />
          
          <div className="text-center md:text-left mb-8 md:mb-0 relative z-10">
            <p className="text-[10px] font-black text-purple-300 uppercase tracking-[0.3em] mb-4">Conéctate con nosotros</p>
            <div className="flex gap-6">
              <button className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-purple-700 hover:text-white transition-all duration-300 shadow-sm"><Facebook01Icon size={20} /></button>
              <button className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-purple-700 hover:text-white transition-all duration-300 shadow-sm"><Instagram size={20} /></button>
              <button className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-purple-700 hover:text-white transition-all duration-300 shadow-sm"><WhatsApp size={20} /></button>
            </div>
          </div>
          
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 text-xs font-black uppercase text-purple-700 group relative z-10 bg-purple-50 px-8 py-4 rounded-2xl"
          >
            Ver ubicación en Google Maps 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>
    </main>
  );
}