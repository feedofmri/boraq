import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, Zap } from 'lucide-react';

export default function CaseStudyHighlight() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Real Human <span className="text-boraq-cyan">Impact</span></h2>
                <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto font-light">
                    See how our collaborative approach translates into measurable business success.
                </p>
            </div>

            <div className="glass-panel-heavy rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-boraq-cyan/5 to-transparent pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full aspect-video rounded-3xl overflow-hidden glass-panel relative group"
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                            alt="Dashboard Case Study"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-boraq-cyan/10 text-boraq-cyan border border-boraq-cyan/20 w-max text-sm font-medium mb-6">
                            FinTech Collaboration
                        </div>

                        <h3 className="text-3xl font-bold mb-4">How we helped NovaBank scale to 1M users in 6 months</h3>

                        <p className="text-black/70 dark:text-white/70 mb-8 font-light text-lg">
                            NovaBank had the vision to democratize personal finance, but their legacy monolithic architecture was slowing them down. We partnered with their core team to architect a robust, microservices-driven platform with a stunning, intuitive UI.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="glass-panel p-4 rounded-2xl">
                                <BarChart3 className="w-8 h-8 text-boraq-cyan mb-2" />
                                <div className="text-2xl font-bold mb-1">300%</div>
                                <div className="text-sm text-black/60 dark:text-white/60">Increase in conversion rate</div>
                            </div>
                            <div className="glass-panel p-4 rounded-2xl">
                                <Zap className="w-8 h-8 text-boraq-cyan mb-2" />
                                <div className="text-2xl font-bold mb-1">0.2s</div>
                                <div className="text-sm text-black/60 dark:text-white/60">Average API response time</div>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 text-boraq-cyan font-bold hover:gap-4 transition-all w-max py-2">
                            Read Full Case Study <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
