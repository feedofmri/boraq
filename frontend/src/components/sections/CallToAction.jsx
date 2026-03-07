import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
    return (
        <section className="w-full relative py-32 overflow-hidden bg-transparent">
            {/* Ambient Section Glows - Complements Global BG */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-boraq-teal-deep/20 via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute -left-[10%] top-0 w-[40%] h-[40%] rounded-full bg-boraq-teal-steel/10 blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-heavy text-boraq-black dark:text-boraq-white text-sm font-bold mb-8">
                        <Sparkles className="w-4 h-4 text-boraq-teal-steel" />
                        Let's build something extraordinary
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">
                        Ready to transform your <span className="text-boraq-teal-steel">vision</span> into reality?
                    </h2>

                    <p className="text-xl md:text-2xl text-boraq-gray-mid dark:text-boraq-gray-silver font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Stop waiting for the perfect moment. Schedule a complimentary technical consultation with our engineering architects today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/book-a-call" className="h-14 px-8 rounded-full bg-boraq-black text-boraq-white dark:bg-boraq-white dark:text-boraq-black font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group shadow-xl shadow-boraq-teal-deep/10">
                            Start Your Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/portfolio" className="h-14 px-8 rounded-full glass-panel-heavy border-boraq-gray-silver/30 dark:border-boraq-teal-deep/30 text-boraq-black dark:text-boraq-white font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
                            View Portfolio
                        </Link>
                    </div>

                    <p className="mt-8 text-sm text-boraq-gray-mid/60 dark:text-boraq-gray-silver/40 font-medium">
                        No commitment required. 100% strictly confidential.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
