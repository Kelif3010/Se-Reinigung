import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { Users, Clock, Award } from "lucide-react";

const counters = [
  { icon: Users, value: 500, suffix: "+", label: "Zufriedene Kunden" },
  { icon: Clock, value: 10, suffix: "+", label: "Jahre Erfahrung" },
  { icon: Award, value: 100, suffix: "%", label: "Kundenzufriedenheit" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-gradient">
      {count}{suffix}
    </span>
  );
};

const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <ScrollAnimation>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Über <span className="text-gradient">SE Reinigung</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Als inhabergeführtes Unternehmen steht SE Reinigung für persönlichen Service und kompromisslose Qualität. 
            Inhaber Serhat Pacaci und sein eingespieltes Team sorgen seit Jahren für makellose Sauberkeit 
            in Gewerbe- und Privatimmobilien im Raum Stuttgart. Zuverlässigkeit, Gründlichkeit und absolute 
            Kundenzufriedenheit sind nicht nur Versprechen – sie sind unser täglicher Anspruch.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {counters.map((item, i) => (
          <ScrollAnimation key={item.label} delay={i * 0.15}>
            <div className="text-center p-8 rounded-2xl bg-gradient-card glow-border">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <Counter target={item.value} suffix={item.suffix} />
              <p className="mt-2 text-muted-foreground font-medium">{item.label}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  </section>
);

export default About;
