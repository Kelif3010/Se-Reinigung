import { Star } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const testimonials = [
  {
    name: "Markus W.",
    service: "Büroreinigung",
    text: "SE Reinigung überzeugt mit Zuverlässigkeit und erstklassiger Qualität. Unser Büro war noch nie so sauber. Absolut empfehlenswert!",
  },
  {
    name: "Sandra K.",
    service: "Grundreinigung",
    text: "Die Grundreinigung unserer Wohnung war ein voller Erfolg. Professionell, gründlich und zu einem fairen Preis. Vielen Dank!",
  },
  {
    name: "Thomas M.",
    service: "Treppenhausreinigung",
    text: "Seit SE Reinigung unser Treppenhaus pflegt, erhalten wir regelmäßig Komplimente von den Mietern. Top Service!",
  },
  {
    name: "Julia R.",
    service: "Fensterreinigung",
    text: "Streifenfrei und blitzsauber – die Fensterreinigung war hervorragend. Herr Pacaci und sein Team sind sehr zuverlässig.",
  },
  {
    name: "Andreas B.",
    service: "Bauendreinigung",
    text: "Nach der Renovierung war alles perfekt sauber übergeben. Schnell, professionell und unkompliziert. Gerne wieder!",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Das sagen unsere <span className="text-gradient">Kunden</span>
          </h2>
          <p className="text-muted-foreground text-lg">Vertrauen Sie nicht nur uns – hören Sie, was unsere Kunden sagen.</p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <ScrollAnimation key={t.name} delay={i * 0.1}>
            <div className="p-6 rounded-2xl bg-gradient-card glow-border h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">„{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-primary">{t.service}</p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
