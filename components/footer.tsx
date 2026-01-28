import { Mail, MapPin, Phone } from "lucide-react"
export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* COLUMNA D EINFO */}
          <div>
            <h3 className="font-bold text-lg mb-4">RentingSuite</h3>
            <p className="text-muted-foreground text-sm">
              La solución completa para gestionar tu empresa de alquiler de vehículos.
            </p>
          </div>

          {/* COLUMNA DE ENLACES */}
          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#caracteristicas" className="text-muted-foreground hover:text-primary">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA DE CONTACTO */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <a href="mailto:info@jccd.es" className="hover:text-primary">
                  info@jccd.es
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>PONER AQUI UBICACIÓN, Las Palmas</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <span>TELEFONO DE CONTACT</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t"></div>

        {/* Copyright y Links Legales */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} RentingSuite. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">
              Privacidad
            </a>
            <a href="#" className="hover:text-primary">
              Términos
            </a>
            <a href="#" className="hover:text-primary">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}