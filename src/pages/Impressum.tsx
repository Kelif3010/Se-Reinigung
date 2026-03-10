import { Link } from "react-router-dom";

const Impressum = () => (
  <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>
      <div className="space-y-4 text-muted-foreground">
        <p><strong className="text-foreground">SE Reinigung</strong></p>
        <p>Inhaber: Serhat Pacaci</p>
        <p>Telefon: +49 163 7128274</p>
        <p>E-Mail: Pacaciserhat9@gmail.com</p>
        <p>Einsatzgebiet: Raum Stuttgart & Umgebung</p>
        <p className="pt-4 text-sm">Diese Seite wird in Kürze mit vollständigen Angaben ergänzt.</p>
      </div>
      <Link to="/" className="inline-block mt-8 text-primary hover:underline">← Zurück zur Startseite</Link>
    </div>
  </div>
);

export default Impressum;
