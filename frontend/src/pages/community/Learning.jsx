import { motion } from 'framer-motion';
import { BookOpen, Play, Code, Award } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';
import ExpertTeam from '../../components/sections/ExpertTeam';
import StatsCounter from '../../components/sections/StatsCounter';


export default function Learning() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-teal-steel/20 text-boraq-teal-steel text-sm font-bold mb-6">
            <BookOpen className="w-4 h-4" />
            Education
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">
            Master the <span className="text-boraq-teal-steel italic">Craft.</span>
          </h1>
          <p className="text-lg md:text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-3xl mx-auto font-light leading-relaxed">
            Intensive bootcamps, technical workshops, and engineering deep-dives taught by the senior developers who build Boraq's enterprise products.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Bootcamp */}
          <div className="flex-1 lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel-heavy rounded-[2.5rem] p-8 h-full flex flex-col justify-between group overflow-hidden relative border border-boraq-cyan/30 bg-black/5 dark:bg-white/5"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-boraq-teal-steel/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-boraq-teal-steel/40 transition-colors duration-700" />

              <div className="relative z-10 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-sm bg-boraq-teal-steel text-boraq-black text-[10px] font-bold uppercase tracking-widest">Masterclass</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-boraq-gray-mid dark:text-boraq-gray-silver flex items-center gap-1"><Play className="w-4 h-4" /> 12 Weeks</span>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-boraq-black dark:text-boraq-white">Advanced Full-Stack Go & Next.js</h2>
                <p className="text-boraq-gray-mid dark:text-boraq-gray-silver leading-relaxed max-w-md font-light">
                  Architecting distributed systems. Learn how to connect bleeding-edge React frontends with high-concurrency Go microservices using gRPC.
                </p>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
                  <Code className="w-6 h-6 text-boraq-teal-steel" />
                  <span className="font-bold text-xs tracking-widest uppercase text-boraq-black dark:text-boraq-white">100% Code-focused curriculum</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
                  <Award className="w-6 h-6 text-boraq-teal-steel" />
                  <span className="font-bold text-xs tracking-widest uppercase text-boraq-black dark:text-boraq-white">Industry-recognized certification</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 relative z-10">
                <button className="w-full py-4 rounded-full bg-boraq-black dark:bg-boraq-white text-boraq-white dark:text-boraq-black font-bold text-sm tracking-widest uppercase hover:scale-[1.02] transition-transform">
                  Apply for Cohort 4 (Waitlist)
                </button>
              </div>
            </motion.div>
          </div>

          {/* Short Courses Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Framer Motion Internals', desc: 'Building complex layout animations and orchestrating timeline events.' },
              { title: 'PostgreSQL Deep Dive', desc: 'Indexing, window functions, and optimizing slow queries.' },
              { title: 'Serverless Edge Config', desc: 'Deploying Vercel Edge functions for sub-20ms global latency.' },
              { title: 'Web3 Security', desc: 'Auditing Solidity contracts for reentrancy and overflow vulnerabilities.' }
            ].map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-6 rounded-3xl flex flex-col justify-between group hover:border-boraq-teal-steel/30 transition-colors cursor-pointer border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10"
              >
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-boraq-teal-steel transition-colors text-boraq-black dark:text-boraq-white">{course.title}</h3>
                  <p className="text-xs text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed">{course.desc}</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 group-hover:text-boraq-teal-steel transition-colors text-boraq-black dark:text-boraq-white">
                  <Play className="w-3 h-3 text-boraq-teal-steel" /> Start Workshop
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ExpertTeam />
      <StatsCounter />

      <CallToAction />
    </div>
  );
}
