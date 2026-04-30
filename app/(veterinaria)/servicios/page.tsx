"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/types/servicio";
import { ArrowRight } from "lucide-react";
import { CustomPaw } from "@/component/ui/customPaw";

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-[#fdfaff]">
      {/* Header */}
      <section className="bg-white border-b border-purple-50 pt-10 md:pt-20 pb-1 relative overflow-hidden">
        {/* Decoración de huellas */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <CustomPaw className="absolute left-[8%] top-5 w-48 h-48 rotate-12" />
          <CustomPaw className="absolute right-[5%] top-10 w-32 h-32 -rotate-12" />
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-black tracking-[0.4em] text-purple-600 uppercase mb-3 block">
              Nuestros Servicios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase leading-none mb-6">
              CUIDADO INTEGRAL <br />
              <span className="text-purple-700">PARA TU MASCOTA</span>
            </h1>
            <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
              Ofrecemos una amplia gama de servicios especializados con tecnología de punta
              y un equipo humano comprometido con la salud de tus mejores amigos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="max-w-6xl mx-auto px-6 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/servicios/${service.id}`} className="group block h-full">
                <div className="bg-white rounded-[40px] p-8 h-full flex flex-col items-center text-center shadow-[0_15px_35px_rgba(75,0,130,0.04)] border border-purple-50 transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(75,0,130,0.08)] group-hover:-translate-y-2">
                  
                  {/* Imagen del Servicio */}
                  <div className="h-48 w-full relative mb-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-purple-50 rounded-full scale-90 group-hover:scale-100 transition-transform duration-500" />
                    <Image 
                      src={service.img} 
                      alt={service.title} 
                      fill 
                      className="object-contain p-4 z-10 transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  
                  <span className="text-[10px] font-black px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider bg-purple-100 text-purple-700">
                    Servicio Especializado
                  </span>
                  
                  <h3 className="text-lg font-black mb-4 tracking-wide uppercase text-gray-800 group-hover:text-purple-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-gray-500 mb-8 flex-1">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-purple-700 mt-auto">
                    Ver más detalles
                    <div className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center transition-all group-hover:w-10">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section
        className="section-px py-14 md:py-16"
        style={{ backgroundColor: "var(--color-brand)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto text-center text-white"
        >
          <p className="text-xs font-black uppercase tracking-[0.35em] opacity-60 mb-3">
            ¿Listo para empezar?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 uppercase">
            Agenda tu cita hoy
          </h2>
          <p className="text-sm opacity-70 mb-8 max-w-md mx-auto">
            Nuestro equipo está disponible 24/7 para atender a tu mascota con el mejor cuidado.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full font-bold text-sm transition"
              style={{ backgroundColor: "var(--color-accent)", color: "#000" }}
            >
              RESERVAR CITA
            </motion.button>
            <Link
              href="/"
              className="px-8 py-3.5 rounded-full font-bold text-sm border border-white/30 hover:bg-white/10 transition"
            >
              Volver al inicio
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
