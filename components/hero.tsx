import Image from "next/image"
import { Button } from "@/components/ui/button"

{/* INSERTAR EL HERO */}
export function Hero() {
return (
<section className="border-b">
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2">

{/* TITULO Y SUBTITULOS DEL HERO */}
<div className="flex flex-col justify-center gap-6">
<h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
La solución completa para gestionar tu empresa de alquiler de vehículos.
</h1>

<p className="text-lg text-muted-foreground">
RentingSuite es un SaaS integral que te permite gestionar flota, contratos, facturas, clientes y automatizaciones en una sola plataforma. Optimiza tu negocio con inteligencia artificial y workflows integrados.
</p>

{/* BOTON PARA DEMO EN EL HERO */}
<div className="flex items-center gap-4">
<Button size="lg">
Solicitar demo
</Button>
</div>
<p className="text-sm text-muted-foreground">
¿Quieres saber más? Contáctanos en <a href="mailto:info@jccd.es" className="text-primary hover:underline">info@jccd.es</a>
</p>
</div>

{/* IMAGEN DEL DASHBOARD AQUI*/}
<div className="relative flex items-center justify-center">
<div className="relative w-full max-w-xl overflow-hidden rounded-xl border bg-muted shadow-lg">
<Image
src="/dashboard-preview.svg"
alt="Dashboard preview"
width={1200}
height={800}
className="h-auto w-full object-cover"
priority
/>
</div>
</div>
</div>
</section>
)
}