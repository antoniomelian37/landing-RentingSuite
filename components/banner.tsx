import { Button } from "@/components/ui/button"

{/* IMPORTAR EL BANNER AZUL */}
export function Banner() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl !text-sky-200">
          Únete a RentingSuite
        </h2>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto !text-white">
          Transforma la gestión de tu empresa de alquiler de vehículos. Solicita más información y sé el primero en conocer cuando esté disponible.
        </p>
        <div className="mt-8">
          <Button size="lg" className="bg-primary text-white border-2 border-white hover:bg-primary/90">
            Solicitar demo
          </Button>
        </div>
        <p className="mt-4 text-sm !text-white">
          Sé de los primeros en acceder a RentingSuite cuando se lance. <br />
          Contáctanos en <a href="mailto:info@jccd.es" className="!text-blue-900 hover:underline font-semibold">info@jccd.es</a>
        </p>
      </div>
    </section>
  )
}