import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import caseStudies from '../../data/caseStudies';

export default function CaseStudyHighlight() {
    // Pick the latest case study that has a cover image
    const featured = [...caseStudies].reverse().find(cs => cs.cover) || caseStudies[caseStudies.length - 1];

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-boraq-black dark:text-boraq-white">Real Human <span className="text-boraq-teal-steel">Impact</span></h2>
                <p className="text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mx-auto font-light">
                    See how our collaborative approach translates into measurable business success.
                </p>
            </div>

            <div className="glass-panel-heavy rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-boraq-teal-steel/10 to-transparent pointer-events-none" />

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
                            src={featured.cover}
                            alt={featured.title}
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-boraq-teal-deep/10 text-boraq-teal-steel border border-boraq-teal-steel/20 w-max text-sm font-bold mb-6">
                            {featured.category}
                        </div>

                        <h3 className="text-3xl font-bold mb-4">{featured.title} — {featured.subtitle}</h3>

                        <p className="text-black/70 dark:text-white/70 mb-8 font-light text-lg">
                            {featured.overview}
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="glass-panel p-4 rounded-2xl">
                                <BarChart3 className="w-8 h-8 text-boraq-teal-steel mb-2" />
                                <div className="text-2xl font-bold mb-1 text-boraq-black dark:text-boraq-white">{featured.techStack.length}+</div>
                                <div className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">Technologies used</div>
                            </div>
                            <div className="glass-panel p-4 rounded-2xl">
                                <Zap className="w-8 h-8 text-boraq-teal-steel mb-2" />
                                <div className="text-2xl font-bold mb-1 text-boraq-black dark:text-boraq-white">{featured.features.length}</div>
                                <div className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">Key features delivered</div>
                            </div>
                        </div>

                        <Link to={`/case-studies/${featured.id}`} className="flex items-center gap-2 text-boraq-black dark:text-boraq-white font-bold hover:gap-4 transition-all w-max py-2 group">
                            Read Full Case Study <ArrowRight className="w-5 h-5 group-hover:text-boraq-teal-steel transition-colors" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
