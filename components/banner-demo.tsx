import { Button } from "@/components/ui/button"

export default function BannerDemo() {
  return (
    <section className="bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl text-black">
          Únete al programa Beta de RentingSuite
        </h2>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-muted-foreground">
         Sé de los primeros en experimentar la revolución en la gestión de alquiler de vehículos con nuestra plataforma todo en uno 
          RentingSuite. Simplifica tus operaciones, optimiza tu negocio y lleva tu empresa al siguiente nivel.
        </p>
        <div className="mt-8">
          <Button size="lg" className="bg-[rgb(43,126,201)] text-white border-2 border-transparent hover:opacity-90">
            Solicitar demo
          </Button>
          <Button size="lg" className="border-2 border-transparent hover:opacity-90 ml-4">
            Más información
          </Button>
        </div>
      </div>
    </section>
  )
}
