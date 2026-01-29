import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Banner } from "@/components/banner"
import { Footer } from "@/components/footer"

export default function DemoPage() {
  return (
    <>
      <div className="bg-sky-50 text-sky-900 text-center py-2 text-sm">Demo — Versión demostrativa</div>
      <Hero />
      <Features />
      <Banner />
      <Footer />
    </>
  )
}
