import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { Organizations } from "@/components/commons/organizations"
import { Footer } from "@/components/landing/footer-section"

export default async function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        <div className="w-full mx-auto rounded-t-xl">
          <div className="flex w-full min-h-screen flex-col">
            {/* Hero Section */}
            <Hero title="EquipTrack" link="#organizations" titleButton="Acessar minhar organizações" />

            {/* Features Section */}
            <section className="p-8">
              <Features />
            </section>

            {/* Organizations Section */}
            <section id="organizations" className="p-8">
              <Organizations />
            </section>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
