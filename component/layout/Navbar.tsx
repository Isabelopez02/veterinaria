"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PawPrint, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomPaw } from "../ui/customPaw";
import { services } from "@/types/servicio";

const navLinks = [
  { name: "Nosotros", href: "/nosotros" },
  { name: "Staff Médico", href: "/staff-medico" },
  { name: "Servicios", href: "/servicios", hasDropdown: true },
  { name: "Ubicación", href: "#" },
  { name: "Blogs", href: "#" },
  { name: "Contacto", href: "/contacto" },
];

// SVG de huella inline para el fondo decorativo
const PawBg = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="50" cy="72" rx="22" ry="18" />
    <ellipse cx="28" cy="50" rx="10" ry="13" />
    <ellipse cx="72" cy="50" rx="10" ry="13" />
    <ellipse cx="36" cy="30" rx="9" ry="11" />
    <ellipse cx="64" cy="30" rx="9" ry="11" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        {/* ── Huellas decorativas de fondo ── */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <CustomPaw className="absolute -left-3 -top-4 w-16 h-16 text-purple-50 rotate-[-20deg]" />
          <CustomPaw className="absolute left-28 top-1 w-10 h-10 text-purple-50 rotate-[15deg]" />
          <CustomPaw className="absolute left-1/2 -translate-x-1/2 -top-3 w-14 h-14 text-yellow-50 rotate-[30deg]" />
          <CustomPaw className="absolute right-56 top-0 w-9 h-9 text-purple-50 rotate-[-10deg]" />
          <CustomPaw className="absolute right-24 -top-2 w-12 h-12 text-purple-100 rotate-[25deg]" />
          <CustomPaw className="absolute right-6 top-2 w-8 h-8 text-yellow-50 rotate-[-30deg]" />
          <CustomPaw className="absolute left-1/3 bottom-0 w-7 h-7 text-purple-50 rotate-[40deg]" />
          <CustomPaw className="absolute left-2/3 -bottom-1 w-6 h-6 text-purple-50 rotate-[-15deg]" />
        </div>

        <nav className="relative mx-auto max-w-6xl px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-purple-700 font-black text-xl z-10 uppercase tracking-tighter">
            <PawPrint className="w-6 h-6" />
            Happy Pets
          </Link>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-8 text-gray-600 font-bold text-[13px] uppercase tracking-wide">
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
              >
                <Link 
                  href={link.href}
                  className={`flex items-center gap-1 transition-colors hover:text-purple-700 ${
                    pathname === link.href ? "text-purple-700" : ""
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />}
                </Link>
                
                {/* Dropdown de Servicios */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 top-full pt-4 w-64"
                      >
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-2">
                          {services.map((service) => (
                            <Link 
                              key={service.id}
                              href={`/servicios/${service.id}`}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 group/item transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 group-hover/item:bg-purple-700 group-hover/item:text-white transition-colors">
                                <PawPrint size={14} />
                              </div>
                              <span className="text-[10px] font-black text-gray-700 group-hover/item:text-purple-700">
                                {service.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                <span className={`absolute left-0 -bottom-1 h-[2px] bg-purple-700 transition-all ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:block bg-yellow-400 hover:bg-yellow-300 text-black font-black text-[11px] px-6 py-2.5 rounded-full shadow-md uppercase tracking-widest"
          >
            RESERVAR CITA
          </motion.button>

          {/* Botón hamburguesa móvil */}
          <button
            className="md:hidden relative z-10 p-2 rounded-lg text-purple-700 hover:bg-purple-50 transition"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      {/* ── DRAWER MÓVIL ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 z-[70] h-full w-4/5 max-w-xs bg-white shadow-2xl flex flex-col md:hidden overflow-hidden"
            >
              {/* Huellas decorativas */}
              <div className="absolute inset-0 pointer-events-none select-none opacity-20">
                <PawBg className="absolute -right-4 top-8 w-24 h-24 text-purple-100 rotate-[20deg]" />
                <PawBg className="absolute left-2 top-32 w-16 h-16 text-yellow-100 rotate-[-15deg]" />
              </div>

              {/* Cabecera drawer */}
              <div className="relative flex items-center justify-between px-6 py-5 border-b border-purple-50">
                <div className="flex items-center gap-2 text-purple-700 font-black text-lg uppercase tracking-tighter">
                  <PawPrint className="w-5 h-5" />
                  Happy Pets
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-purple-700 hover:bg-purple-50 transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links móvil */}
              <nav className="relative flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <div key={link.name}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => !link.hasDropdown && setMenuOpen(false)}
                        className={`flex items-center justify-between py-4 px-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-colors ${
                          pathname === link.href ? "bg-purple-50 text-purple-700" : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {link.name}
                        {link.hasDropdown && (
                          <button 
                            onClick={(e) => { e.preventDefault(); setServicesOpen(!servicesOpen); }}
                            className="p-1"
                          >
                            <ChevronDown size={18} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                          </button>
                        )}
                      </Link>
                    </motion.div>

                    {/* Submenú móvil */}
                    {link.hasDropdown && (
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-gray-50/50 rounded-2xl mt-1 mx-2"
                          >
                            <div className="py-2">
                              {services.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/servicios/${service.id}`}
                                  onClick={() => setMenuOpen(false)}
                                  className="flex items-center gap-3 py-3 px-6 text-[10px] font-bold uppercase text-gray-500 hover:text-purple-700"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-purple-300" />
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA móvil */}
              <div className="relative px-6 pb-8 pt-4 border-t border-purple-50">
                <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-black py-4 rounded-2xl shadow-lg transition-transform active:scale-95 uppercase text-xs tracking-[0.2em]">
                  RESERVAR CITA
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}