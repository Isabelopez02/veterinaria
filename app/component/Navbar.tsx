"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-purple-700 font-bold text-xl">
          <PawPrint className="w-6 h-6" />
          Happy Pets
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          {["Nosotros","Staff Medico","Servicios","Ubicación","Blogs","Contacto"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <span className="group-hover:text-purple-700 transition">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-700 transition-all group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5 py-2 rounded-full shadow-md"
        >
          RESERVAR CITA
        </motion.button>
      </nav>
    </header>
  );
}