import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActivities } from '../../hooks/useApi';

export default function LiveActivity() {
    const { data: activities, loading } = useActivities();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!activities?.length) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % activities.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [activities]);

    if (loading || !activities?.length) return null;

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
                            {current.avatar && (
                                <img
                                    src={current.avatar}
                                    alt=""
                                    className="w-7 h-7 rounded-full object-cover object-top flex-shrink-0"
                                />
                            )}
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
                                idx === currentIndex
                                    ? 'bg-boraq-teal-steel w-4'
                                    : 'bg-boraq-gray-silver/30 dark:bg-boraq-teal-deep/30'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
