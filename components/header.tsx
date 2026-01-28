import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

{/* IMPORTAR EL HEADER */}
export function Header() {
  return (
    <header className="w-full border-b">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* LOGO DE JCCD */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">JCCD RentingSuite</span>
        </div>

        {/* OPCIONES DEL NAV */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#caracteristicas">Características</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#precio">Precio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#contacto">Contacto</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* BOTONES DE ACCION */}
        <div className="flex items-center gap-3">
          <Button variant="ghost">Iniciar sesión</Button>
          <Button>Solicitar demo</Button>
        </div>
      </nav>
    </header>
  )
}