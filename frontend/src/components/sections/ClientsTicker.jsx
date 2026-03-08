import { motion } from 'framer-motion';
import { Shield, Award, Star, BadgeCheck } from 'lucide-react';

const logos = [
    { name: 'Boraq Space', symbol: '🛒' },
    { name: 'Proshno', symbol: '❓' },
    { name: 'Sohojogi', symbol: '🏠' },
    { name: 'Moushum', symbol: '🌿' },
    { name: 'Nibaron', symbol: '🌾' },
    { name: 'LiteDocs', symbol: '📄' },
    { name: 'Nondan', symbol: '🎉' },
    { name: 'AuraAccess', symbol: '📡' },
];

const trustIndicators = [
    { icon: Star, label: 'Google Verified 5.0' },
    { icon: Award, label: '32+ Projects Delivered' },
    { icon: BadgeCheck, label: '28+ Global Clients' },
    { icon: Shield, label: '24x7 Support' },
];

export default function ClientsTicker() {
    return (
        <section className="w-full mt-8 md:mt-12 py-16 overflow-hidden bg-boraq-black/5 dark:bg-boraq-white/5 border-y border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center pt-8 md:pt-0">
                <p className="text-xs font-bold tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver uppercase">
                    Trusted by innovative teams worldwide
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                {/* Gradients for smooth fade effect at edges */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-boraq-white dark:from-boraq-black to-transparent z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-boraq-white dark:from-boraq-black to-transparent z-10" />

                {/* CSS-animated ticker — GPU-accelerated, no JS overhead */}
                <div
                    className="flex whitespace-nowrap cursor-pointer animate-ticker hover:[animation-play-state:paused]"
                    style={{ willChange: 'transform' }}
                >
                    <div className="flex items-center">
                        {logos.map((logo, index) => (
                            <div
                                key={`l1-${index}`}
                                className="flex items-center gap-4 px-12 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                            >
                                <span className="text-2xl text-boraq-teal-steel">{logo.symbol}</span>
                                <span className="text-2xl font-bold tracking-tight text-boraq-black dark:text-boraq-white">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center" aria-hidden="true">
                        {logos.map((logo, index) => (
                            <div
                                key={`l2-${index}`}
                                className="flex items-center gap-4 px-12 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                            >
                                <span className="text-2xl text-boraq-teal-steel">{logo.symbol}</span>
                                <span className="text-2xl font-bold tracking-tight text-boraq-black dark:text-boraq-white">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trust indicators strip */}
            <div className="max-w-7xl mx-auto px-6 mt-10 pt-8 border-t border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                    {trustIndicators.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center gap-2 text-boraq-gray-mid dark:text-boraq-gray-silver opacity-70 hover:opacity-100 transition-opacity"
                        >
                            <item.icon className="w-4 h-4 text-boraq-teal-steel" />
                            <span className="text-xs font-bold tracking-wide uppercase">{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
