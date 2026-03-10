import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Heart, Sparkles } from 'lucide-react';
import { useTeamMembers } from '../../hooks/useApi';

function MemberCard({ member, index }) {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -8, rotateY: -5, rotateX: 3 }}
            className="group"
            style={{ transformStyle: 'preserve-3d', perspective: 800 }}
        >
            <div className="glass-panel p-4 rounded-3xl h-full flex flex-col items-center text-center hover:border-boraq-teal-steel/30 transition-colors duration-300">
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 relative">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
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
    );
}

export default function ExpertTeam() {
    const { data: members, loading } = useTeamMembers();

    if (loading || !members?.length) {
        return (
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-boraq-black dark:text-boraq-white">Meet the <span className="text-boraq-teal-steel">Humans</span></h2>
                    <p className="text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mx-auto font-light">Loading team...</p>
                </div>
            </section>
        );
    }

    const isFounderMember = (m) => m.memberType === 'founder' || m.isFounder;
    const isExecutiveMember = (m) => m.memberType === 'executive' || (!isFounderMember(m) && m.memberType !== 'member' && /^(Chief|CTO|COO|CPO|CFO|VP|Director)/i.test(m.role));
    const founder = members.find(isFounderMember);
    const executives = members.filter(m => !isFounderMember(m) && isExecutiveMember(m));

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 text-sm font-bold text-boraq-teal-steel mb-6">
                    <Heart className="w-4 h-4 fill-boraq-teal-steel" />
                    SMALL TEAM, BIG HEART
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-boraq-black dark:text-boraq-white">Meet the <span className="text-boraq-teal-steel">Humans</span></h2>
                <p className="text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mx-auto font-light">
                    Not faceless developers. Real people who care about your success as much as you do.
                </p>
            </div>

            {founder && (
                <div className="mb-12 max-w-md mx-auto">
                    <MemberCard member={founder} index={0} />
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {executives.map((member, index) => (
                    <MemberCard key={member.id || index} member={member} index={index + 1} />
                ))}
            </div>
        </section>
    );
}
