import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';


// Team Photos
import ceoPhoto from '../../assets/Team/Md Rubayet Islam - Founder CEO.jpg';
import ctoPhoto from '../../assets/Team/Rakib Hasan - Chief Technology Officer.jpg';
import cooPhoto from '../../assets/Team/Ma-Huan Sheikh Meem - Chief Operating Officer.jpg';
import cpoPhoto from '../../assets/Team/Adel Mohammad Zahid - Chief Product Officer.jpg';
import plPhoto from '../../assets/Team/Tahmid Khan - Project Lead.jpg';

const ceo = {
  name: 'Md. Rubayet Islam',
  role: 'Founder & CEO',
  image: ceoPhoto,
  bio: 'Expert in Web & App development and Computer Vision. Founded Boraq in November 2023 to shape the future through advanced solutions and research.',
  social: { linkedin: 'https://linkedin.com/in/feedofmri', github: 'https://github.com/feedofmri' }
};

const team = [
  {
    name: 'Rakib Hasan',
    role: 'Chief Technology Officer',
    image: ctoPhoto,
    bio: 'Blockchain and Web3 specialist. Architects decentralized platforms, smart contracts, and token systems.',
    social: { linkedin: 'https://linkedin.com/in/feedofmri', github: 'https://github.com/boraqio' }
  },
  {
    name: 'Ma-Huan Sheikh Meem',
    role: 'Chief Operating Officer',
    image: cooPhoto,
    bio: 'UI/UX & Graphics expert. Drives visual excellence across brand identities and digital interfaces while overseeing operations.',
    social: { linkedin: 'https://github.com/meemorphic', github: 'https://www.linkedin.com/in/ma-huan-sheikh-meem-600085361' }
  },
  {
    name: 'Adel Mohammad Zahid',
    role: 'Chief Product Officer',
    image: cpoPhoto,
    bio: 'ML & Automation specialist. Leads predictive modeling, intelligent workflows, and AI-powered product strategy.',
    social: { linkedin: 'https://linkedin.com/in/feedofmri', github: 'https://github.com/boraqio' }
  },
  {
    name: 'Tahmid Khan',
    role: 'Project Lead',
    image: plPhoto,
    bio: 'Smart Device expert. Leads IoT integrations, embedded systems, firmware development, and hardware-software projects.',
    social: { linkedin: 'https://linkedin.com/in/tahmidkhanshuvo', github: 'https://github.com/tahmidkhanshuvo' }
  }
];

function TeamMemberCard({ member }) {
  return (
    <div className="glass-panel p-6 rounded-3xl flex flex-col items-center group hover:border-boraq-teal-steel/30 transition-colors duration-300 text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 relative">
        <div className="absolute inset-0 bg-boraq-teal-steel/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold mb-1 text-boraq-black dark:text-boraq-white">{member.name}</h3>
      <p className="text-sm text-boraq-teal-steel font-bold mb-4">{member.role}</p>
      <p className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver font-light mb-6 flex-grow">
        {member.bio}
      </p>
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-black/5 dark:border-white/5 w-full justify-center">
        {member.social.linkedin && (
          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-boraq-gray-mid dark:text-boraq-gray-silver hover:text-boraq-teal-steel transition-colors" aria-label={`${member.name} on LinkedIn`}>
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {member.social.twitter && (
          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-boraq-gray-mid dark:text-boraq-gray-silver hover:text-boraq-teal-steel transition-colors" aria-label={`${member.name} on Twitter`}>
            <Twitter className="w-5 h-5" />
          </a>
        )}
        {member.social.github && (
          <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-boraq-gray-mid dark:text-boraq-gray-silver hover:text-boraq-teal-steel transition-colors" aria-label={`${member.name} on GitHub`}>
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}

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
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">
            The minds behind <span className="text-boraq-teal-steel">Boraq.</span>
          </h1>
          <p className="text-lg md:text-2xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-3xl mx-auto font-light leading-relaxed">
            We are a team of engineers, designers, and researchers dedicated to innovating for a brighter tomorrow.
          </p>
        </motion.div>
      </section>

      {/* CEO — Featured Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel-heavy rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-boraq-teal-steel/5 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-56 shrink-0">
              <div className="aspect-square rounded-[2rem] overflow-hidden relative group mx-auto">
                <div className="absolute inset-0 bg-boraq-teal-steel/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-boraq-teal-steel/10 border border-boraq-teal-steel/20 text-boraq-teal-steel text-xs font-bold mb-4">
                Founder & Visionary
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-boraq-black dark:text-boraq-white">{ceo.name}</h3>
              <p className="text-boraq-teal-steel font-bold text-lg mb-4">{ceo.role}</p>
              <p className="text-boraq-gray-mid dark:text-boraq-gray-silver leading-relaxed max-w-xl font-light mb-6">
                {ceo.bio}
              </p>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                {ceo.social.linkedin && (
                  <a href={ceo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-boraq-gray-mid dark:text-boraq-gray-silver hover:text-boraq-teal-steel transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {ceo.social.github && (
                  <a href={ceo.social.github} target="_blank" rel="noopener noreferrer" className="text-boraq-gray-mid dark:text-boraq-gray-silver hover:text-boraq-teal-steel transition-colors" aria-label={`${ceo.name} on GitHub`}>
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Other Team Members */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * (index + 1) }}
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
