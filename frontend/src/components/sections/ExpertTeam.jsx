import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Heart, Sparkles } from 'lucide-react';

const team = [
    {
        name: 'Sarah Jenkins',
        role: 'Head of Product',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
        quote: 'Design is not just what it looks like, it\'s how it works.',
        bio: 'Former product lead at Spotify. 8+ years shaping digital experiences that delight millions of users worldwide.',
        funFact: 'Coffee enthusiast & marathon runner',
        linkedin: '#',
        twitter: '#',
        email: 'sarah@boraq.dev',
    },
    {
        name: 'Michael Chang',
        role: 'Chief Technical Officer',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
        quote: 'Scalability is a mindset we apply from line one.',
        bio: 'Ex-Google engineer with deep expertise in distributed systems. Architected platforms serving 100M+ users.',
        funFact: 'Weekend guitarist & open-source contributor',
        linkedin: '#',
        twitter: '#',
        email: 'michael@boraq.dev',
    },
    {
        name: 'Elena Rodriguez',
        role: 'Lead AI Engineer',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
        quote: 'Data holds the answers; we just ask the right questions.',
        bio: 'PhD in Machine Learning from MIT. Published 12+ research papers on NLP and computer vision applications.',
        funFact: 'Watercolor painter & AI ethics advocate',
        linkedin: '#',
        twitter: '#',
        email: 'elena@boraq.dev',
    },
    {
        name: 'David Kim',
        role: 'Director of Growth',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
        quote: 'We measure success by the revenue we generate for our partners.',
        bio: 'Scaled 3 startups from zero to $10M+ ARR. Passionate about data-driven growth strategies that actually work.',
        funFact: 'Mountain climber & podcast host',
        linkedin: '#',
        twitter: '#',
        email: 'david@boraq.dev',
    },
];

export default function ExpertTeam() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#82A9B4]/20 text-boraq-teal-steel text-sm font-bold mb-6">
                    <span className="w-2 h-2 rounded-full bg-boraq-teal-steel animate-pulse" />
                    The Humans Behind the Code
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-boraq-black dark:text-boraq-white">Meet Your <span className="text-boraq-teal-steel">Partners</span></h2>
                <p className="text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mx-auto font-light">
                    When you work with us, you aren't just hiring an agency. You're adding these industry experts to your team.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="glass-panel p-4 rounded-3xl h-full flex flex-col items-center text-center hover:border-boraq-teal-steel/30 transition-colors duration-300">
                            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-boraq-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-boraq-white/20 hover:bg-boraq-teal-steel hover:text-boraq-black transition-colors backdrop-blur-sm text-boraq-white" aria-label={`${member.name} on LinkedIn`}>
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-boraq-white/20 hover:bg-boraq-teal-steel hover:text-boraq-black transition-colors backdrop-blur-sm text-boraq-white" aria-label={`${member.name} on Twitter`}>
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                    <a href={`mailto:${member.email}`} className="p-2 rounded-full bg-boraq-white/20 hover:bg-boraq-teal-steel hover:text-boraq-black transition-colors backdrop-blur-sm text-boraq-white" aria-label={`Email ${member.name}`}>
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-1 text-boraq-black dark:text-boraq-white">{member.name}</h3>
                            <p className="text-boraq-teal-steel font-bold text-sm mb-3">{member.role}</p>
                            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-sm leading-relaxed mb-3">
                                {member.bio}
                            </p>
                            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-sm italic mb-4">
                                "{member.quote}"
                            </p>
                            <div className="mt-auto pt-3 border-t border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 w-full">
                                <p className="text-xs text-boraq-gray-mid/70 dark:text-boraq-gray-silver/50 flex items-center gap-1.5">
                                    <Sparkles className="w-3 h-3 text-boraq-teal-steel shrink-0" />
                                    {member.funFact}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Human touch — direct access promise */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 text-center"
            >
                <div className="inline-flex items-center gap-3 glass-panel px-6 py-4 rounded-2xl">
                    <Heart className="w-5 h-5 text-red-400" />
                    <p className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">
                        <span className="font-bold text-boraq-black dark:text-boraq-white">Direct access, always.</span> You'll work directly with our senior team — no account managers or middlemen.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
