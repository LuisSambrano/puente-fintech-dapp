"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Puente"
            width={120}
            height={32}
            className="w-auto h-8"
          />
          <span className="text-xl font-bold">Puente</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="#about"
              className="text-white/70 hover:text-white transition"
            >
              Acerca
            </Link>
          </li>
          <li>
            <Link
              href="#products"
              className="text-white/70 hover:text-white transition"
            >
              Productos
            </Link>
          </li>
          <li>
            <Link
              href="#how-it-works"
              className="text-white/70 hover:text-white transition"
            >
              Cómo Funciona
            </Link>
          </li>
          <li>
            <Link
              href="#roadmap"
              className="text-white/70 hover:text-white transition"
            >
              Roadmap
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-white/70 hover:text-white transition"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2.5 bg-[#2ECC71] text-black font-bold rounded-lg hover:bg-[#27AE60] transition-all shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:scale-105">
          Enviar Ahora
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-black border-t border-white/10 px-6 py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <ul className="space-y-4">
            <li>
              <Link href="#about" className="block py-2">
                Acerca
              </Link>
            </li>
            <li>
              <Link href="#products" className="block py-2">
                Productos
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="block py-2">
                Cómo Funciona
              </Link>
            </li>
            <li>
              <Link href="#roadmap" className="block py-2">
                Roadmap
              </Link>
            </li>
            <li>
              <Link href="#contact" className="block py-2">
                Contacto
              </Link>
            </li>
            <li>
              <button className="w-full px-6 py-3 bg-[#2ECC71] text-black font-bold rounded-lg hover:bg-[#27AE60] transition-all">
                Enviar Ahora
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
