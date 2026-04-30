"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ShieldCheck, Star, Users } from "lucide-react";

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero Nosotros */}
      <section className="relative pt-32 pb-20 bg-purple-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2 text-white"
            >
              <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-purple-200">
                Pasión por las mascotas
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-none mb-8">
                TU FAMILIA <br />
                ES NUESTRA <br />
                <span className="text-yellow-400">PRIORIDAD</span>
              </h1>
              <p className="text-purple-100 text-lg leading-relaxed max-w-lg mb-10">
                Desde hace más de 10 años, brindamos amor y cuidados especializados para garantizar 
                que cada mascota viva una vida larga, sana y feliz.
              </p>
              <div className="flex gap-4">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                  <p className="text-3xl font-black text-yellow-400">10+</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-purple-100">Años</p>
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                  <p className="text-3xl font-black text-yellow-400">5k+</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-purple-100">Pacientes</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-yellow-400 rounded-[60px] rotate-6" />
                <div className="absolute inset-0 bg-white rounded-[60px] overflow-hidden shadow-2xl">
                  <Image src="/img/doctor.png" alt="Nosotros" fill className="object-cover object-top p-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">NUESTROS VALORES</h2>
          <div className="w-12 h-1.5 bg-purple-700 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Heart, title: "Amor", desc: "Tratamos a cada mascota con la ternura que se merece.", color: "bg-red-50 text-red-500" },
            { icon: ShieldCheck, title: "Ética", desc: "Transparencia y honestidad en cada diagnóstico.", color: "bg-blue-50 text-blue-500" },
            { icon: Star, title: "Excelencia", desc: "Tecnología de vanguardia y capacitación constante.", color: "bg-yellow-50 text-yellow-600" },
            { icon: Users, title: "Compromiso", desc: "Estamos aquí para ti y tu mascota las 24 horas.", color: "bg-purple-50 text-purple-600" },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm text-center group hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 ${v.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <v.icon size={28} />
              </div>
              <h3 className="text-xl font-black text-gray-900 uppercase mb-3">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 bg-white p-12 rounded-[50px] shadow-sm border border-gray-100">
              <h3 className="text-2xl font-black text-purple-700 uppercase mb-6">Nuestra Misión</h3>
              <p className="text-gray-500 leading-relaxed">
                Proveer servicios médicos veterinarios de la más alta calidad, integrando tecnología avanzada 
                y un trato humano excepcional para mejorar la salud y el bienestar de los animales de compañía.
              </p>
            </div>
            <div className="flex-1 bg-purple-700 p-12 rounded-[50px] shadow-xl text-white">
              <h3 className="text-2xl font-black text-yellow-400 uppercase mb-6">Nuestra Visión</h3>
              <p className="text-purple-100 leading-relaxed">
                Ser la clínica veterinaria líder y de referencia en la región, reconocida por nuestra 
                innovación médica, excelencia en el servicio al cliente y el profundo respeto por la vida animal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
