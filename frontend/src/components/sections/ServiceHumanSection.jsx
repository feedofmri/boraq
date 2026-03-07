import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BadgeCheck, ArrowRight, MessageSquare, Star, Check, Sparkles } from 'lucide-react';

/**
 * Reusable human-centric trust section for service pages.
 * Props:
 *  - teamLead: { name, role, avatar, bio, funFact }
 *  - testimonial: { quote, author, role, avatar, result, platform }
 *  - stats: [{ label, value }]  (2-3 items)
 *  - processNote: string — a human-touch process callout
 */
export default function ServiceHumanSection({ teamLead, testimonial, stats, processNote }) {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#82A9B4]/20 text-boraq-teal-steel text-sm font-bold mb-6">
                    <span className="w-2 h-2 rounded-full bg-boraq-teal-steel animate-pulse" />
                    The People Behind This Service
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-boraq-black dark:text-boraq-white">
                    Real humans. <span className="text-boraq-teal-steel">Real results.</span>
                </h2>
                <p className="text-lg text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mx-auto font-light">
                    You won't be handed off to juniors. Here's who'll actually lead your project.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Team Lead Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel-heavy rounded-3xl p-8 flex flex-col sm:flex-row gap-6 items-start"
                >
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                            src={teamLead.avatar}
                            alt={teamLead.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-boraq-black dark:text-boraq-white mb-1">
                            {teamLead.name}
                        </h3>
                        <p className="text-boraq-teal-steel font-bold text-sm mb-3">{teamLead.role}</p>
                        <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-sm leading-relaxed mb-3">
                            {teamLead.bio}
                        </p>
                        <p className="text-xs text-boraq-gray-mid/60 dark:text-boraq-gray-silver/40 italic flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-boraq-teal-steel shrink-0" />
                            {teamLead.funFact}
                        </p>
                    </div>
                </motion.div>

                {/* Client Quote Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="glass-panel-heavy rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
                >
                    <div className="absolute top-4 right-6 text-boraq-teal-steel/10 text-8xl font-serif leading-none pointer-events-none select-none">
                        "
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-0.5 mb-4 text-boraq-teal-steel">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-lg font-medium text-boraq-black dark:text-boraq-white leading-relaxed mb-6">
                            "{testimonial.quote}"
                        </p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.author}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <div className="font-bold text-sm text-boraq-black dark:text-boraq-white flex items-center gap-1.5">
                                    {testimonial.author}
                                    <BadgeCheck className="w-4 h-4 text-boraq-teal-steel" />
                                </div>
                                <div className="text-xs text-boraq-teal-steel font-medium">{testimonial.role}</div>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold">
                            <Check className="w-3 h-3" /> {testimonial.result}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Stats + Process Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="glass-panel rounded-2xl p-6 text-center"
                    >
                        <div className="text-3xl font-black text-boraq-black dark:text-boraq-white mb-1">
                            {stat.value}
                        </div>
                        <p className="text-xs text-boraq-gray-mid dark:text-boraq-gray-silver font-bold uppercase tracking-wider">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Process note — human touch */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
                <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-boraq-teal-steel flex-shrink-0" />
                    <p className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">
                        <span className="font-bold text-boraq-black dark:text-boraq-white">{processNote}</span>
                    </p>
                </div>
                <Link
                    to="/book-a-call"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-boraq-black text-boraq-white dark:bg-boraq-white dark:text-boraq-black text-sm font-bold hover:scale-105 transition-transform flex-shrink-0 group"
                >
                    Talk to {teamLead.name.split(' ')[0]}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
            </motion.div>
        </section>
    );
}
