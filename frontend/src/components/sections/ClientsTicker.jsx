import { motion } from 'framer-motion';
import { useClients, useTrustBadges } from '../../hooks/useApi';
import { getIcon } from '../../utils/iconMap';

export default function ClientsTicker() {
    const { data: logos, loading: loadingClients } = useClients();
    const { data: trustData, loading: loadingTrust } = useTrustBadges();

    const trustIndicators = trustData?.indicators || [];

    if (loadingClients || !logos?.length) {
        return <section className="w-full mt-8 md:mt-12 py-16 overflow-hidden"><p className="text-center text-boraq-gray-mid">Loading...</p></section>;
    }

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
                            <div key={`l1-${index}`} className="flex items-center gap-4 px-12 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                                <span className="text-2xl text-boraq-teal-steel">{logo.symbol}</span>
                                <span className="text-2xl font-bold tracking-tight text-boraq-black dark:text-boraq-white">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center" aria-hidden="true">
                        {logos.map((logo, index) => (
                            <div key={`l2-${index}`} className="flex items-center gap-4 px-12 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                                <span className="text-2xl text-boraq-teal-steel">{logo.symbol}</span>
                                <span className="text-2xl font-bold tracking-tight text-boraq-black dark:text-boraq-white">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {trustIndicators.length > 0 && (
                <div className="max-w-7xl mx-auto px-6 mt-10 pt-8 border-t border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                        {trustIndicators.map((item, index) => {
                            const Icon = getIcon(item.icon_name);
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="flex items-center gap-2 text-boraq-gray-mid dark:text-boraq-gray-silver opacity-70 hover:opacity-100 transition-opacity"
                                >
                                    {Icon && <Icon className="w-4 h-4 text-boraq-teal-steel" />}
                                    <span className="text-xs font-bold tracking-wide uppercase">{item.label}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            )}
        </section>
    );
}
