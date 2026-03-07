import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles, Star } from 'lucide-react';
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
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="glass-panel px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
                        <Sparkles className="w-4 h-4 text-boraq-teal-steel" />
                        <span className="text-sm font-medium tracking-wide text-boraq-black/80 dark:text-boraq-white/80">Next-Gen Software Agency</span>
                    </motion.div>

                    {/* Main Headline with walking cat */}
                    <motion.div variants={itemVariants} className="relative inline-block w-full">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] text-boraq-black dark:text-boraq-white">
                            Engineering the <br className="hidden md:block" />
                            future of tech.
                        </h1>

                        {/* Walking Cat */}
                        <motion.div
                            className="absolute pointer-events-none"
                            style={{ bottom: '0.15em', left: 0 }}
                            initial={{ x: '-40px', rotate: 0, opacity: 0 }}
                            animate={{
                                x: ['-40px', '105%', '115%', '115%'],
                                opacity: [0, 1, 1, 0],
                                rotate: [0, 0, 0, 180],
                                y: [0, 0, 0, 80],
                            }}
                            transition={{
                                duration: 6,
                                delay: 2,
                                times: [0, 0.7, 0.82, 1],
                                ease: ['easeInOut', 'easeInOut', 'easeIn', 'easeIn'],
                                repeat: Infinity,
                                repeatDelay: 8,
                            }}
                        >
                            {/* Cat body */}
                            <motion.div
                                className="relative"
                                animate={{ y: [0, -3, 0] }}
                                transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <Cat className="w-6 h-6 md:w-8 md:h-8 text-boraq-teal-steel" />
                                {/* Tail wag */}
                                <motion.div
                                    className="absolute -left-2 top-0.5 w-3 h-[2px] md:w-4 md:h-[3px] bg-boraq-teal-steel rounded-full origin-right"
                                    animate={{ rotate: [-20, 20, -20] }}
                                    transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

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
