import TechnologiesCarousel from "../TechnologiesCarousel";

export default function Technologies() {
  return (
    <section id="technologies" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          Tecnologias
        </h2>
        <TechnologiesCarousel />
      </div>
    </section>
  );
}
