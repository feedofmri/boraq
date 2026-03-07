import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Terminal, Zap, ArrowRight, HeartPulse, Coffee, MapPin, Search } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';
import ExpertTeam from '../../components/sections/ExpertTeam';
import InteractiveFAQ from '../../components/sections/InteractiveFAQ';


const positions = [
  { title: 'Senior Golang Engineer', dept: 'Engineering', location: 'Remote (Global)', type: 'Full-time' },
  { title: 'Principle Product Designer', dept: 'Design', location: 'London, UK / Remote', type: 'Full-time' },
  { title: 'AI Research Scientist', dept: 'Labs', location: 'Remote (US/EU)', type: 'Full-time' },
  { title: 'React Native Developer', dept: 'Engineering', location: 'Remote (Global)', type: 'Contract' },
];

export default function Career() {
  const [search, setSearch] = useState('');

  const filteredPositions = positions.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.dept.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-teal-steel/20 text-boraq-teal-steel text-sm font-bold mb-6">
            Join the collective
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">
            Build your life's <span className="text-boraq-teal-steel italic">work.</span>
          </h1>
          <p className="text-lg md:text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-3xl mx-auto font-light leading-relaxed">
            We don't hire code monkeys. We hire polymaths, relentless problem solvers, and artisans. Join our remote-first team and build the future of software.
          </p>
        </motion.div>
      </section>

      {/* Culture / Perks Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl group md:col-span-2 hover:border-boraq-teal-steel/30 transition-colors border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10"
          >
            <div className="flex gap-4 items-center mb-6">
              <Terminal className="w-8 h-8 text-boraq-teal-steel" />
              <h3 className="text-2xl font-bold text-boraq-black dark:text-boraq-white">Deep Work Default</h3>
            </div>
            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver leading-relaxed max-w-xl font-light">
              We despise pointless meetings. Our calendar defaults to empty. We operate asynchronously, preferring well-written technical RFCs over 90-minute Zoom calls to nowhere.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel-heavy p-8 rounded-[2rem] border border-boraq-teal-steel/30 flex items-center justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-boraq-teal-steel/10 blur-[50px] group-hover:bg-boraq-teal-steel/30 transition-colors duration-500" />
            <div className="text-center relative z-10">
              <div className="text-5xl font-black text-boraq-black dark:text-boraq-white mb-2">100%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-boraq-teal-steel">Remote</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-6 rounded-3xl border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10"
          >
            <Coffee className="w-6 h-6 text-boraq-teal-steel mb-4" />
            <h4 className="font-bold mb-2 text-boraq-black dark:text-boraq-white">Home Office Stipend</h4>
            <p className="text-xs text-boraq-gray-mid dark:text-boraq-gray-silver font-light">$2,500 upfront for your chair, desk, and monitors.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-6 rounded-3xl border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10"
          >
            <HeartPulse className="w-6 h-6 text-boraq-teal-steel mb-4" />
            <h4 className="font-bold mb-2 text-boraq-black dark:text-boraq-white">Premium Healthcare</h4>
            <p className="text-xs text-boraq-gray-mid dark:text-boraq-gray-silver font-light">Fully covered medical, dental, and global health options.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-panel p-6 rounded-3xl border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10"
          >
            <Zap className="w-6 h-6 text-boraq-teal-steel mb-4" />
            <h4 className="font-bold mb-2 text-boraq-black dark:text-boraq-white">Unlimited PTO</h4>
            <p className="text-xs text-boraq-gray-mid dark:text-boraq-gray-silver font-light">Take the time you need. We require a minimum of 3 weeks/year.</p>
          </motion.div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <h2 className="text-3xl font-bold text-boraq-black dark:text-boraq-white">Open Positions</h2>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-boraq-gray-mid dark:text-boraq-gray-silver" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search roles..."
              className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-full py-3 pl-11 pr-5 focus:outline-none focus:border-boraq-teal-steel/50 focus:ring-1 focus:ring-boraq-teal-steel/50 transition-all text-sm text-boraq-black dark:text-boraq-white placeholder:text-boraq-gray-mid/50"
            />
          </div>
        </div>
        <div className="space-y-4">
          {filteredPositions.map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between group hover:border-boraq-teal-steel/50 transition-colors cursor-pointer gap-6 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-boraq-teal-steel transition-colors text-boraq-black dark:text-boraq-white">{pos.title}</h3>
                <div className="flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-widest">
                  <span className="px-2 py-1 rounded-sm bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 flex items-center gap-1 text-boraq-gray-mid dark:text-boraq-gray-silver">
                    <Briefcase className="w-3 h-3" /> {pos.dept}
                  </span>
                  <span className="px-2 py-1 rounded-sm bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 flex items-center gap-1 text-boraq-gray-mid dark:text-boraq-gray-silver">
                    <MapPin className="w-3 h-3" /> {pos.location}
                  </span>
                  <span className="px-2 py-1 rounded-sm bg-boraq-teal-steel/10 border border-boraq-teal-steel/20 text-boraq-teal-steel">
                    {pos.type}
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 group-hover:bg-boraq-teal-steel transition-colors border border-boraq-teal-steel/20">
                <ArrowRight className="w-5 h-5 text-boraq-gray-mid dark:text-boraq-gray-silver group-hover:text-boraq-black transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPositions.length === 0 && (
          <div className="text-center py-16">
            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-lg">No positions match "<span className="font-bold text-boraq-black dark:text-boraq-white">{search}</span>"</p>
            <button onClick={() => setSearch('')} className="mt-4 text-sm text-boraq-teal-steel font-bold hover:underline">Clear search</button>
          </div>
        )}

        <div className="mt-12 text-center p-8 glass-panel border-dashed border-2 border-boraq-gray-silver/20 dark:border-boraq-teal-deep/20 rounded-3xl">
          <h4 className="font-bold mb-2 text-boraq-black dark:text-boraq-white">Don't see a fit?</h4>
          <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-[10px] font-bold uppercase tracking-widest mb-4">We're always looking for exceptional talent. Pitch us why you below here.</p>
          <button className="text-[10px] font-bold border-b-2 border-boraq-teal-steel text-boraq-teal-steel pb-1 hover:text-boraq-black dark:hover:text-boraq-white hover:border-boraq-teal-steel transition-colors tracking-widest uppercase">
            Send speculative application
          </button>
        </div>
      </section>

      <ExpertTeam />
      <InteractiveFAQ />

      <CallToAction />
    </div>
  );
}
