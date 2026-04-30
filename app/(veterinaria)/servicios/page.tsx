"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/types/servicio";
import { ArrowRight } from "lucide-react";

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-white pb-5">
      {/* Header */}
      <section className="bg-purple-50/50 pt-20 pb-1">
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
      <section className="max-w-6xl mx-auto px-6 py-20">
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

      {/* CTA Final */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-purple-700 rounded-[50px] p-12 text-center text-white relative overflow-hidden">
          {/* Decoración */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 relative z-10">
            ¿TU MASCOTA NECESITA <br /> ATENCIÓN ESPECIAL?
          </h2>
          <p className="text-purple-100 mb-10 max-w-xl mx-auto relative z-10">
            Agenda una cita con nuestros especialistas y dale a tu mejor amigo la atención que se merece.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-10 py-4 rounded-full shadow-xl transition-all hover:scale-105 relative z-10">
            RESERVAR CITA AHORA
          </button>
        </div>
      </section>
    </main>
  );
}
