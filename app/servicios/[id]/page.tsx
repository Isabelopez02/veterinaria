"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft, CheckCircle2, HelpCircle, Users } from "lucide-react";
import { Medicine01Icon } from "hugeicons-react";
import { services } from "../../ts/servicio";
import { CustomPaw } from "@/app/component/customPaw";

/* ── Fondo de huella SVG inline ── */
const PawBg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <ellipse cx="50" cy="72" rx="22" ry="18" />
    <ellipse cx="28" cy="50" rx="10" ry="13" />
    <ellipse cx="72" cy="50" rx="10" ry="13" />
    <ellipse cx="36" cy="30" rx="9" ry="11" />
    <ellipse cx="64" cy="30" rx="9" ry="11" />
  </svg>
);

/* ── Tabs de navegación ── */
const TABS = [
  { id: "tratamientos", label: "Tratamientos", icon: CheckCircle2 },
  { id: "faq",         label: "Preguntas frecuentes", icon: HelpCircle },
  { id: "doctores",   label: "Nuestro equipo",        icon: Users },
];

/* ── Acordeón ── */
function AccordionItem({
  index, title, content, isOpen, setOpen,
}: {
  index: number;
  title: string;
  content: string;
  isOpen: boolean;
  setOpen: (i: number | null) => void;
}) {
  return (
    <div
      className="rounded-2xl border transition-all duration-200"
      style={{
        borderColor: isOpen ? "var(--color-brand)" : "var(--color-brand-light)",
        backgroundColor: isOpen ? "var(--color-brand-light)" : "#fff",
      }}
    >
      <button
        onClick={() => setOpen(isOpen ? null : index)}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
      >
        <div className="flex items-center gap-4">
          <span
            className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center transition-colors"
            style={{
              backgroundColor: isOpen ? "var(--color-brand)" : "var(--color-brand-light)",
              color: isOpen ? "#fff" : "var(--color-brand)",
            }}
          >
            <Medicine01Icon size={16} />
          </span>
          <span
            className="font-bold text-sm md:text-base leading-snug"
            style={{ color: isOpen ? "var(--color-brand)" : "var(--color-text-base)" }}
          >
            {title}
          </span>
        </div>
        <ChevronDown
          size={18}
          className="shrink-0 transition-transform duration-300"
          style={{
            color: "var(--color-brand)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="px-5 pb-5 pl-[60px] text-sm leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ══════════════════════════════════════════ */
export default function DetalleServicio() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("tratamientos");
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const servicio = services.find((s) => s.id === params.id);

  // ── ESTADO NO ENCONTRADO ──
  if (!servicio)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-6">
        {/* Reemplazado PawBg por CustomPaw */}
        <CustomPaw 
          className="w-24 h-24 opacity-20" 
          style={{ color: "var(--color-brand)" }} 
        />
        <h1 className="text-2xl font-black" style={{ color: "var(--color-brand)" }}>
          Servicio no encontrado
        </h1>
        <Link href="/" className="text-sm underline" style={{ color: "var(--color-text-muted)" }}>
          Volver al inicio
        </Link>
      </div>
    );

  const items =
    activeTab === "tratamientos"
      ? servicio.tratamientos.map((t) => ({ title: t.title, content: t.content }))
      : activeTab === "faq"
      ? servicio.faqs.map((f) => ({ title: f.question, content: f.answer }))
      : [];

  return (
    <div className="min-h-screen bg-white">

      {/* ══ HERO ══ */}
        <section className="relative overflow-hidden pt-6 pb-10 md:pt-10 md:pb-1" // Reduje padding vertical (antes pt-10 pb-16)
        style={{ backgroundColor: "var(--color-brand-light)" }}
        >
        {/* Huellas decorativas (se mantienen igual) */}
        <CustomPaw className="absolute -left-10 -top-8 w-52 h-52 opacity-10 pointer-events-none" style={{ color: "var(--color-brand)" }} />
        <CustomPaw className="absolute right-4 bottom-0 w-44 h-44 opacity-10 rotate-12 pointer-events-none" style={{ color: "var(--color-brand)" }} />

        {/* Contenedor con max-width más estrecho para centrar el contenido */}
        <div className="px-6 container mx-auto max-w-5xl relative z-10"> {/* Cambié section-px por px-6 y añadí max-w-5xl */}
            
            {/* Breadcrumb */}
            <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6" // Reduje margen inferior
            >
            <Link href="/" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition hover:opacity-70" style={{ color: "var(--color-brand)" }}>
                <ArrowLeft size={14} /> Inicio
            </Link>
            <span className="text-xs" style={{ color: "var(--color-text-light)" }}>/</span>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-text-light)" }}>
                {servicio.title}
            </span>
            </motion.div>

            {/* Contenido del hero */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12"> {/* Reduje el gap lateral */}

            {/* Texto centrado visualmente */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
                className="w-full md:w-3/5 text-center md:text-left" // Le di un poco más de peso al texto
            >
                <span className="block text-[10px] font-black tracking-[0.4em] uppercase mb-2" style={{ color: "var(--color-brand)" }}>
                Servicio especializado
                </span>
                <h1 className="text-3xl md:text-5xl font-black mb-4 uppercase leading-tight" style={{ color: "var(--color-brand)" }}>
                {servicio.title}
                </h1>
                <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md mx-auto md:mx-0" style={{ color: "var(--color-text-muted)" }}>
                {servicio.longDesc}
                </p>
                <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block px-8 py-3 rounded-full font-bold text-white shadow-lg transition"
                style={{ backgroundColor: "var(--color-brand)" }}
                >
                AGENDAR UNA CITA
                </motion.button>
            </motion.div>

            {/* Imagen un poco más pequeña para no forzar tanto el height */}
            <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full md:w-2/5 flex justify-center"
            >
                <div className="relative w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px]">
                <Image src={servicio.img} alt={servicio.title} fill className="object-contain drop-shadow-xl" priority />
                </div>
            </motion.div>
            </div>
        </div>
        </section>

        {/* ══ SEPARADOR WAVE MEJORADO ══ */}
        <div className="w-full overflow-hidden leading-[0] -mt-1 relative z-20">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="block w-full h-16" style={{ fill: "var(--color-brand-light)" }}>
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" />
        </svg>
        </div>

      {/* ══ CONTENIDO PRINCIPAL ══ */}
      <section className="section-px py-14 md:py-20 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Sidebar de tabs */}
          <div className="w-full lg:w-64 shrink-0">
            <p
              className="text-[10px] font-black uppercase tracking-[0.3em] mb-5 hidden lg:block"
              style={{ color: "var(--color-text-light)" }}
            >
              Explorar
            </p>

            {/* En móvil: tabs horizontales. En desktop: tabs verticales */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setOpenAccordion(0); }}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl whitespace-nowrap lg:w-full text-left transition-all shrink-0"
                    style={{
                      backgroundColor: active ? "var(--color-brand-light)" : "transparent",
                      color: active ? "var(--color-brand)" : "var(--color-text-muted)",
                      border: `1px solid ${active ? "var(--color-brand-light)" : "transparent"}`,
                      fontWeight: active ? 800 : 500,
                    }}
                  >
                    <span
                      className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: active ? "white" : "var(--color-brand-light)",
                        color: "var(--color-brand)",
                      }}
                    >
                      <Icon size={15} />
                    </span>
                    <span className="text-xs uppercase tracking-wide">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Otros servicios — solo desktop */}
            <div className="hidden lg:block mt-10">
              <p
                className="text-[10px] font-black uppercase tracking-[0.3em] mb-4"
                style={{ color: "var(--color-text-light)" }}
              >
                Otros servicios
              </p>
              <div className="flex flex-col gap-1.5">
                {services
                  .filter((s) => s.id !== servicio.id)
                  .slice(0, 4)
                  .map((s) => (
                    <Link
                      key={s.id}
                      href={`/servicios/${s.id}`}
                      className="text-xs py-2 px-3 rounded-lg transition hover:font-semibold"
                      style={{ color: "var(--color-text-muted)" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-brand)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-muted)")}
                    >
                      · {s.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          {/* Panel de contenido */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {/* Tratamientos o FAQ */}
                {(activeTab === "tratamientos" || activeTab === "faq") && (
                  <div className="space-y-3">
                    {items.map((item, idx) => (
                      <AccordionItem
                        key={idx}
                        index={idx}
                        title={item.title}
                        content={item.content}
                        isOpen={openAccordion === idx}
                        setOpen={setOpenAccordion}
                      />
                    ))}
                  </div>
                )}

                {/* Doctores */}
                {activeTab === "doctores" && (
                  <div
                    className="rounded-2xl p-10 text-center border-2 border-dashed flex flex-col items-center gap-3"
                    style={{ borderColor: "var(--color-brand-light)" }}
                  >
                    <span
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-brand-light)", color: "var(--color-brand)" }}
                    >
                      <Users size={24} />
                    </span>
                    <p className="font-bold" style={{ color: "var(--color-brand)" }}>
                      Personal médico especializado
                    </p>
                    <p className="text-sm max-w-sm" style={{ color: "var(--color-text-light)" }}>
                      Nuestro equipo en {servicio.title.toLowerCase()} está disponible para atenderte. Agenda una cita para conocerlos.
                    </p>
                    <Link
                      href="/"
                      className="mt-2 inline-block px-6 py-2.5 rounded-full text-white text-xs font-bold transition hover:opacity-90"
                      style={{ backgroundColor: "var(--color-brand)" }}
                    >
                      Ver staff médico
                    </Link>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

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

    </div>
  );
}