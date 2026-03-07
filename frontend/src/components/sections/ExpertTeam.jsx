import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
    {
        name: 'Sarah Jenkins',
        role: 'Head of Product',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
        quote: 'Design is not just what it looks like, it’s how it works.',
    },
    {
        name: 'Michael Chang',
        role: 'Chief Technical Officer',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
        quote: 'Scalability is a mindset we apply from line one.',
    },
    {
        name: 'Elena Rodriguez',
        role: 'Lead AI Engineer',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
        quote: 'Data holds the answers; we just ask the right questions.',
    },
    {
        name: 'David Kim',
        role: 'Director of Growth',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
        quote: 'We measure success by the revenue we generate for our partners.',
    },
];

export default function ExpertTeam() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-cyan/20 text-boraq-cyan text-sm font-medium mb-6">
                    <span className="w-2 h-2 rounded-full bg-boraq-cyan animate-pulse" />
                    The Humans Behind the Code
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Meet Your <span className="text-boraq-cyan">Partners</span></h2>
                <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto font-light">
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
                        <div className="glass-panel p-4 rounded-3xl h-full flex flex-col items-center text-center hover:border-boraq-cyan/30 transition-colors duration-300">
                            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <button className="p-2 rounded-full bg-white/20 hover:bg-boraq-cyan hover:text-black transition-colors backdrop-blur-sm text-white">
                                        <Linkedin className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 rounded-full bg-white/20 hover:bg-boraq-cyan hover:text-black transition-colors backdrop-blur-sm text-white">
                                        <Twitter className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-boraq-cyan font-medium text-sm mb-4">{member.role}</p>
                            <p className="text-black/60 dark:text-white/60 text-sm italic mt-auto">
                                "{member.quote}"
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
