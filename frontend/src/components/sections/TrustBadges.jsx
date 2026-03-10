import { motion } from 'framer-motion';
import { useTrustBadges } from '../../hooks/useApi';
import { getIcon } from '../../utils/iconMap';

export default function TrustBadges() {
    const { data: trustData, loading } = useTrustBadges();
    const badges = trustData?.badges || [];

    if (loading || !badges.length) {
        return <section className="max-w-7xl mx-auto px-6 py-16"><p className="text-center text-boraq-gray-mid">Loading...</p></section>;
    }

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-10">
                <p className="text-xs font-bold tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver uppercase mb-2">
                    Verified & Certified
                </p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-boraq-black dark:text-boraq-white">
                    Standards you can <span className="text-boraq-teal-steel">trust</span>
                </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {badges.map((badge, index) => {
                    const Icon = getIcon(badge.icon_name);
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="glass-panel rounded-2xl p-6 h-full flex flex-col items-center text-center hover:border-boraq-teal-steel/30 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-boraq-teal-steel/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-boraq-teal-steel/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {Icon && <Icon className="w-7 h-7 text-boraq-teal-steel" />}
                                    </div>
                                    <div className="px-2 py-0.5 rounded-full bg-boraq-teal-deep/10 text-boraq-teal-steel text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">
                                        {badge.year_label}
                                    </div>
                                    <h4 className="font-bold text-sm mb-2 text-boraq-black dark:text-boraq-white">
                                        {badge.title}
                                    </h4>
                                    <p className="text-xs text-boraq-gray-mid dark:text-boraq-gray-silver leading-relaxed">
                                        {badge.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
