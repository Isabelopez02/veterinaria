"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, User, Stethoscope, FilterX } from "lucide-react";
import { staff } from "@/types/staf";
import { CardDoctor } from "@/component/ui/CardsDoctor";
import { CustomPaw } from "@/component/ui/customPaw";

const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

export default function StaffMedicoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  // Obtener especialidades únicas
  const specialties = useMemo(() => {
    return Array.from(new Set(staff.map((s) => s.specialty)));
  }, []);

  // Filtrado lógico
  const filteredStaff = useMemo(() => {
    return staff.filter((doc) => {
      const matchesName = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = selectedSpecialty ? doc.specialty === selectedSpecialty : true;
      const matchesDay = selectedDay 
        ? doc.schedule.some(s => s.day.includes(selectedDay)) 
        : true;
      
      return matchesName && matchesSpecialty && matchesDay;
    });
  }, [searchTerm, selectedDay, selectedSpecialty]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedDay("");
    setSelectedSpecialty("");
  };

  return (
    <main className="min-h-screen bg-[#fdfaff] pb-5">
      {/* Header Sección */}
      <section className="bg-white border-b border-gray-100 pt-20 pb-16 relative overflow-hidden">
        {/* Decoración de huellas */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <CustomPaw className="absolute left-[5%] top-10 w-40 h-40 -rotate-12" />
          <CustomPaw className="absolute right-[10%] bottom-5 w-56 h-56 rotate-12" />
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-black tracking-[0.4em] text-purple-600 uppercase mb-3 block">
              Nuestro Equipo Profesional
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-none mb-6">
              CONOCE A NUESTROS <br />
              <span className="text-purple-700">ESPECIALISTAS</span>
            </h1>
            <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
              Contamos con un equipo altamente calificado y apasionado por el bienestar animal. 
              Filtra por nombre, especialidad o día de atención para encontrar al médico ideal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Barra de Filtros */}
      <section className="sticky top-[73px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            
            {/* Buscador por Nombre */}
            <div className="relative w-full lg:w-1/3">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text"
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-3 w-full lg:w-2/3 items-center justify-end">
              {/* Filtro por Especialidad */}
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
                <Stethoscope size={16} className="text-purple-500" />
                <select 
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="bg-transparent text-xs font-bold uppercase tracking-wider focus:outline-none cursor-pointer"
                >
                  <option value="">Especialidad</option>
                  {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Filtro por Día */}
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
                <Calendar size={16} className="text-purple-500" />
                <select 
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="bg-transparent text-xs font-bold uppercase tracking-wider focus:outline-none cursor-pointer"
                >
                  <option value="">Día de atención</option>
                  {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              {/* Reset */}
              {(searchTerm || selectedDay || selectedSpecialty) && (
                <button 
                  onClick={resetFilters}
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-red-500 hover:bg-red-50 px-3 py-2 rounded-xl transition-colors"
                >
                  <FilterX size={14} />
                  Limpiar
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Grid de Doctores */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStaff.length > 0 ? (
              filteredStaff.map((doc) => (
                <motion.div
                  key={doc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardDoctor doc={doc} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User size={32} className="text-purple-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No encontramos coincidencias</h3>
                <p className="text-gray-500 text-sm">Intenta ajustar los filtros de búsqueda.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
