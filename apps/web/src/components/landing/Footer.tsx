/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import Link from "next/link";
import Image from "next/image";
import { Twitter, Mail, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Image
              src="/images/logo.png"
              alt="Puente"
              width={40}
              height={40}
              className="w-auto h-10"
            />
            <span className="text-2xl font-bold text-white">Puente</span>
          </Link>
          <p className="text-white/50 max-w-sm">
            Infraestructura financiera abierta para la próxima generación.
            Construido sobre Celo.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Producto</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-white/60 hover:text-[#2ECC71]">
                Remesas
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white/60 hover:text-[#2ECC71]">
                Crowdfunding
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white/60 hover:text-[#2ECC71]">
                Donaciones
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white/60 hover:text-[#2ECC71]">
                Roadmap
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-white/60 hover:text-[#2ECC71]">
                Términos de Servicio
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white/60 hover:text-[#2ECC71]">
                Privacidad
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white/60 hover:text-[#2ECC71]">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-white/40">
          © 2026 Puente Fintech. Construido sobre Celo.
        </p>

        <div className="flex gap-6">
          <Link href="#" className="text-white/60 hover:text-white transition">
            <Twitter size={20} />
          </Link>
          <Link href="#" className="text-white/60 hover:text-white transition">
            <Send size={20} />
          </Link>
          <Link href="#" className="text-white/60 hover:text-white transition">
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
