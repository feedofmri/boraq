import { motion } from 'framer-motion';
import { Github, Star, GitFork, ArrowUpRight } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';


const repos = [
  { name: 'boraq/react-use-motion', desc: 'A collection of custom React hooks bridging Framer Motion and intersection observers.', stars: '4.2k', forks: '342', lang: 'TypeScript' },
  { name: 'boraq/go-guard', desc: 'High-performance API rate limiting middleware for Go Fiber applications.', stars: '1.8k', forks: '120', lang: 'Go' },
  { name: 'boraq/tailwind-mesh', desc: 'A PostCSS plugin to generate fluid, mathematical mesh gradients.', stars: '8.9k', forks: '890', lang: 'JavaScript' },
  { name: 'boraq/solidity-safe', desc: 'Audited, gas-optimized ERC20 and ERC721 smart contract variants.', stars: '950', forks: '85', lang: 'Solidity' },
];

export default function OpenSource() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="w-16 h-16 rounded-full bg-black dark:bg-white flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Github className="w-8 h-8 text-white dark:text-black" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            We build in <span className="text-boraq-cyan italic">public.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Open source isn't just a marketing channel; it's our foundational philosophy. We contribute heavily back to the ecosystems that power our agency.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {repos.map((repo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl group hover:border-boraq-cyan/30 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.2)]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold font-mono text-boraq-cyan flex items-center gap-2">
                  <Github className="w-6 h-6 text-black/40 dark:text-white/40" />
                  {repo.name}
                </h3>
                <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-black dark:text-white" />
                </a>
              </div>
              <p className="text-black/70 dark:text-white/70 leading-relaxed mb-8 h-12">
                {repo.desc}
              </p>
              <div className="flex items-center gap-6 text-sm font-medium">
                <div className="flex items-center gap-1.5 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  {repo.lang}
                </div>
                <div className="flex items-center gap-1.5 text-black/60 dark:text-white/60">
                  <Star className="w-4 h-4 text-black/40 dark:text-white/40" />
                  {repo.stars}
                </div>
                <div className="flex items-center gap-1.5 text-black/60 dark:text-white/60">
                  <GitFork className="w-4 h-4 text-black/40 dark:text-white/40" />
                  {repo.forks}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 text-center">
        <div className="glass-panel-heavy p-12 rounded-[3rem] border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-boraq-cyan/10 to-transparent" />
          <h2 className="text-3xl font-bold mb-4 relative z-10">Want to contribute?</h2>
          <p className="text-black/60 dark:text-white/60 max-w-xl mx-auto mb-8 relative z-10">
            We welcome pull requests on all our public repositories. Check out our contributing guidelines for first-timers.
          </p>
          <button className="relative z-10 px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold hover:scale-[1.02] transition-transform">
            Read the OS Manifesto
          </button>
        </div>
      </section>
      <CallToAction />
    </div>
  );
}
