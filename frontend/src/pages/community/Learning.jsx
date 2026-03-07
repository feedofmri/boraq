import { motion } from 'framer-motion';
import { BookOpen, Play, Code, Award } from 'lucide-react';

export default function Learning() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-cyan/20 text-boraq-cyan text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Education
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Master the <span className="text-boraq-cyan italic">Craft.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-boraq-cyan/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-boraq-cyan/40 transition-colors duration-700" />

              <div className="relative z-10 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-sm bg-boraq-cyan text-black text-xs font-bold uppercase tracking-widest">Masterclass</span>
                  <span className="text-sm font-medium text-black/60 dark:text-white/60 flex items-center gap-1"><Play className="w-4 h-4" /> 12 Weeks</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Advanced Full-Stack Go & Next.js</h2>
                <p className="text-black/70 dark:text-white/70 leading-relaxed max-w-md">
                  Architecting distributed systems. Learn how to connect bleeding-edge React frontends with high-concurrency Go microservices using gRPC.
                </p>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <Code className="w-6 h-6 text-boraq-cyan" />
                  <span className="font-medium">100% Code-focused curriculum</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <Award className="w-6 h-6 text-boraq-cyan" />
                  <span className="font-medium">Industry-recognized certification</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-black/10 dark:border-white/10 relative z-10">
                <button className="w-full py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold hover:scale-[1.02] transition-transform">
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
                className="glass-panel p-6 rounded-3xl flex flex-col justify-between group hover:border-boraq-cyan/30 transition-colors cursor-pointer"
              >
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-boraq-cyan transition-colors">{course.title}</h3>
                  <p className="text-sm text-black/60 dark:text-white/60">{course.desc}</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:text-boraq-cyan transition-colors">
                  <Play className="w-3 h-3" /> Start Workshop
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
