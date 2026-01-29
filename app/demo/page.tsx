import HeroDemo from "@/components/hero-demo"
import FeaturesDemo from "@/components/features-demo"
import BannerDemo from "@/components/banner-demo"
import { Footer } from "@/components/footer"

export default function DemoPage() {
  return (
    <>
      <div className="bg-sky-50 text-sky-900 text-center py-2 text-sm">Demo</div>
      <HeroDemo />
      <FeaturesDemo />
      <BannerDemo />
      <Footer />
    </>
  )
}
