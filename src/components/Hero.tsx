import { motion } from "framer-motion";
import ParticleEffect from "./ParticleEffect";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ParticleEffect />
      
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Professionelle Reinigung in Heilbronn</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Sauberkeit auf{" "}
          <span className="text-gradient">höchstem Niveau</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Professionelle Reinigungsdienstleistungen für Gewerbe & Privat im Raum Heilbronn. 
          Zuverlässig, gründlich und mit Liebe zum Detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 text-base font-semibold bg-gradient-cyan text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-glow hover:shadow-[0_0_40px_hsl(193_100%_42%/0.4)]"
          >
            Kostenloses Angebot anfordern
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="px-8 py-4 text-base font-semibold border border-primary/30 text-foreground rounded-xl hover:bg-primary/10 transition-all"
          >
            Unsere Leistungen entdecken
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
