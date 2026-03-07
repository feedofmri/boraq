import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CallToAction() {
    return (
        <section className="w-full relative py-32 overflow-hidden bg-black text-white">
            {/* Dynamic Background Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-boraq-cyan/30 via-black to-black opacity-80" />
            <div className="absolute -left-[20%] -top-[20%] w-[60%] h-[60%] rounded-full bg-boraq-cyan/20 blur-[120px] animate-pulse pointer-events-none" />
            <div className="absolute -right-[20%] -bottom-[20%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse delay-1000 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-8 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-boraq-cyan" />
                        Let's build something extraordinary
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Ready to transform your <span className="text-boraq-cyan">vision</span> into reality?
                    </h2>

                    <p className="text-xl md:text-2xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Stop waiting for the perfect moment. Schedule a complimentary technical consultation with our engineering architects today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="h-14 px-8 rounded-full bg-boraq-cyan text-black font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                            Start Your Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="h-14 px-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg transition-all duration-300 backdrop-blur-sm">
                            View Case Studies
                        </button>
                    </div>

                    <p className="mt-8 text-sm text-white/40 font-light">
                        No commitment required. 100% strictly confidential.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
