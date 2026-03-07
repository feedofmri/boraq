import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
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

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">

            {/* Background Decorative Blobs for extra depth (optional, complements the CSS mesh) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-[20%] right-[10%] w-72 h-72 bg-boraq-cyan/20 blur-[100px] rounded-full"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-purple-500/10 dark:bg-boraq-cyan/10 blur-[120px] rounded-full"
                />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center gap-6"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="glass-panel px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
                        <Sparkles className="w-4 h-4 text-boraq-cyan" />
                        <span className="text-sm font-medium tracking-wide">Next-Gen Software Agency</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05]"
                    >
                        Engineering the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-500 dark:from-white dark:to-zinc-400">
                            future of tech.
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl mt-4 font-light leading-relaxed"
                    >
                        We build premium, scalable, and intelligent software systems for forward-thinking enterprises. From Web3 platforms to AI integration.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
                        <Link
                            to="/contact"
                            className="group relative w-full sm:w-auto px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-boraq-cyan/20"
                        >
                            <div className="absolute inset-0 bg-boraq-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                            <span className="relative flex items-center justify-center gap-2 group-hover:text-black transition-colors">
                                Start a Project
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            to="/portfolio"
                            className="w-full sm:w-auto px-8 py-4 glass-panel rounded-full font-medium flex items-center justify-center gap-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            <Code className="w-4 h-4" />
                            View Our Work
                        </Link>
                    </motion.div>

                    {/* Metrics/Trust Indicators */}
                    <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-black/10 dark:border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Enterprise Clients', value: '40+' },
                            { label: 'Systems Shipped', value: '150+' },
                            { label: 'Awards Won', value: '12' },
                            { label: 'Global Reach', value: '8 Countries' }
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
                                <span className="text-sm text-black/60 dark:text-white/60 mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
