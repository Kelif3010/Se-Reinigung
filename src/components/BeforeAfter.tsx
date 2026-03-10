import { useState, useRef, useCallback } from "react";
import ScrollAnimation from "./ScrollAnimation";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const comparisons = [
  { before: beforeAfter1, after: beforeAfter1, label: "Büroreinigung – Großraumbüro Stuttgart" },
  { before: beforeAfter2, after: beforeAfter2, label: "Treppenhausreinigung – Mehrfamilienhaus" },
  { before: beforeAfter3, after: beforeAfter3, label: "Fensterreinigung – Glasfassade" },
];

const Slider = ({ before, after, label }: { before: string; after: string; label: string }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    dragging.current = false;
  };

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-col-resize glow-border"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* After (full) */}
        <img src={after} alt="Nachher" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        {/* Before (clipped) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <img src={before} alt="Vorher" className="absolute inset-0 w-full h-full object-cover grayscale brightness-75" loading="lazy" />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 text-xs font-semibold">Vorher</div>
        </div>
        {/* Divider */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-primary shadow-glow" style={{ left: `${position}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-glow">
            <span className="text-primary-foreground text-xs font-bold">↔</span>
          </div>
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/80 text-xs font-semibold text-primary-foreground">Nachher</div>
      </div>
      <p className="text-center text-sm text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

const BeforeAfter = () => (
  <section id="gallery" className="py-24 md:py-32 bg-muted/20">
    <div className="container mx-auto px-4">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Vorher & <span className="text-gradient">Nachher</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von unseren Ergebnissen. Ziehen Sie den Regler, um den Unterschied zu sehen.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {comparisons.map((c, i) => (
          <ScrollAnimation key={c.label} delay={i * 0.15}>
            <Slider {...c} />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfter;
