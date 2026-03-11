import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { toast } from "sonner";

const serviceOptions = [
  "Unterhaltsreinigung", "Büroreinigung", "Treppenhausreinigung", "Fensterreinigung",
  "Grundreinigung", "Baureinigung", "Fassadenreinigung", "Teppichreinigung", "Bauendreinigung", "Sonstiges",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1000);
  };

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Jetzt kostenloses <span className="text-gradient">Angebot anfordern</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Beschreiben Sie uns Ihr Anliegen und wir erstellen Ihnen ein unverbindliches Angebot.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <ScrollAnimation className="lg:col-span-3" direction="left">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-gradient-card glow-border space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Name *</label>
                  <input
                    type="text" required value={form.name} onChange={(e) => update("name", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">E-Mail *</label>
                  <input
                    type="email" required value={form.email} onChange={(e) => update("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Telefon</label>
                  <input
                    type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="+49 ..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Gewünschte Leistung</label>
                  <select
                    value={form.service} onChange={(e) => update("service", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  >
                    <option value="">Bitte auswählen</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Nachricht *</label>
                <textarea
                  required value={form.message} onChange={(e) => update("message", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 text-base font-semibold bg-gradient-cyan text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-glow flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {sending ? "Wird gesendet..." : "Nachricht senden"}
              </button>
            </form>
          </ScrollAnimation>

          {/* Info */}
          <ScrollAnimation className="lg:col-span-2" direction="right">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-card glow-border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Kontaktdaten</h3>
                <div className="space-y-4">
                  <a href="tel:+4915566846752" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">+49 155 66846752</span>
                  </a>
                  <a href="mailto:sereinigungpacaci@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">sereinigungpacaci@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">Raum Stuttgart & Umgebung</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-card glow-border">
                <h3 className="text-lg font-bold mb-2 text-foreground">Schnelle Antwort</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wir antworten in der Regel innerhalb von 24 Stunden. Für dringende Anfragen erreichen Sie uns auch direkt per Telefon oder WhatsApp.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
