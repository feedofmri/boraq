import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, BadgeCheck, ExternalLink, Clock, TrendingUp } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "Boraq didn't just build our app; they engineered our entire digital strategy. Their architecture scaled flawlessly from 10k to 1M users.",
        author: "Jason Martinez",
        role: "CTO, NovaBank",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
        company: "NovaBank",
        verified: true,
        platform: "Clutch",
        platformUrl: "#",
        projectDuration: "8 months",
        result: "10x user growth",
    },
    {
        id: 2,
        quote: "The level of transparency is unprecedented. We felt like we had an in-house engineering team, not an external agency. Truly a game-changing partnership.",
        author: "Amanda Lee",
        role: "Founder, HealthSync",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
        company: "HealthSync",
        verified: true,
        platform: "Google Reviews",
        platformUrl: "#",
        projectDuration: "12 months",
        result: "40% cost reduction",
    },
    {
        id: 3,
        quote: "Their UI/UX team transformed our complex enterprise software into an intuitive dashboard that our employees actually love using.",
        author: "Marcus Johnson",
        role: "VP Operations, OmniCorp",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
        company: "OmniCorp",
        verified: true,
        platform: "Clutch",
        platformUrl: "#",
        projectDuration: "6 months",
        result: "3x productivity boost",
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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
                        <span className="font-bold text-boraq-black dark:text-boraq-white">4.9/5</span>
                        on Clutch
                    </div>
                    <div className="w-px h-4 bg-boraq-gray-silver/30 dark:bg-boraq-teal-deep/30 hidden sm:block" />
                    <div className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">
                        <span className="font-bold text-boraq-black dark:text-boraq-white">50+</span> verified reviews
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
                    <div className="flex-1 min-h-[350px] flex items-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
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

            {/* Testimonial navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? 'bg-boraq-teal-steel w-8'
                                : 'bg-boraq-gray-silver/30 dark:bg-boraq-teal-deep/30 hover:bg-boraq-teal-steel/50'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
