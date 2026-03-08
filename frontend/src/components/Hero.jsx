import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ── Cute side-profile walking cat SVG ── */
function WalkingCat() {
    return (
        <div className="relative animate-cat-bounce" style={{ willChange: 'transform' }}>
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="text-boraq-teal-steel">
                {/* Tail — CSS animated */}
                <path d="M3 10 Q0 4 2 1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-cat-tail origin-bottom-right" />

                {/* Body */}
                <ellipse cx="12" cy="12" rx="8" ry="5" fill="currentColor" />
                {/* Head */}
                <circle cx="21" cy="8" r="5.5" fill="currentColor" />
                {/* Ears */}
                <polygon points="17.5,4 19,0 20.5,3.5" fill="currentColor" />
                <polygon points="22,3 23.5,-0.5 25,3" fill="currentColor" />
                <polygon points="18.2,3.8 19,1.2 19.8,3.5" fill="#f8a4b8" />
                <polygon points="22.5,2.8 23.3,0.5 24.1,2.5" fill="#f8a4b8" />
                {/* Eyes */}
                <circle cx="20" cy="7" r="1.5" fill="white" />
                <circle cx="24" cy="7" r="1.5" fill="white" />
                <circle cx="20.5" cy="7" r="0.8" fill="#1a1a2e" />
                <circle cx="24.5" cy="7" r="0.8" fill="#1a1a2e" />
                <circle cx="20.8" cy="6.4" r="0.3" fill="white" />
                <circle cx="24.8" cy="6.4" r="0.3" fill="white" />
                {/* Nose */}
                <ellipse cx="26" cy="8.5" rx="0.8" ry="0.5" fill="#f8a4b8" />
                {/* Mouth */}
                <path d="M24.5 9.5 Q25.5 10.5 26.5 9.5" stroke="#1a1a2e" strokeWidth="0.4" fill="none" />
                {/* Whiskers */}
                <line x1="26" y1="8" x2="28" y2="7" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
                <line x1="26" y1="9" x2="28" y2="9.5" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
                {/* Legs — CSS animated via transform */}
                <line x1="16" y1="16" x2="15" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="animate-cat-leg-1 origin-top" />
                <line x1="18" y1="16" x2="19" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="animate-cat-leg-2 origin-top" />
                <line x1="7" y1="15" x2="6" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="animate-cat-leg-2 origin-top" />
                <line x1="9" y1="15" x2="10" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="animate-cat-leg-1 origin-top" />
            </svg>
        </div>
    );
}

import ceoPhoto from '../assets/Team/Md Rubayet Islam - Founder CEO.jpg';
import ctoPhoto from '../assets/Team/Rakib Hasan - Chief Technology Officer.jpg';
import cooPhoto from '../assets/Team/Ma-Huan Sheikh Meem - Chief Operating Officer.jpg';
import cpoPhoto from '../assets/Team/Adel Mohammad Zahid - Chief Product Officer.jpg';

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
        ceoPhoto,
        ctoPhoto,
        cooPhoto,
        cpoPhoto,
    ];

    return (
        <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center pt-32 pb-12 md:pt-24 md:pb-0 overflow-hidden">

            {/* Background Decorative Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center">
                <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-[#032F38]/30 blur-[100px] rounded-full opacity-40" />
                <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-[#EBDFEB]/10 dark:bg-[#032F38]/20 blur-[120px] rounded-full opacity-20" />
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
                            <span className="text-sm font-medium tracking-wide text-boraq-black/80 dark:text-boraq-white/80">Think. Try. Thrive.</span>
                        </div>

                        {/* Walking Cat — walks on top of badge, falls off right edge */}
                        <motion.div
                            className="absolute pointer-events-none z-20"
                            style={{ top: '-20px', left: '0px' }}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{
                                x: [-20, badgeWidth - 8, badgeWidth - 8, badgeWidth - 8],
                                opacity: [0, 1, 1, 0],
                                rotate: [0, 0, 0, 90],
                                y: [0, 0, 0, 50],
                            }}
                            transition={{
                                duration: 4.5,
                                delay: 2.5,
                                times: [0, 0.78, 0.785, 1],
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
                        Innovating for a <br className="hidden md:block" />
                        Brighter Tomorrow
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mt-4 font-light leading-relaxed"
                    >
                        We shape the future with advanced solutions: from Web & App development and AI automation to Vision, Speech, Smart Devices, and Web3 platforms.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
                        <Link
                            to="/book-a-call"
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
                            { label: 'Global Clients', value: '28+' },
                            { label: 'Projects Delivered', value: '32+' },
                            { label: 'User Satisfaction', value: '4.9' },
                            { label: 'Service Divisions', value: '6' }
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
                                    <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-boraq-white dark:border-boraq-black object-cover object-top" />
                                ))}
                            </div>
                            <span className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">
                                Meet the <span className="font-bold text-boraq-black dark:text-boraq-white">team at Boraq</span> behind your project
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
                                <span className="font-bold text-boraq-black dark:text-boraq-white">5.0/5</span> Google verified
                            </span>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
