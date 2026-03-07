import { motion } from 'framer-motion';
import { Shield, Award, Star, CheckCircle2 } from 'lucide-react';

const badges = [
    {
        icon: Award,
        title: 'Clutch Top Agency',
        description: 'Recognized as a top software development company for 3 consecutive years.',
        year: '2024–2026',
    },
    {
        icon: Star,
        title: 'Google Partner',
        description: 'Certified Google Cloud and Google Workspace technology partner.',
        year: 'Certified',
    },
    {
        icon: Shield,
        title: 'ISO 27001',
        description: 'Information security management certified — your data is always protected.',
        year: 'Compliant',
    },
    {
        icon: CheckCircle2,
        title: 'SOC 2 Type II',
        description: 'Audited and verified controls for security, availability, and confidentiality.',
        year: 'Verified',
    },
];

export default function TrustBadges() {
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
                {badges.map((badge, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="glass-panel rounded-2xl p-6 h-full flex flex-col items-center text-center hover:border-boraq-teal-steel/30 transition-all duration-300 relative overflow-hidden">
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-boraq-teal-steel/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-boraq-teal-steel/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <badge.icon className="w-7 h-7 text-boraq-teal-steel" />
                                </div>

                                <div className="px-2 py-0.5 rounded-full bg-boraq-teal-deep/10 text-boraq-teal-steel text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">
                                    {badge.year}
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
                ))}
            </div>
        </section>
    );
}
