import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart } from 'lucide-react';

const stats = [
    { label: 'Revenue Generated', prefix: '$', value: 500, suffix: 'M+', delay: 0, context: 'For our partners\' businesses' },
    { label: 'Enterprise Partners', prefix: '', value: 150, suffix: '+', delay: 0.1, context: 'Long-term relationships built on trust' },
    { label: 'Lines of Code Shipped', prefix: '', value: 10, suffix: 'M+', delay: 0.2, context: 'Handcrafted by our engineering team' },
    { label: 'Client Retention Rate', prefix: '', value: 98, suffix: '%', delay: 0.3, context: 'They stay because we deliver' },
];

function CountUp({ value, duration = 2 }) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime = null;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            // Easing function (easeOutQuart)
            const easeProgress = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(easeProgress * value));

            if (progress < duration * 1000) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [value, duration, isInView]);

    return <span ref={nodeRef}>{count}</span>;
}

export default function StatsCounter() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="glass-panel-heavy rounded-[2.5rem] p-12 relative overflow-hidden">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#032F38]/20 via-transparent to-transparent opacity-50 pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#032F38]/20 blur-[100px] rounded-full" />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 divide-x divide-boraq-gray-silver/30 dark:divide-boraq-teal-deep/30">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: stat.delay }}
                            className="text-center px-4"
                        >
                            <div className="flex items-baseline justify-center text-4xl md:text-5xl lg:text-6xl font-black mb-2 text-boraq-black dark:text-boraq-white">
                                {stat.prefix && <span className="text-3xl text-boraq-teal-steel mr-1">{stat.prefix}</span>}
                                <CountUp value={stat.value} />
                                {stat.suffix && <span className="text-3xl text-boraq-teal-steel ml-1">{stat.suffix}</span>}
                            </div>
                            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-bold tracking-widest uppercase text-xs mb-2">
                                {stat.label}
                            </p>
                            <p className="text-xs text-boraq-gray-mid/60 dark:text-boraq-gray-silver/40 italic">
                                {stat.context}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Human-centered note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative z-10 mt-10 pt-8 border-t border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 text-center"
                >
                    <div className="inline-flex items-center gap-2 text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span>Behind every number is a <span className="font-bold text-boraq-black dark:text-boraq-white">real team</span> that cares about your success</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
