"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import Logo from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

{/* IMPORTAR EL HEADER */}
export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToContact() {
    const el = document.getElementById('contacto')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // remove any hash that may have been added
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search)
      }
    }
  }

  return (
    <header className={`w-full text-black sticky top-0 z-50 transition-colors duration-200 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm border-b' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* LOGO DE JCCD */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 !no-underline !hover:no-underline">
            <Logo className="h-10 w-10" />
            <span className="text-lg font-bold text-black">RentingSuite.com</span>
          </Link>
        </div>

        {/* OPCIONES DEL NAV */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-6 text-black">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/#caracteristicas" className="text-black">Características</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <span className="text-black opacity-75 cursor-default">Precio</span>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <button type="button" onClick={scrollToContact} className="text-black hover:underline cursor-pointer">Contacto</button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* BOTONES DE ACCION */}
        <div className="flex items-center gap-3">
          <Button className="bg-white text-black border border-black hover:bg-slate-50">Iniciar sesión</Button>
          <Button className="bg-[rgb(43,126,201)] text-white hover:opacity-90">Solicitar demo</Button>
        </div>
      </nav>
    </header>
  )
}