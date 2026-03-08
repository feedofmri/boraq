import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Heart, Sparkles } from 'lucide-react';

// Team Photos
import ceoPhoto from '../../assets/Team/Md Rubayet Islam - Founder CEO.jpg';
import ctoPhoto from '../../assets/Team/Rakib Hasan - Chief Technology Officer.jpg';
import cooPhoto from '../../assets/Team/Ma-Huan Sheikh Meem - Chief Operating Officer.jpg';
import cpoPhoto from '../../assets/Team/Adel Mohammad Zahid - Chief Product Officer.jpg';

const ceo = {
    name: 'Md. Rubayet Islam',
    role: 'Founder & CEO',
    image: ceoPhoto,
    quote: 'We innovate not just to provide services, but to push the boundaries of technology.',
    bio: 'Expert in Web & App development and Computer Vision. Founded Boraq to shape the future through advanced solutions and research.',
    funFact: 'Computer Vision researcher & full-stack developer',
    linkedin: 'https://linkedin.com/company/boraqio',
    twitter: '#',
    email: 'hello@boraq.io',
};

const team = [
    {
        name: 'Rakib Hasan',
        role: 'Chief Technology Officer',
        image: ctoPhoto,
        quote: 'Decentralization is the foundation of the next digital era.',
        bio: 'Blockchain and Web3 specialist. Architects decentralized platforms, smart contracts, and token systems powering Boraq\'s Web3 division.',
        funFact: 'Blockchain pioneer & open-source contributor',
        linkedin: 'https://linkedin.com/company/boraqio',
        twitter: '#',
        email: 'hello@boraq.io',
    },
    {
        name: 'Ma-Huan Sheikh Meem',
        role: 'Chief Operating Officer',
        image: cooPhoto,
        quote: 'Great design tells a story that words alone cannot.',
        bio: 'UI/UX & Graphics expert. Oversees operations while driving visual excellence across brand identities and digital interfaces.',
        funFact: 'UI/UX enthusiast & creative operations lead',
        linkedin: 'https://linkedin.com/company/boraqio',
        twitter: '#',
        email: 'hello@boraq.io',
    },
    {
        name: 'Adel Mohammad Zahid',
        role: 'Chief Product Officer',
        image: cpoPhoto,
        quote: 'Intelligent automation is how we turn data into actionable impact.',
        bio: 'ML & Automation specialist. Leads predictive modeling, intelligent workflows, and AI-powered product strategy across Boraq\'s projects.',
        funFact: 'Machine Learning engineer & product strategist',
        linkedin: 'https://linkedin.com/company/boraqio',
        twitter: '#',
        email: 'hello@boraq.io',
    },

];

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
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#82A9B4]/20 text-boraq-teal-steel text-sm font-bold mb-6">
                    <span className="w-2 h-2 rounded-full bg-boraq-teal-steel animate-pulse" />
                    The Humans Behind the Code
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-boraq-black dark:text-boraq-white">Meet the <span className="text-boraq-teal-steel">Team</span></h2>
                <p className="text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mx-auto font-light">
                    When you work with Boraq, you get dedicated managers and direct access to our leadership team: no middlemen.
                </p>
            </div>

            {/* CEO — Featured Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <div className="glass-panel-heavy rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-boraq-teal-steel/5 via-transparent to-transparent pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                        {/* CEO Image */}
                        <div className="w-full md:w-64 shrink-0">
                            <div className="aspect-square rounded-[2rem] overflow-hidden relative group">
                                <img
                                    src={ceo.image}
                                    alt={ceo.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-boraq-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={ceo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-boraq-white/20 hover:bg-boraq-teal-steel hover:text-boraq-black transition-colors backdrop-blur-sm text-boraq-white">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href={`mailto:${ceo.email}`} className="p-2 rounded-full bg-boraq-white/20 hover:bg-boraq-teal-steel hover:text-boraq-black transition-colors backdrop-blur-sm text-boraq-white">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CEO Details */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-boraq-teal-steel/10 border border-boraq-teal-steel/20 text-boraq-teal-steel text-xs font-bold mb-4">
                                Founder & Visionary
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-boraq-black dark:text-boraq-white">{ceo.name}</h3>
                            <p className="text-boraq-teal-steel font-bold text-lg mb-4">{ceo.role}</p>
                            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver leading-relaxed mb-4 max-w-xl font-light">
                                {ceo.bio}
                            </p>
                            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver italic mb-6 text-lg">
                                "{ceo.quote}"
                            </p>
                            <div className="inline-flex items-center gap-2 text-xs text-boraq-gray-mid/70 dark:text-boraq-gray-silver/50">
                                <Sparkles className="w-3.5 h-3.5 text-boraq-teal-steel" />
                                {ceo.funFact}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Other Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, index) => (
                    <MemberCard key={index} member={member} index={index} />
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
                        <span className="font-bold text-boraq-black dark:text-boraq-white">Direct access, always.</span> You will work directly with our senior team: no account managers or middlemen.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
