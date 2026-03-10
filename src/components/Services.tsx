import ScrollAnimation from "./ScrollAnimation";
import {
  Building2, Briefcase, Home, Sparkles, Construction,
  PaintBucket, Layers, Wind, HardHat,
} from "lucide-react";

const services = [
  { icon: Home, title: "Unterhaltsreinigung", desc: "Regelmäßige Reinigung für ein dauerhaft sauberes Umfeld" },
  { icon: Briefcase, title: "Büroreinigung", desc: "Professionelle Sauberkeit für produktive Arbeitsplätze" },
  { icon: Building2, title: "Treppenhausreinigung", desc: "Gepflegte Eingangsbereiche für einen guten ersten Eindruck" },
  { icon: Sparkles, title: "Fensterreinigung", desc: "Streifenfreier Durchblick, innen und außen" },
  { icon: Layers, title: "Grundreinigung", desc: "Intensive Tiefenreinigung für einen Neustart" },
  { icon: Construction, title: "Baureinigung", desc: "Saubere Übergabe nach Bau- und Renovierungsarbeiten" },
  { icon: PaintBucket, title: "Fassadenreinigung", desc: "Strahlend saubere Gebäudefassaden" },
  { icon: Wind, title: "Teppichreinigung", desc: "Schonende und gründliche Teppichpflege" },
  { icon: HardHat, title: "Bauendreinigung", desc: "Perfekte Endreinigung nach Bauprojekten" },
];

const Services = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Unsere <span className="text-gradient">Leistungen</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Von der regelmäßigen Unterhaltsreinigung bis zur kompletten Bauendreinigung – wir bieten das volle Spektrum professioneller Reinigungsdienstleistungen.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ScrollAnimation key={service.title} delay={i * 0.08}>
            <div className="group relative p-6 rounded-2xl bg-gradient-card glow-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow cursor-default h-full">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      <ScrollAnimation>
        <p className="text-center mt-12 text-muted-foreground text-lg">
          …und vieles mehr.{" "}
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-primary hover:underline font-medium"
          >
            Kontaktieren Sie uns
          </button>{" "}
          für individuelle Lösungen!
        </p>
      </ScrollAnimation>
    </div>
  </section>
);

export default Services;
