import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Car,
  FileSignature,
  Receipt,
  Calendar,
  MapPin,
  Users,
  ScanLine,
  Workflow,
  FileText,
  ShieldCheck,
  Building,
} from "lucide-react"

const features = [
  {
    title: "Gestión de Flota",
    description:
      "Controla tu flota de vehículos de forma centralizada. Estado, mantenimientos, disponibilidad y mucho más en un solo lugar.",
    icon: Car,
  },
  {
    title: "Gestión de Contratos",
    description:
      "Crea, gestiona y firma contratos digitales de forma rápida y segura. Automatiza renovaciones y seguimiento de vencimientos.",
    icon: FileSignature,
  },
  {
    title: "Facturación",
    description:
      "Genera facturas automáticamente, gestiona pagos y controla la contabilidad. Integración con sistemas de facturación electrónica.",
    icon: Receipt,
  },
  {
    title: "Calendario y Reservas",
    description:
      "Visualiza todas tus reservas en un calendario intuitivo. Gestiona disponibilidad y evita conflictos de forma automática.",
    icon: Calendar,
  },
  {
    title: "Gestión de Ubicaciones",
    description:
      "Administra múltiples oficinas y puntos de recogida. Controla inventario y disponibilidad por ubicación.",
    icon: MapPin,
  },
  {
    title: "CRM de Clientes",
    description:
      "Gestiona toda la información de tus clientes, historial de alquileres, preferencias y comunicación en un CRM completo.",
    icon: Users,
  },
  {
    title: "Checking con IA",
    description:
      "Verifica datos de clientes mediante escáner con inteligencia artificial. Extrae información automáticamente de documentos.",
    icon: ScanLine,
  },
  {
    title: "Automatizaciones y Workflows",
    description:
      "Automatiza procesos repetitivos con workflows personalizables. Notificaciones, recordatorios y acciones automáticas.",
    icon: Workflow,
  },
  {
    title: "Generación de Documentos",
    description:
      "Genera contratos, facturas, informes y documentos personalizados automáticamente con plantillas configurables.",
    icon: FileText,
  },
  {
    title: "Integración con Verifactu",
    description:
      "Conecta directamente con Verifactu para la emisión automática de facturas electrónicas.",
    icon: ShieldCheck,
    variant: 'orange',
  },
  {
    title: "Integración con SES Hospedajes",
    description:
      "Integración completa con SES Hospedajes para la gestión de alojamientos y sincronización de datos.",
    icon: Building,
    variant: 'orange',
  },
]

const featuresBottom: typeof features = [

]

export default function FeaturesDemo() {
  return (
    <section id="caracteristicas" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-black">
            Todo lo que necesitas para gestionar tu negocio
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ofrecemos todo lo que puedas necesitar para administrar tu empresa de alquiler de vehículos de manera eficiente y efectiva.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isOrange = feature.variant === 'orange'
            return (
              <Card key={index} className="transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className={isOrange ? 'p-2 bg-[rgba(255,107,53,0.1)] rounded-lg' : 'p-2 bg-[rgba(43,126,201,0.1)] rounded-lg'}>
                      <Icon className={isOrange ? 'text-[rgb(255,107,53)]' : 'text-[rgb(43,126,201)]'} size={20} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-black">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {featuresBottom.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[rgba(43,126,201,0.1)] rounded-lg">
                      <Icon className="text-[rgb(43,126,201)]" size={20} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-black">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}