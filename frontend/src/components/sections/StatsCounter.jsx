import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Zap } from 'lucide-react';

const stats = [
    { label: 'Projects Delivered', prefix: '', value: 32, suffix: '+', delay: 0, context: 'Across all six service divisions', color: 'from-blue-400 to-cyan-400' },
    { label: 'Global Clients', prefix: '', value: 28, suffix: '+', delay: 0.1, context: 'Long-term relationships built on trust', color: 'from-purple-400 to-pink-400' },
    { label: 'User Satisfaction', prefix: '', value: 4.9, suffix: '/5', delay: 0.2, context: 'Google verified 5.0 rating', color: 'from-green-400 to-emerald-400' },
    { label: 'Service Divisions', prefix: '', value: 6, suffix: '', delay: 0.3, context: 'Web & App, UI & Branding, AI, Vision, IoT, Web3', color: 'from-orange-400 to-yellow-400' },
];

const particleColors = ['#60a5fa', '#a78bfa', '#f472b6', '#34d399', '#fbbf24', '#f87171'];

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

function StatCard({ stat, index, onReveal }) {
    const [revealed, setRevealed] = useState(false);
    const [particles, setParticles] = useState([]);

    const handleClick = () => {
        if (revealed) return;
        setRevealed(true);
        onReveal();
        // Spawn particles
        setParticles([...Array(6)].map((_, i) => ({
            id: Date.now() + i,
            color: particleColors[i % particleColors.length],
            angle: (i / 6) * 360,
        })));
        setTimeout(() => setParticles([]), 1000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: stat.delay }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleClick}
            className={`text-center px-4 py-6 rounded-2xl transition-all duration-300 relative cursor-pointer select-none ${
                revealed
                    ? 'bg-boraq-teal-steel/5 border border-boraq-teal-steel/20'
                    : 'hover:bg-boraq-white/30 dark:hover:bg-boraq-white/5'
            }`}
        >
            {/* Particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full pointer-events-none z-20"
                    style={{ backgroundColor: p.color }}
                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                    animate={{
                        x: Math.cos((p.angle * Math.PI) / 180) * 60,
                        y: Math.sin((p.angle * Math.PI) / 180) * 60,
                        scale: 0,
                        opacity: 0,
                    }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                />
            ))}

            {/* Glow ring on reveal */}
            {revealed && (
                <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0`}
                    initial={{ opacity: 0.3, scale: 1.1 }}
                    animate={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />
            )}

            <div className="flex items-baseline justify-center text-4xl md:text-5xl lg:text-6xl font-black mb-2 text-boraq-black dark:text-boraq-white">
                {stat.prefix && <span className="text-3xl text-boraq-teal-steel mr-1">{stat.prefix}</span>}
                {revealed ? <CountUp value={stat.value} /> : (
                    <span className="text-boraq-gray-silver/40 dark:text-boraq-teal-deep/40 animate-pulse-opacity">?</span>
                )}
                {revealed && stat.suffix && <span className="text-3xl text-boraq-teal-steel ml-1">{stat.suffix}</span>}
            </div>
            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-bold tracking-widest uppercase text-xs mb-2">
                {stat.label}
            </p>
            <p className="text-xs text-boraq-gray-mid/60 dark:text-boraq-gray-silver/40 italic">
                {revealed ? stat.context : 'Click to reveal'}
            </p>
        </motion.div>
    );
}

export default function StatsCounter() {
    const [revealedCount, setRevealedCount] = useState(0);
    const allRevealed = revealedCount >= stats.length;

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="glass-panel-heavy rounded-[2.5rem] p-12 relative overflow-hidden">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#032F38]/20 via-transparent to-transparent opacity-50 pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#032F38]/20 blur-[100px] rounded-full" />

                {/* Progress indicator */}
                <div className="relative z-10 flex items-center justify-center gap-2 mb-8">
                    {stats.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i < revealedCount ? 'bg-boraq-teal-steel w-8' : 'bg-boraq-gray-silver/20 dark:bg-boraq-teal-deep/20 w-4'}`}
                        />
                    ))}
                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="ml-2 text-xs font-mono text-boraq-teal-steel font-bold flex items-center gap-1"
                        >
                            <Zap className="w-3 h-3" /> All revealed
                        </motion.span>
                    )}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            stat={stat}
                            index={index}
                            onReveal={() => setRevealedCount((c) => c + 1)}
                        />
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
