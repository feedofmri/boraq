import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, BadgeCheck, ExternalLink, Clock, TrendingUp } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "Boraq delivered our eCommerce platform on time with a scalable architecture. Their dedicated manager kept us in the loop everyday.",
        author: "Arifur Rahman",
        role: "CEO, AgriTech Startup",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        company: "Nibaron",
        verified: true,
        platform: "Google Reviews",
        platformUrl: "#",
        projectDuration: "4 months",
        result: "Scalable marketplace architecture",
    },
    {
        id: 2,
        quote: "The team at Boraq transformed our brand identity with Moushum: a nature-inspired design that perfectly captured our vision. Excellent design systems.",
        author: "Nusrat Jahan",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        company: "Moushum",
        verified: true,
        platform: "Google Reviews",
        platformUrl: "#",
        projectDuration: "3 months",
        result: "Complete brand identity",
    },
    {
        id: 3,
        quote: "Their AI expertise helped us build predictive ML models that truly add value. Boraq's customized research approach made all the difference.",
        author: "Sarah Jenkins",
        role: "Head of Product",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
        company: "Retail Intel",
        verified: true,
        platform: "Google Reviews",
        platformUrl: "#",
        projectDuration: "5 months",
        result: "ML-powered insights tool",
    },
    {
        id: 4,
        quote: "Boraq's Web3 expertise helped us launch a secure, transparent protocol. Their code audits gave us and our users real peace of mind.",
        author: "Michael Chen",
        role: "CTO",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
        company: "ChainLabs",
        verified: true,
        platform: "Google Reviews",
        platformUrl: "#",
        projectDuration: "3 months",
        result: "Secure Layer-2 protocol",
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const next = () => { setDirection(1); setCurrentIndex((prev) => (prev + 1) % testimonials.length); };
    const prev = () => { setDirection(-1); setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); };

    const handleDragEnd = (e, info) => {
        const threshold = 50;
        if (info.offset.x < -threshold) next();
        else if (info.offset.x > threshold) prev();
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-boraq-black dark:text-boraq-white">Don't Take Our <span className="text-boraq-teal-steel">Word For It</span></h2>
                <p className="text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mx-auto font-light">
                    Hear directly from founders and engineering leaders who have scaled with us.
                </p>
                {/* Aggregate social proof bar */}
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

            <div className="relative glass-panel-heavy rounded-[2.5rem] p-8 md:p-16 overflow-hidden">
                {/* Decorative Quote Mark */}
                <div className="absolute top-10 left-10 text-boraq-teal-steel/10 text-[10rem] font-serif leading-none pointer-events-none select-none">
                    "
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    {/* Navigation Controls */}
                    <div className="flex gap-4 md:flex-col order-last md:order-first">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full glass-panel-heavy flex items-center justify-center hover:bg-boraq-black hover:text-boraq-white dark:hover:bg-boraq-white dark:hover:text-boraq-black transition-all focus:outline-none focus:ring-4 focus:ring-boraq-teal-steel/30"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full glass-panel-heavy flex items-center justify-center hover:bg-boraq-black hover:text-boraq-white dark:hover:bg-boraq-white dark:hover:text-boraq-black transition-all focus:outline-none focus:ring-4 focus:ring-boraq-teal-steel/30"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1 min-h-[350px] flex items-center overflow-hidden cursor-grab active:cursor-grabbing">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                initial={{ opacity: 0, x: direction * 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction * -80 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.3}
                                onDragEnd={handleDragEnd}
                                className="w-full"
                            >
                                <div className="flex items-center gap-1 mb-6 text-boraq-teal-steel">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>

                                <h3 className="text-2xl md:text-4xl font-medium tracking-tight mb-8 leading-snug text-boraq-black dark:text-boraq-white">
                                    "{testimonials[currentIndex].quote}"
                                </h3>

                                {/* Project outcome badges */}
                                <div className="flex flex-wrap gap-3 mb-8">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-boraq-teal-steel/10 text-boraq-teal-steel text-xs font-bold">
                                        <Clock className="w-3.5 h-3.5" />
                                        {testimonials[currentIndex].projectDuration} engagement
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold">
                                        <TrendingUp className="w-3.5 h-3.5" />
                                        {testimonials[currentIndex].result}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-boraq-teal-steel/30 p-1">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].author}
                                                className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg text-boraq-black dark:text-boraq-white flex items-center gap-2">
                                                {testimonials[currentIndex].author}
                                                {testimonials[currentIndex].verified && (
                                                    <BadgeCheck className="w-5 h-5 text-boraq-teal-steel" title="Verified Client" />
                                                )}
                                            </div>
                                            <div className="text-boraq-teal-steel font-bold text-sm tracking-wide">
                                                {testimonials[currentIndex].role}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Platform attribution */}
                                    {testimonials[currentIndex].platform && (
                                        <a
                                            href={testimonials[currentIndex].platformUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-medium text-boraq-gray-mid dark:text-boraq-gray-silver hover:text-boraq-teal-steel transition-colors"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" />
                                            Verified via {testimonials[currentIndex].platform}
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Testimonial navigation dots + swipe hint */}
            <div className="flex flex-col items-center gap-3 mt-8">
                <div className="flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }}
                            className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-boraq-teal-steel w-8'
                                : 'bg-boraq-gray-silver/30 dark:bg-boraq-teal-deep/30 hover:bg-boraq-teal-steel/50 w-2.5'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
                <p className="text-[10px] font-mono text-boraq-gray-mid/40 dark:text-boraq-gray-silver/30">Swipe or use arrows to navigate</p>
            </div>
        </section>
    );
}
