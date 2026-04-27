"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Medicine01Icon, QuestionIcon, UserGroupIcon } from "hugeicons-react";
import { services } from "../../ts/servicio";
import { ChevronDown } from "lucide-react";

export default function DetalleServicio() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("tratamientos");
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  // Buscamos el servicio que coincida con el ID de la URL
  const servicio = services.find((s) => s.id === params.id);

  if (!servicio) return <div className="py-40 text-center">Servicio no encontrado</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO DINÁMICO --- */}
      <section className="bg-[#E9DFF5] pt-32 pb-20 px-6 md:px-20 relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            className="max-w-xl z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#4B0082] mb-6 uppercase leading-tight">
              {servicio.title}
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {servicio.longDesc}
            </p>
            <button className="bg-[#4B0082] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-purple-900 transition-all">
              AGENDAR UNA CITA
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-sm aspect-square"
          >
            <Image src={servicio.img} alt={servicio.title} fill className="object-contain" priority />
          </motion.div>
        </div>
      </section>

      {/* --- SECCIÓN DE CONTENIDO --- */}
      <section className="py-20 px-6 md:px-20 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Tabs Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {[
              { id: "tratamientos", label: "Tratamientos", icon: <Medicine01Icon size={20} /> },
              { id: "faq", label: "Preguntas Frecuentes", icon: <QuestionIcon size={20} /> },
              { id: "doctores", label: "Doctores", icon: <UserGroupIcon size={20} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setOpenAccordion(0); }}
                className={`flex items-center gap-4 p-5 rounded-2xl transition-all border ${
                  activeTab === tab.id 
                  ? "bg-purple-50 border-purple-100 text-[#4B0082]" 
                  : "bg-gray-50 border-transparent text-gray-400 hover:bg-gray-100"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${activeTab === tab.id ? "bg-white" : "bg-gray-200"}`}>
                  {tab.icon}
                </div>
                <span className="font-bold uppercase text-xs tracking-widest">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Acordeones Dinámicos */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-2">
              {/* Renderizamos Tratamientos o FAQs según la Tab activa */}
              {activeTab === "tratamientos" && servicio.tratamientos.map((item, idx) => (
                <AccordionItem 
                  key={idx} 
                  index={idx} 
                  title={item.title} 
                  content={item.content} 
                  isOpen={openAccordion === idx} 
                  setOpen={setOpenAccordion} 
                />
              ))}

              {activeTab === "faq" && servicio.faqs.map((item, idx) => (
                <AccordionItem 
                  key={idx} 
                  index={idx} 
                  title={item.question} 
                  content={item.answer} 
                  isOpen={openAccordion === idx} 
                  setOpen={setOpenAccordion} 
                />
              ))}

              {activeTab === "doctores" && (
                <div className="p-10 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                  <p className="text-gray-400">Personal médico especializado en {servicio.title.toLowerCase()}.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Componente pequeño para el Acordeón
function AccordionItem({ index, title, content, isOpen, setOpen }: any) {
  return (
    <div className="border-b border-purple-50">
      <button
        onClick={() => setOpen(isOpen ? null : index)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <div className="flex items-center gap-5">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-[#4B0082] text-white" : "bg-purple-50 text-[#4B0082]"}`}>
            <Medicine01Icon size={18} />
          </div>
          <span className={`font-bold text-lg transition-colors ${isOpen ? "text-[#4B0082]" : "text-gray-700"}`}>
            {title}
          </span>
        </div>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 pl-16 text-gray-500 leading-relaxed text-sm md:text-base">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}