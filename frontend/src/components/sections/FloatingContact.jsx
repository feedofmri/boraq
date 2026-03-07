import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

export default function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);

    // Show button after scrolling a bit
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {showButton && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.8 }}
                    className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none"
                >
                    {/* Expanded Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="mb-4 glass-panel-heavy rounded-2xl p-4 shadow-2xl min-w-[280px] pointer-events-auto border-boraq-cyan/20"
                            >
                                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-black/10 dark:border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-boraq-cyan/20 flex items-center justify-center relative">
                                        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-black" />
                                        <img
                                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
                                            alt="Agent"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">Sarah from Boraq</div>
                                        <div className="text-xs text-black/60 dark:text-white/60">Typically replies in 5 mins</div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-sm font-medium">
                                        <MessageCircle className="w-4 h-4 text-boraq-cyan" />
                                        Chat with us Live
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-sm font-medium text-left">
                                        <Phone className="w-4 h-4 text-boraq-cyan" />
                                        Schedule a Call
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-sm font-medium">
                                        <Mail className="w-4 h-4 text-boraq-cyan" />
                                        Leave a Message
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Floating Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-14 h-14 rounded-full bg-boraq-dark text-white dark:bg-white dark:text-black shadow-xl flex items-center justify-center pointer-events-auto hover:scale-105 active:scale-95 transition-all outline-none focus:ring-4 focus:ring-boraq-cyan/30"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
