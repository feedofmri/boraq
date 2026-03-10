import { motion } from 'framer-motion';
import { Quote, Calendar, Award } from 'lucide-react';
import { useFoundersNote, useTeamMembers } from '../../hooks/useApi';

export default function FoundersNote() {
    const { data: note, loading: loadingNote } = useFoundersNote();
    const { data: members, loading: loadingMembers } = useTeamMembers();

    const founder = members?.find(m => m.memberType === 'founder' || m.isFounder);

    const wordVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.04, duration: 0.4, ease: 'easeOut' },
        }),
    };

    if (loadingNote || loadingMembers || !note || !founder) {
        return <section className="max-w-7xl mx-auto px-6 py-24"><p className="text-center text-boraq-gray-mid">Loading...</p></section>;
    }

    const words = note.quote_text.split(' ');
    const paragraphs = note.body_paragraphs || [];

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="glass-panel-heavy rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-boraq-teal-steel/10 to-transparent blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 w-full max-w-md mx-auto md:max-w-none">
                        {/* Image with Ken Burns slow zoom — CSS animation */}
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass-panel relative group animate-ken-burns" style={{ willChange: 'transform' }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-boraq-black/80 via-boraq-black/20 to-transparent z-10" />
                            <img
                                src={founder.image}
                                alt={`${founder.name} - ${founder.role}`}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-20 text-boraq-white">
                                <div className="font-bold text-xl">{founder.name}</div>
                                <div className="text-boraq-white/70 text-sm mb-3">{founder.role}</div>
                                {/* Personal credentials */}
                                <div className="flex flex-wrap gap-2">
                                    {note.founded_date && (
                                        <span className="inline-flex items-center gap-1 text-xs bg-boraq-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                                            <Calendar className="w-3 h-3" /> Founded {note.founded_date}
                                        </span>
                                    )}
                                    {note.projects_shipped && (
                                        <span className="inline-flex items-center gap-1 text-xs bg-boraq-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                                            <Award className="w-3 h-3" /> {note.projects_shipped} Projects Shipped
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-[1.5]">
                        <Quote className="w-12 h-12 text-boraq-teal-steel/30 mb-6" />
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Word-by-word reveal */}
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-boraq-black dark:text-boraq-white">
                                "
                                {words.map((word, i) => (
                                    <motion.span
                                        key={i}
                                        custom={i}
                                        variants={wordVariants}
                                        className={word === 'innovate' ? 'text-boraq-teal-steel' : ''}
                                    >
                                        {word}{' '}
                                    </motion.span>
                                ))}
                                "
                            </h2>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="space-y-6 text-lg text-boraq-gray-mid dark:text-boraq-gray-silver font-light"
                            >
                                {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                            </motion.div>

                            {/* Animated signature */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.2 }}
                                className="mt-8 pt-8 border-t border-boraq-gray-silver/20 dark:border-boraq-teal-deep/20"
                            >
                                <div className="mb-2">
                                    <motion.svg width="180" height="40" viewBox="0 0 180 40" className="text-boraq-teal-steel">
                                        <motion.path
                                            d="M5 30 Q15 5 30 20 Q45 35 55 15 Q65 -5 80 20 Q90 35 100 18 L115 18 Q125 18 130 25 Q140 35 155 20 Q165 10 175 15"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, delay: 1.5, ease: 'easeInOut' }}
                                        />
                                    </motion.svg>
                                </div>
                                <div className="font-serif italic text-lg text-boraq-teal-steel select-none" style={{ fontFamily: "'Georgia', serif" }}>
                                    - {note.signature_name}
                                </div>
                                <p className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver mt-1">
                                    I personally review every project inquiry. Reach me directly at{' '}
                                    <a href={`mailto:${note.email}`} className="text-boraq-teal-steel hover:underline font-medium">
                                        {note.email}
                                    </a>
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
