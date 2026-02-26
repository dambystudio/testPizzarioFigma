import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function FloatingCTA() {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/393881234567" // Replace with actual number
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all">
                    <MessageCircle className="w-6 h-6" />
                </div>

                <AnimatePresence>
                    {showTooltip && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap"
                        >
                            Scrivici su WhatsApp
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.a>

            {/* Phone Button */}
            <motion.a
                href="tel:+393881234567" // Replace with actual number
                className="bg-pizzario-green hover:bg-pizzario-green/90 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <Phone className="w-6 h-6" />
            </motion.a>
        </div>
    );
}
