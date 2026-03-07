import { motion } from 'framer-motion';
import { Briefcase, Code, Terminal, Zap, ArrowRight, HeartPulse, Coffee, MapPin } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';


const positions = [
  { title: 'Senior Golang Engineer', dept: 'Engineering', location: 'Remote (Global)', type: 'Full-time' },
  { title: 'Principle Product Designer', dept: 'Design', location: 'London, UK / Remote', type: 'Full-time' },
  { title: 'AI Research Scientist', dept: 'Labs', location: 'Remote (US/EU)', type: 'Full-time' },
  { title: 'React Native Developer', dept: 'Engineering', location: 'Remote (Global)', type: 'Contract' },
];

export default function Career() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-cyan/20 text-boraq-cyan text-sm font-medium mb-6">
            Join the collective
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Build your life's <span className="text-boraq-cyan italic">work.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
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
            className="glass-panel p-8 rounded-3xl group md:col-span-2 hover:border-boraq-cyan/30 transition-colors"
          >
            <div className="flex gap-4 items-center mb-6">
              <Terminal className="w-8 h-8 text-boraq-cyan" />
              <h3 className="text-2xl font-bold">Deep Work Default</h3>
            </div>
            <p className="text-black/70 dark:text-white/70 leading-relaxed max-w-xl">
              We despise pointless meetings. Our calendar defaults to empty. We operate asynchronously, preferring well-written technical RFCs over 90-minute Zoom calls to nowhere.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel-heavy p-8 rounded-[2rem] border-boraq-cyan flex items-center justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-boraq-cyan/10 blur-[50px] group-hover:bg-boraq-cyan/30 transition-colors duration-500" />
            <div className="text-center relative z-10">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-2">100%</div>
              <div className="text-sm font-bold uppercase tracking-widest text-boraq-cyan">Remote</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-6 rounded-3xl"
          >
            <Coffee className="w-6 h-6 text-boraq-cyan mb-4" />
            <h4 className="font-bold mb-2">Home Office Stipend</h4>
            <p className="text-sm text-black/60 dark:text-white/60">$2,500 upfront for your chair, desk, and monitors.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-6 rounded-3xl"
          >
            <HeartPulse className="w-6 h-6 text-boraq-cyan mb-4" />
            <h4 className="font-bold mb-2">Premium Healthcare</h4>
            <p className="text-sm text-black/60 dark:text-white/60">Fully covered medical, dental, and global health options.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-panel p-6 rounded-3xl"
          >
            <Zap className="w-6 h-6 text-boraq-cyan mb-4" />
            <h4 className="font-bold mb-2">Unlimited PTO</h4>
            <p className="text-sm text-black/60 dark:text-white/60">Take the time you need. We require a minimum of 3 weeks/year.</p>
          </motion.div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
        <div className="space-y-4">
          {positions.map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between group hover:border-boraq-cyan/50 transition-colors cursor-pointer gap-6"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-boraq-cyan transition-colors">{pos.title}</h3>
                <div className="flex flex-wrap gap-3 text-xs font-mono">
                  <span className="px-2 py-1 rounded-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center gap-1">
                    <Briefcase className="w-3 h-3 text-black/50 dark:text-white/50" /> {pos.dept}
                  </span>
                  <span className="px-2 py-1 rounded-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-black/50 dark:text-white/50" /> {pos.location}
                  </span>
                  <span className="px-2 py-1 rounded-sm bg-boraq-cyan/10 border border-boraq-cyan/20 text-boraq-cyan">
                    {pos.type}
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 group-hover:bg-boraq-cyan transition-colors">
                <ArrowRight className="w-5 h-5 text-black/50 dark:text-white/50 group-hover:text-black transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 glass-panel border-dashed border-2 border-black/10 dark:border-white/10 rounded-3xl">
          <h4 className="font-bold mb-2">Don't see a fit?</h4>
          <p className="text-black/60 dark:text-white/60 text-sm mb-4">We're always looking for exceptional talent. Pitch us why you below here.</p>
          <button className="text-sm font-bold border-b-2 border-boraq-cyan text-boraq-cyan pb-1 hover:text-white hover:border-white transition-colors">
            Send speculative application
          </button>
        </div>
      </section>
      <CallToAction />
    </div>
  );
}
