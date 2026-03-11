import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const quickLinks = [
  { label: "Über uns", href: "#about" },
  { label: "Leistungen", href: "#services" },
  { label: "Galerie", href: "#gallery" },
  { label: "Bewertungen", href: "#testimonials" },
  { label: "Kontakt", href: "#contact" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="SE Reinigung" className="h-10 w-auto rounded" />
              <span className="text-xl font-bold">
                SE <span className="text-gradient">REINIGUNG</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professionelle Reinigungsdienstleistungen für Gewerbe & Privat im Raum Heilbronn.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Schnellzugriff</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Legal */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Kontakt</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Inhaber: Serhat Pacaci</p>
              <p>Tel: +49 155 66846752</p>
              <p>E-Mail: sereinigungpacaci@gmail.com</p>
              <p>Einsatzgebiet: Raum Heilbronn</p>
            </div>
            <div className="flex gap-4 mt-4">
              <Link to="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SE Reinigung. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
