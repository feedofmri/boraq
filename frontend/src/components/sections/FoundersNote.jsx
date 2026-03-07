import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function FoundersNote() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="glass-panel-heavy rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-boraq-cyan/10 to-transparent blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 w-full max-w-md mx-auto md:max-w-none">
                        {/* Image Placeholder representing the founder / leader */}
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass-panel relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                                alt="Founder"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                                <div className="font-bold text-xl">Arifur Rahman</div>
                                <div className="text-white/70 text-sm">Founder & CEO</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-[1.5]">
                        <Quote className="w-12 h-12 text-boraq-cyan/40 mb-6" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                                "We don't just build software. We <span className="text-boraq-cyan">partner</span> with visionaries to engineer the future."
                            </h2>
                            <div className="space-y-6 text-lg text-black/70 dark:text-white/70 font-light">
                                <p>
                                    When we established Boraq, our goal was simple: bridge the gap between ambitious ideas and technical execution. We saw too many companies treating software development as a transactional process rather than a collaborative partnership.
                                </p>
                                <p>
                                    Behind every line of code we write is a team of dedicated humans who care about your business goals. We succeed when you succeed. Our technical excellence is just the foundation; our true value lies in how we work with you to solve complex challenges together.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
