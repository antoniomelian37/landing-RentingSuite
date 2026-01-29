import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroBeta() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2">

        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl text-black">
            La solución completa para gestionar tu empresa de alquiler de vehículos.
          </h1>

          <p className="text-lg text-muted-foreground">
            RentingSuite es un SaaS integral que te permite gestionar flota, contratos, facturas, clientes y automatizaciones en una sola plataforma. Optimiza tu negocio con inteligencia artificial y workflows integrados.
          </p>

          <div className="flex items-center gap-4">
            <Button size="lg" className="bg-[rgb(43,126,201)] text-white hover:opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 stroke-current" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
                <path d="m9 16 2 2 4-4" />
              </svg>
              Solicitar demo
            </Button>
          </div>
        </div>

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
            <div className="absolute top-3 right-3 rounded-full bg-yellow-400 text-yellow-900 px-3 py-1 text-xs font-semibold">BETA</div>
          </div>
        </div>
      </div>
    </section>
  )
}
