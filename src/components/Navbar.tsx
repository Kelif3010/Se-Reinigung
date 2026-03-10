import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Start", href: "#hero" },
  { label: "Über uns", href: "#about" },
  { label: "Leistungen", href: "#services" },
  { label: "Galerie", href: "#gallery" },
  { label: "Bewertungen", href: "#testimonials" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#hero" onClick={() => handleClick("#hero")} className="flex items-center gap-3">
          <img src={logo} alt="SE Reinigung Logo" className="h-10 w-auto rounded" />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-foreground">SE</span>{" "}
            <span className="text-gradient">REINIGUNG</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50"
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
          <button
            onClick={() => handleClick("#contact")}
            className="ml-2 px-5 py-2.5 text-sm font-semibold bg-gradient-cyan text-primary-foreground rounded-lg hover:opacity-90 transition-opacity shadow-glow"
          >
            Angebot anfordern
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center justify-between mt-2">
              <ThemeToggle />
              <button
                onClick={() => handleClick("#contact")}
                className="px-5 py-3 text-sm font-semibold bg-gradient-cyan text-primary-foreground rounded-lg"
              >
                Angebot anfordern
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
