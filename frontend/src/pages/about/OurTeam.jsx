import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';


const team = [
  {
    name: 'Alex Sterling',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    bio: 'Former VPE at a Fortune 500, Alex drives the strategic vision of Boraq.',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'Distributed systems expert. Open source contributor to React and Next.js.',
    social: { linkedin: '#', github: '#' }
  },
  {
    name: 'David Okafor',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    bio: 'Award-winning industrial and digital product designer. Obsessed with micro-interactions.',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Elena Rodriguez',
    role: 'Lead AI Engineer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    bio: 'PhD in Machine Learning. Leads our proprietary LLM training initiatives.',
    social: { linkedin: '#', github: '#' }
  }
];

export default function OurTeam() {
  return (
    <div className="w-full pb-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            The minds behind the <span className="text-boraq-cyan">machine.</span>
          </h1>
          <p className="text-lg md:text-2xl text-black/70 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            We are a collective of elite engineers, designers, and strategists dedicated to pushing the boundaries of what software can achieve.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-panel p-6 rounded-3xl flex flex-col items-center group hover:border-boraq-cyan/30 transition-colors duration-300 text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-boraq-cyan/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-boraq-cyan font-medium mb-4">{member.role}</p>
              <p className="text-sm text-black/60 dark:text-white/60 mb-6 flex-grow">
                {member.bio}
              </p>
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-black/5 dark:border-white/5 w-full justify-center">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="text-black/40 dark:text-white/40 hover:text-boraq-cyan transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} className="text-black/40 dark:text-white/40 hover:text-boraq-cyan transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className="text-black/40 dark:text-white/40 hover:text-boraq-cyan transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <CallToAction />
    </div>
  );
}
