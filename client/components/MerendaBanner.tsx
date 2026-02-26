import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UtensilsCrossed } from 'lucide-react';

export function MerendaBanner() {
  const [isVisible, setIsVisible] = useState(true); // Always visible by default

  // Commented out for now - uncomment to enable dismissal persistence
  // useEffect(() => {
  //   const dismissed = sessionStorage.getItem('merendaBannerDismissed');
  //   if (!dismissed) {
  //     setIsVisible(true);
  //   }
  // }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('merendaBannerDismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed top-16 left-0 right-0 z-[60] bg-gradient-to-r from-pizzario-green to-emerald-600 text-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1">
                <UtensilsCrossed className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm sm:text-base font-semibold">
                  <span className="hidden sm:inline">🎒 </span>
                  <strong>MERENDA SCOLASTICA DALLE 8:00!</strong>
                  <span className="hidden sm:inline ml-2">Prodotti dolci e salati per i bambini delle elementari</span>
                  <span className="sm:hidden ml-2">Prodotti per bambini</span>
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="p-1.5 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
                aria-label="Chiudi banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
