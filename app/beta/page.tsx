import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Banner } from "@/components/banner"
import { Footer } from "@/components/footer"

export default function BetaPage() {
  return (
    <>
      <div className="bg-yellow-50 text-yellow-900 text-center py-2 text-sm">Beta — Versión experimental</div>
      <Hero />
      <Features />
      <Banner />
      <Footer />
    </>
  )
}
