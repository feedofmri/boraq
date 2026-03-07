import { motion } from 'framer-motion';
import { Quote, Calendar, Award } from 'lucide-react';

export default function FoundersNote() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="glass-panel-heavy rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-boraq-teal-steel/10 to-transparent blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 w-full max-w-md mx-auto md:max-w-none">
                        {/* Image Placeholder representing the founder / leader */}
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass-panel relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-boraq-black/80 via-boraq-black/20 to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                                alt="Arifur Rahman - Founder & CEO"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-20 text-boraq-white">
                                <div className="font-bold text-xl">Arifur Rahman</div>
                                <div className="text-boraq-white/70 text-sm mb-3">Founder & CEO</div>
                                {/* Personal credentials */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 text-xs bg-boraq-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                                        <Calendar className="w-3 h-3" /> Founded 2019
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-xs bg-boraq-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                                        <Award className="w-3 h-3" /> 10+ yrs in tech
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-[1.5]">
                        <Quote className="w-12 h-12 text-boraq-teal-steel/30 mb-6" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-boraq-black dark:text-boraq-white">
                                "We don't just build software. We <span className="text-boraq-teal-steel">partner</span> with visionaries to engineer the future."
                            </h2>
                            <div className="space-y-6 text-lg text-boraq-gray-mid dark:text-boraq-gray-silver font-light">
                                <p>
                                    When we established Boraq, our goal was simple: bridge the gap between ambitious ideas and technical execution. We saw too many companies treating software development as a transactional process rather than a collaborative partnership.
                                </p>
                                <p>
                                    Behind every line of code we write is a team of dedicated humans who care about your business goals. We succeed when you succeed. Our technical excellence is just the foundation; our true value lies in how we work with you to solve complex challenges together.
                                </p>
                            </div>

                            {/* Personal signature */}
                            <div className="mt-8 pt-8 border-t border-boraq-gray-silver/20 dark:border-boraq-teal-deep/20">
                                <div className="font-serif italic text-3xl text-boraq-teal-steel mb-2 select-none" style={{ fontFamily: "'Georgia', serif" }}>
                                    — Arifur Rahman
                                </div>
                                <p className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">
                                    I personally review every project inquiry. Reach me directly at{' '}
                                    <a href="mailto:arifur@boraq.dev" className="text-boraq-teal-steel hover:underline font-medium">
                                        arifur@boraq.dev
                                    </a>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
