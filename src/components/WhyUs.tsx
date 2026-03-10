import { MessageSquare, CalendarCheck, Leaf, BadgeEuro } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const reasons = [
  { icon: MessageSquare, title: "Kostenlose Beratung", desc: "Unverbindliche Beratung und transparente Angebote – ohne versteckte Kosten." },
  { icon: CalendarCheck, title: "Flexible Termine", desc: "Wir passen uns Ihrem Zeitplan an – auch abends und am Wochenende." },
  { icon: Leaf, title: "Umweltfreundlich", desc: "Wir setzen auf nachhaltige und umweltschonende Reinigungsmittel." },
  { icon: BadgeEuro, title: "Faire Festpreise", desc: "Transparente Festpreise ohne Überraschungen auf der Rechnung." },
];

const WhyUs = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-primary/5 to-muted/30" />
    
    <div className="container mx-auto px-4 relative z-10">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Warum <span className="text-gradient">SE Reinigung</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Qualität, Vertrauen und Zuverlässigkeit – das macht uns aus.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <ScrollAnimation key={r.title} delay={i * 0.12}>
            <div className="text-center p-8 rounded-2xl bg-gradient-card glow-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow h-full">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center">
                <r.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
