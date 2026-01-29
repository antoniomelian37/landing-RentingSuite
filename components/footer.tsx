import Link from "next/link"
import Logo from "@/components/ui/logo"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-card text-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">

          {/* COLUMNA D EINFO */}
          <div className="md:w-1/3">
            <h3 className="font-bold text-lg mb-4 text-primary flex items-center gap-2">
              <Logo className="h-10 w-10" />
              RentingSuite
            </h3>
            <p className="text-black text-sm">
              La solución completa para gestionar tu empresa de alquiler de vehículos.
            </p>
          </div>

          {/* COLUMNA DE CONTACTO */}
          <div id="contacto" className="md:w-1/3">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-black">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@rentingsuite.com" className="text-sky-900 font-semibold hover:underline">
                  info@rentingsuite.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-black">
                <MapPin size={16} className="text-primary" />
                <span>Agaete, Gran Canaria</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t"></div>

        {/* LEGAL */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-black">
          <p>© {new Date().getFullYear()} RentingSuite.</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:underline">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:underline">
              Términos
            </Link>
            <Link href="/cookies" className="hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}