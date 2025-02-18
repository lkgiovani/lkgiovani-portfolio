import TechnologiesCarousel from "@/components/technologies-carousel"

export default function Technologies() {
  return (
    <section id="technologies" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Tecnologias</h2>
        <TechnologiesCarousel />
      </div>
    </section>
  )
}

