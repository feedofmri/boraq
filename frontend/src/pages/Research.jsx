import { motion } from 'framer-motion';
import { Microscope, Database, Network, BrainCircuit, ArrowRight } from 'lucide-react';
import CallToAction from '../components/sections/CallToAction';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import StatsCounter from '../components/sections/StatsCounter';


const researchAreas = [
  {
    title: 'Autonomous Debugging',
    desc: 'Training models to identify, isolate, and patch production vulnerabilities without human intervention.',
    icon: BrainCircuit,
    status: 'Active Trial',
  },
  {
    title: 'Self-Healing Architecture',
    desc: 'Infrastructure that dynamically re-routes traffic and spins up isolated replicas during targeted DDoS attacks.',
    icon: Network,
    status: 'In Production',
  },
  {
    title: 'Quantum-Resistant Crypto',
    desc: 'Investigating post-quantum cryptographic primitives for long-term secure data storage.',
    icon: Database,
    status: 'Theoretical',
  },
];

export default function Research() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-teal-steel/20 text-boraq-teal-steel text-sm font-bold mb-6">
            <Microscope className="w-4 h-4" />
            Innovation Lab
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">
            Pushing the <span className="text-boraq-teal-steel italic">boundaries.</span>
          </h1>
          <p className="text-lg md:text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-3xl mx-auto font-light leading-relaxed">
            The Boraq Research Hub explores Computer Vision, Natural Language Processing, and System Automation — pushing the boundaries of what technology can achieve.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Research Paper */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel-heavy p-8 md:p-12 rounded-[2.5rem] h-full flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-boraq-teal-steel/10 to-transparent mix-blend-overlay z-0" />
              <div className="relative z-10">
                <div className="text-[10px] font-bold text-boraq-teal-steel uppercase tracking-widest mb-4">Featured Paper • Q3 2026</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-boraq-black dark:text-boraq-white">The End of Manual QA: Synthetic User Synthesis via LLMs</h2>
                <p className="text-lg text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mb-8 leading-relaxed font-light">
                  Our latest findings on deploying localized Language Models to generate hyper-realistic, adversarial user traffic against frontend architectures, effectively replacing 94% of manual regression testing bandwidth.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between border-t border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 pt-6 mt-8">
                <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" className="w-12 h-12 rounded-full border-2 border-boraq-white dark:border-boraq-black" alt="Researcher 1" />
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" className="w-12 h-12 rounded-full border-2 border-boraq-white dark:border-boraq-black" alt="Researcher 2" />
                </div>
                <button className="glass-panel px-6 py-3 rounded-full flex items-center gap-2 hover:bg-boraq-teal-steel hover:text-boraq-black transition-colors font-bold text-sm tracking-widest uppercase">
                  Read Abstract <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Active Research Areas */}
          <div className="flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-3xl mb-2">
              <h3 className="font-bold text-xl">Current Initiatives</h3>
            </div>
            {researchAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-6 rounded-3xl hover:border-boraq-teal-steel/30 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-boraq-teal-steel/10 flex items-center justify-center">
                    <area.icon className="w-5 h-5 text-boraq-teal-steel" />
                  </div>
                  <div className={`text-[10px] px-2 py-1 rounded-full border font-bold tracking-widest uppercase ${area.status === 'In Production' ? 'border-green-500/50 text-green-500' : area.status === 'Active Trial' ? 'border-boraq-teal-steel/50 text-boraq-teal-steel' : 'border-boraq-gray-silver/50 text-boraq-gray-silver'}`}>
                    {area.status}
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2 text-boraq-black dark:text-boraq-white">{area.title}</h4>
                <p className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />
      <ProcessTimeline />

      <CallToAction />
    </div>
  );
}
