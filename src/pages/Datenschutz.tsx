import { Link } from "react-router-dom";

const Datenschutz = () => (
  <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
      <div className="space-y-4 text-muted-foreground">
        <p>Diese Seite wird in Kürze mit einer vollständigen Datenschutzerklärung ergänzt.</p>
      </div>
      <Link to="/" className="inline-block mt-8 text-primary hover:underline">← Zurück zur Startseite</Link>
    </div>
  </div>
);

export default Datenschutz;
