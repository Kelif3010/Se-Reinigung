import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) setTimeout(() => setVisible(true), 1500);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="p-6 rounded-2xl bg-card/95 backdrop-blur-xl border border-border shadow-lg flex flex-col sm:flex-row items-center gap-4">
              <p className="text-sm text-muted-foreground flex-1">
                Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.{" "}
                <a href="/datenschutz" className="text-primary hover:underline">Mehr erfahren</a>
              </p>
              <button
                onClick={accept}
                className="px-6 py-2.5 text-sm font-semibold bg-gradient-cyan text-primary-foreground rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Verstanden
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
