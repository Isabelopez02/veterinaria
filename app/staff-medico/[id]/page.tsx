"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { staff } from "../../ts/staf";
import { services } from "../../ts/servicio";
import { 
  Calendar01Icon as CalendarIcon, 
  ArrowRight01Icon as ArrowRightIcon,
  Clock01Icon as ClockIcon,
  StethoscopeIcon,
  Mail01Icon as MailIcon,
  TelephoneIcon,
  InformationCircleIcon,
  ArrowLeft01Icon
} from "hugeicons-react";
import { CardDoctor } from "@/app/component/CardsDoctor";
import { CustomPaw } from "@/app/component/customPaw";

export default function DoctorDetail() {
  const { id } = useParams();
  const doc = staff.find((s) => s.id === id);
  const serviciosVinculados = services.filter((s) => doc?.serviceIds.includes(s.id));
  
  // Otros especialistas (excluyendo al actual)
  const otrosEspecialistas = staff.filter((s) => s.id !== id).slice(0, 3);

  if (!doc) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-12 bg-white rounded-[40px] shadow-2xl border border-purple-50 max-w-md w-full"
      >
        <div className="relative w-24 h-24 mx-auto mb-6">
          <CustomPaw className="w-full h-full text-purple-100" />
          <div className="absolute inset-0 flex items-center justify-center">
            <InformationCircleIcon size={40} className="text-[#4B0082]" />
          </div>
        </div>
        <h2 className="text-2xl font-black text-[#4B0082] uppercase mb-2">Especialista no encontrado</h2>
        <p className="text-gray-500 text-sm mb-8">Lo sentimos, no pudimos encontrar el perfil que buscas.</p>
        <Link 
          href="/staff" 
          className="inline-flex items-center gap-2 bg-[#4B0082] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-black transition-all"
        >
          <ArrowLeft01Icon size={16} /> Volver al equipo
        </Link>
      </motion.div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#fafafa] pb-20">
      
      {/* ─── HEADER / HERO SECTION ─── */}
      <section className="relative pt-12 pb-24 overflow-hidden bg-white border-b border-purple-50">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50/50 to-transparent pointer-events-none" />
        <CustomPaw className="absolute -top-10 -left-10 w-64 h-64 text-purple-50/40 rotate-12" />
        <CustomPaw className="absolute bottom-10 right-20 w-32 h-32 text-purple-50/30 -rotate-12" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-12"
          >
            <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#4B0082] transition-colors">Inicio</Link>
            <span className="text-[10px] text-gray-300">/</span>
            <Link href="/staff" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#4B0082] transition-colors">Staff Médico</Link>
            <span className="text-[10px] text-gray-300">/</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#4B0082]">{doc.name}</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:items-end">
            {/* Foto del Doctor */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[320px] mx-auto lg:mx-0 group"
            >
              <div className="absolute inset-0 bg-[#FBBF24] rounded-[48px] rotate-3 transition-transform group-hover:rotate-6 duration-500" />
              <div className="relative aspect-[1/1.2] rounded-[48px] bg-white shadow-xl border border-purple-100 overflow-hidden">
                <Image 
                  src={doc.img} 
                  alt={doc.name} 
                  fill 
                  className="object-contain object-bottom p-4 transition-transform duration-700 group-hover:scale-105" 
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-3xl shadow-lg border border-purple-50">
                <div className="bg-[#4B0082] text-white p-3 rounded-2xl">
                  <StethoscopeIcon size={24} />
                </div>
              </div>
            </motion.div>

            {/* Info Principal */}
            <div className="flex-1 text-center lg:text-left pb-4">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-[#4B0082] text-[10px] font-black uppercase tracking-[0.2em] mb-4"
              >
                {doc.specialty}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter mb-4 leading-[0.9]"
              >
                {doc.name}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 text-sm md:text-base max-w-xl mb-8 leading-relaxed"
              >
                Especialista comprometido con el bienestar de tu mascota, con años de experiencia en {doc.specialty.toLowerCase()} y una pasión inigualable por la vida animal.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <button className="flex items-center gap-3 bg-[#4B0082] text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-purple-900/10 hover:bg-black hover:-translate-y-1 transition-all active:scale-95">
                  Agendar Cita Ahora <CalendarIcon size={18} />
                </button>
                <div className="flex gap-2">
                  <button className="w-14 h-14 rounded-2xl border border-gray-100 bg-white flex items-center justify-center text-gray-400 hover:text-[#4B0082] hover:border-purple-200 transition-all shadow-sm">
                    <MailIcon size={20} />
                  </button>
                  <button className="w-14 h-14 rounded-2xl border border-gray-100 bg-white flex items-center justify-center text-gray-400 hover:text-[#4B0082] hover:border-purple-200 transition-all shadow-sm">
                    <TelephoneIcon size={20} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTENIDO DETALLADO ─── */}
      <div className="container mx-auto px-6 max-w-6xl -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LADO IZQUIERDO: Horarios y Disponibilidad */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-purple-50 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-[#4B0082]">
                  <ClockIcon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight">Horarios</h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Disponibilidad semanal</p>
                </div>
              </div>

              <div className="space-y-3">
                {doc.schedule.map((slot, i) => (
                  <div 
                    key={i} 
                    className="flex justify-between items-center p-4 rounded-2xl border border-transparent hover:border-purple-100 hover:bg-purple-50/30 transition-all group"
                  >
                    <span className="text-sm font-bold text-gray-700 group-hover:text-[#4B0082] transition-colors">{slot.day}</span>
                    <span className="text-[11px] font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full group-hover:bg-white transition-colors">{slot.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-3xl bg-amber-50 border border-amber-100 flex items-start gap-4">
                <InformationCircleIcon size={20} className="text-[#f59e0b] shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-900/70 leading-relaxed font-medium">
                  Los horarios pueden variar según emergencias. Recomendamos confirmar su cita con 24h de anticipación.
                </p>
              </div>
            </div>
          </motion.div>

          {/* LADO DERECHO: Especialidades y Servicios */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-purple-50 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#fffbeb] flex items-center justify-center text-[#FBBF24]">
                  <StethoscopeIcon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight">Especialidades</h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Servicios destacados</p>
                </div>
              </div>

              {serviciosVinculados.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviciosVinculados.map((serv, idx) => (
                    <Link key={serv.id} href={`/servicios/${serv.id}`} className="group">
                      <div className="p-4 rounded-3xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all h-full flex flex-col">
                        <div className="w-10 h-10 relative mb-4 rounded-xl overflow-hidden bg-purple-50 p-2">
                          <Image src={serv.img} alt={serv.title} fill className="object-contain" />
                        </div>
                        <h4 className="text-xs font-black text-gray-900 uppercase mb-2 group-hover:text-[#4B0082] transition-colors">{serv.title}</h4>
                        <p className="text-[10px] text-gray-400 line-clamp-2 mb-4 flex-1">{serv.longDesc}</p>
                        <div className="flex items-center gap-2 text-[9px] font-bold text-[#4B0082] uppercase tracking-widest mt-auto">
                          Ver servicio <ArrowRightIcon size={12} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center border-2 border-dashed border-gray-50 rounded-[32px]">
                  <p className="text-gray-400 text-xs uppercase tracking-widest">Consultar servicios disponibles</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* ─── SECCIÓN: OTROS ESPECIALISTAS ─── */}
        <section className="mt-24 pt-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="block text-[10px] font-black tracking-[0.3em] text-[#4B0082] uppercase mb-2">Nuestro Equipo</span>
              <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Otros Especialistas</h3>
            </div>
            <Link 
              href="/staff" 
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-purple-400 hover:text-[#4B0082] transition-colors group"
            >
              Ver todos <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otrosEspecialistas.map((doctor) => (
              <motion.div 
                key={doctor.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <CardDoctor doc={doctor} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── BOTÓN DE REGRESO ─── */}
        <div className="mt-20 text-center">
          <Link 
            href="/staff" 
            className="inline-flex items-center gap-3 text-gray-400 hover:text-[#4B0082] transition-colors font-bold text-xs uppercase tracking-widest group"
          >
            <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-purple-200 transition-all">
              <ArrowLeft01Icon size={18} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            Volver al listado completo
          </Link>
        </div>
      </div>

    </main>
  );
}