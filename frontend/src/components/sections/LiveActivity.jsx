import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const activities = [
    {
        text: 'Sarah completed a sprint review with NovaBank',
        time: '2 hours ago',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=60',
    },
    {
        text: 'New case study published — HealthSync AI Dashboard',
        time: '5 hours ago',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=60',
    },
    {
        text: 'Michael shipped v2.4 for OmniCorp platform',
        time: 'Yesterday',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=60',
    },
    {
        text: 'Elena deployed ML model for real-time fraud detection',
        time: 'Yesterday',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=60',
    },
    {
        text: 'New client onboarded — Welcome, FinNova!',
        time: '2 days ago',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=60',
    },
];

export default function LiveActivity() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % activities.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const current = activities[currentIndex];

    return (
        <section className="max-w-7xl mx-auto px-6 py-8">
            <div className="glass-panel rounded-2xl px-6 py-4 flex items-center justify-center gap-4 overflow-hidden">
                {/* Live indicator */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver hidden sm:inline">
                        Live
                    </span>
                </div>

                <div className="w-px h-6 bg-boraq-gray-silver/20 dark:bg-boraq-teal-deep/20 flex-shrink-0" />

                {/* Activity content */}
                <div className="flex-1 min-w-0 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-3"
                        >
                            <img
                                src={current.avatar}
                                alt=""
                                className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                            />
                            <div className="min-w-0">
                                <p className="text-sm text-boraq-black dark:text-boraq-white font-medium truncate">
                                    {current.text}
                                </p>
                                <p className="text-xs text-boraq-gray-mid dark:text-boraq-gray-silver">
                                    {current.time}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Activity dots navigation */}
                <div className="hidden sm:flex gap-1 flex-shrink-0">
                    {activities.map((_, idx) => (
                        <span
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                idx === currentIndex ? 'bg-boraq-teal-steel w-4' : 'bg-boraq-gray-silver/30 dark:bg-boraq-teal-deep/30'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
