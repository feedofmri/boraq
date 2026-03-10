import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, BadgeCheck, Clock, TrendingUp } from 'lucide-react';
import { useTestimonials } from '../../hooks/useApi';

export default function Testimonials() {
    const { data: testimonials, loading } = useTestimonials();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    if (loading || !testimonials?.length) {
        return <section className="max-w-7xl mx-auto px-6 py-24"><p className="text-center text-boraq-gray-mid">Loading testimonials...</p></section>;
    }

    const next = () => { setDirection(1); setCurrentIndex((prev) => (prev + 1) % testimonials.length); };
    const prev = () => { setDirection(-1); setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); };

    const handleDragEnd = (e, info) => {
        const threshold = 50;
        if (info.offset.x < -threshold) next();
        else if (info.offset.x > threshold) prev();
    };

    const t = testimonials[currentIndex];

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-boraq-black dark:text-boraq-white">Don't Take Our <span className="text-boraq-teal-steel">Word For It</span></h2>
                <p className="text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mx-auto font-light">
                    Hear directly from founders and engineering leaders who have scaled with us.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                    <div className="flex items-center gap-2 text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">
                        <div className="flex items-center gap-0.5 text-boraq-teal-steel">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <span className="font-bold text-boraq-black dark:text-boraq-white">5.0/5</span>
                        on Google
                    </div>
                    <div className="w-px h-4 bg-boraq-gray-silver/30 dark:bg-boraq-teal-deep/30 hidden sm:block" />
                    <div className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">
                        <span className="font-bold text-boraq-black dark:text-boraq-white">28+</span> global clients
                    </div>
                    <div className="w-px h-4 bg-boraq-gray-silver/30 dark:bg-boraq-teal-deep/30 hidden sm:block" />
                    <div className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">
                        <span className="font-bold text-boraq-black dark:text-boraq-white">98%</span> client retention
                    </div>
                </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -80 }}
                        transition={{ duration: 0.4 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleDragEnd}
                        className="glass-panel-heavy rounded-[2.5rem] p-8 md:p-12 cursor-grab active:cursor-grabbing"
                    >
                        <div className="flex items-center gap-0.5 mb-6 text-boraq-teal-steel">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                        </div>
                        <p className="text-2xl md:text-3xl font-medium text-boraq-black dark:text-boraq-white leading-relaxed mb-8">
                            "{t.quote}"
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <img src={t.author_image_url} alt={t.author_name} className="w-14 h-14 rounded-full object-cover" />
                                <div>
                                    <div className="font-bold text-boraq-black dark:text-boraq-white flex items-center gap-2">
                                        {t.author_name}
                                        {t.verified && <BadgeCheck className="w-5 h-5 text-boraq-teal-steel" />}
                                    </div>
                                    <div className="text-sm text-boraq-teal-steel font-medium">{t.author_role}</div>
                                    <div className="text-xs text-boraq-gray-mid dark:text-boraq-gray-silver">{t.company}</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-1.5 text-xs font-bold text-boraq-gray-mid dark:text-boraq-gray-silver bg-boraq-black/5 dark:bg-boraq-white/5 px-3 py-1.5 rounded-full">
                                    <Clock className="w-3 h-3" /> {t.project_duration}
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-bold text-green-600 dark:text-green-400 bg-green-500/10 px-3 py-1.5 rounded-full">
                                    <TrendingUp className="w-3 h-3" /> {t.result}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-center gap-4 mt-8">
                    <button onClick={prev} className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-boraq-teal-steel hover:text-boraq-black transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">
                        {testimonials.map((_, idx) => (
                            <button key={idx} onClick={() => { setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-boraq-teal-steel w-8' : 'bg-boraq-gray-silver/30 dark:bg-boraq-teal-deep/30'}`} />
                        ))}
                    </div>
                    <button onClick={next} className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-boraq-teal-steel hover:text-boraq-black transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
