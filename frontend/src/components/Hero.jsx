import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ── Cute side-profile walking cat SVG ── */
function WalkingCat() {
    return (
        <motion.div
            className="relative"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 0.3, repeat: Infinity, ease: 'easeInOut' }}
        >
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="text-boraq-teal-steel drop-shadow-sm">
                {/* Tail — curvy, behind the body */}
                <motion.path
                    d="M3 10 Q0 4 2 1"
                    stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
                    animate={{ d: ['M3 10 Q0 4 2 1', 'M3 10 Q-1 6 4 2', 'M3 10 Q0 4 2 1'] }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Body */}
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="currentColor" />

                {/* Head */}
                <circle cx="21" cy="8" r="5.5" fill="currentColor" />

                {/* Left ear */}
                <polygon points="17.5,4 19,0 20.5,3.5" fill="currentColor" />
                {/* Right ear */}
                <polygon points="22,3 23.5,-0.5 25,3" fill="currentColor" />
                {/* Inner ear pink */}
                <polygon points="18.2,3.8 19,1.2 19.8,3.5" fill="#f8a4b8" />
                <polygon points="22.5,2.8 23.3,0.5 24.1,2.5" fill="#f8a4b8" />

                {/* Eyes — big round cute eyes */}
                <circle cx="20" cy="7" r="1.5" fill="white" />
                <circle cx="24" cy="7" r="1.5" fill="white" />
                <circle cx="20.5" cy="7" r="0.8" fill="#1a1a2e" />
                <circle cx="24.5" cy="7" r="0.8" fill="#1a1a2e" />
                {/* Eye shine */}
                <circle cx="20.8" cy="6.4" r="0.3" fill="white" />
                <circle cx="24.8" cy="6.4" r="0.3" fill="white" />

                {/* Nose */}
                <ellipse cx="26" cy="8.5" rx="0.8" ry="0.5" fill="#f8a4b8" />

                {/* Mouth — little smile */}
                <path d="M24.5 9.5 Q25.5 10.5 26.5 9.5" stroke="#1a1a2e" strokeWidth="0.4" fill="none" />

                {/* Whiskers */}
                <line x1="26" y1="8" x2="28" y2="7" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
                <line x1="26" y1="9" x2="28" y2="9.5" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />

                {/* Front legs — alternating walk */}
                <motion.line
                    x1="16" y1="16" x2="15" y2="21"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                    animate={{ x2: [14, 17, 14] }}
                    transition={{ duration: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.line
                    x1="18" y1="16" x2="19" y2="21"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                    animate={{ x2: [20, 17, 20] }}
                    transition={{ duration: 0.3, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                />
                {/* Back legs */}
                <motion.line
                    x1="7" y1="15" x2="6" y2="21"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                    animate={{ x2: [5, 8, 5] }}
                    transition={{ duration: 0.3, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                />
                <motion.line
                    x1="9" y1="15" x2="10" y2="21"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                    animate={{ x2: [11, 8, 11] }}
                    transition={{ duration: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                />
            </svg>
        </motion.div>
    );
}

export default function Hero() {
    const badgeRef = useRef(null);
    const [badgeWidth, setBadgeWidth] = useState(300);

    useEffect(() => {
        const measure = () => {
            if (badgeRef.current) {
                setBadgeWidth(badgeRef.current.offsetWidth);
            }
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const teamFaces = [
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=60',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=60',
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=60',
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=60',
    ];

    return (
        <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center pt-32 pb-12 md:pt-24 md:pb-0 overflow-hidden">

            {/* Background Decorative Blobs for extra depth (optional, complements the CSS mesh) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-[20%] right-[10%] w-72 h-72 bg-[#032F38]/30 blur-[100px] rounded-full"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-[#EBDFEB]/10 dark:bg-[#032F38]/20 blur-[120px] rounded-full"
                />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center gap-6"
                >
                    {/* Badge with walking cat */}
                    <motion.div variants={itemVariants} className="relative inline-block mb-4">
                        <div ref={badgeRef} className="glass-panel px-4 py-1.5 rounded-full inline-flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-boraq-teal-steel" />
                            <span className="text-sm font-medium tracking-wide text-boraq-black/80 dark:text-boraq-white/80">Next-Gen Software Agency</span>
                        </div>

                        {/* Walking Cat — walks on top of badge, falls off right edge */}
                        <motion.div
                            className="absolute pointer-events-none z-20"
                            style={{ top: '-20px', left: '-28px' }}
                            initial={{ x: 0, opacity: 0 }}
                            animate={{
                                x: [0, badgeWidth, badgeWidth + 8, badgeWidth + 8],
                                opacity: [0, 1, 1, 0],
                                rotate: [0, 0, 0, 90],
                                y: [0, 0, 0, 50],
                            }}
                            transition={{
                                duration: 4.5,
                                delay: 2.5,
                                times: [0, 0.78, 0.9, 1],
                                ease: 'linear',
                                repeat: Infinity,
                                repeatDelay: 12,
                            }}
                        >
                            <WalkingCat />
                        </motion.div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] text-boraq-black dark:text-boraq-white"
                    >
                        Engineering the <br className="hidden md:block" />
                        future of tech.
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mt-4 font-light leading-relaxed"
                    >
                        We build premium, scalable, and intelligent software systems for forward-thinking enterprises. From Web3 platforms to AI integration.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
                        <Link
                            to="/contact"
                            className="group relative w-full sm:w-auto px-8 py-4 bg-boraq-black text-boraq-white dark:bg-boraq-white dark:text-boraq-black rounded-full font-bold overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl shadow-boraq-teal-deep/10"
                        >
                            <span className="relative flex items-center justify-center gap-2">
                                Start a Project
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            to="/portfolio"
                            className="w-full sm:w-auto px-8 py-4 glass-panel rounded-full font-bold flex items-center justify-center gap-2 hover:bg-boraq-black/5 dark:hover:bg-boraq-white/10 transition-colors text-boraq-black dark:text-boraq-white"
                        >
                            <Code className="w-4 h-4" />
                            View Our Work
                        </Link>
                    </motion.div>

                    {/* Metrics/Trust Indicators */}
                    <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-boraq-gray-silver/20 dark:border-boraq-teal-deep/30 w-full grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Enterprise Clients', value: '40+' },
                            { label: 'Systems Shipped', value: '150+' },
                            { label: 'Awards Won', value: '12' },
                            { label: 'Global Reach', value: '8 Countries' }
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <span className="text-3xl font-bold tracking-tight text-boraq-black dark:text-boraq-white">{stat.value}</span>
                                <span className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Social proof bar — human trust signal */}
                    <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {teamFaces.map((src, i) => (
                                    <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-boraq-white dark:border-boraq-black object-cover" />
                                ))}
                            </div>
                            <span className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">
                                Meet the <span className="font-bold text-boraq-black dark:text-boraq-white">real humans</span> behind your project
                            </span>
                        </div>
                        <div className="w-px h-5 bg-boraq-gray-silver/20 dark:bg-boraq-teal-deep/20 hidden sm:block" />
                        <div className="flex items-center gap-1.5">
                            <div className="flex gap-0.5 text-boraq-teal-steel">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                ))}
                            </div>
                            <span className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">
                                <span className="font-bold text-boraq-black dark:text-boraq-white">4.9/5</span> from 50+ reviews
                            </span>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
