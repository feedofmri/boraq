import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, ChevronRight } from 'lucide-react';
import ExpertTeam from '../../components/sections/ExpertTeam';
import StatsCounter from '../../components/sections/StatsCounter';
import CallToAction from '../../components/sections/CallToAction';

const milestones = [
  { year: '2019', event: 'Founded in Dhaka', color: 'bg-boraq-teal-steel' },
  { year: '2020', event: 'First enterprise client', color: 'bg-boraq-teal-steel/80' },
  { year: '2021', event: 'Team grew to 20+', color: 'bg-boraq-teal-deep' },
  { year: '2022', event: 'Expanded to 4 countries', color: 'bg-boraq-teal-steel' },
  { year: '2023', event: 'AI division launched', color: 'bg-boraq-teal-steel/80' },
  { year: '2024', event: '100+ projects shipped', color: 'bg-boraq-teal-deep' },
];

function MilestoneTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="glass-panel-heavy rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-boraq-teal-steel/5 via-transparent to-transparent pointer-events-none" />

      {/* Timeline bar */}
      <div className="relative z-10 flex items-center justify-between mb-10">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-boraq-gray-silver/10 dark:bg-boraq-teal-deep/10 -translate-y-1/2" />
        <motion.div
          className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-boraq-teal-deep via-boraq-teal-steel to-boraq-teal-steel/60 -translate-y-1/2 rounded-full"
          animate={{ width: `${(activeIdx / (milestones.length - 1)) * 100}%` }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        />
        {milestones.map((m, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => setActiveIdx(i)}
            className={`relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 ${
              i <= activeIdx
                ? `${m.color} border-transparent shadow-lg text-boraq-white text-[10px] md:text-xs font-bold`
                : 'bg-boraq-white dark:bg-boraq-black border-boraq-gray-silver/30 dark:border-boraq-teal-deep/30 text-boraq-gray-mid dark:text-boraq-gray-silver text-[10px] md:text-xs'
            }`}
          >
            {m.year.slice(2)}
          </motion.button>
        ))}
      </div>

      {/* Active milestone detail */}
      <motion.div
        key={activeIdx}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 text-center"
      >
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-boraq-white text-sm font-bold mb-4 ${milestones[activeIdx].color}`}>
          {milestones[activeIdx].year}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-boraq-black dark:text-boraq-white mb-2">
          {milestones[activeIdx].event}
        </h3>
        <p className="text-sm text-boraq-gray-mid/60 dark:text-boraq-gray-silver/40 font-mono">
          {activeIdx + 1} of {milestones.length} milestones
        </p>
      </motion.div>

      {/* Nav arrows */}
      <div className="relative z-10 flex justify-center gap-3 mt-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActiveIdx((p) => Math.max(0, p - 1))}
          disabled={activeIdx === 0}
          className="w-10 h-10 rounded-full glass-panel flex items-center justify-center disabled:opacity-30 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 text-boraq-black dark:text-boraq-white rotate-180" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActiveIdx((p) => Math.min(milestones.length - 1, p + 1))}
          disabled={activeIdx === milestones.length - 1}
          className="w-10 h-10 rounded-full glass-panel flex items-center justify-center disabled:opacity-30 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 text-boraq-black dark:text-boraq-white" />
        </motion.button>
      </div>
    </div>
  );
}

export default function OurStory() {
  return (
    <div className="w-full pb-32">
      {/* Split Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-boraq-black dark:text-boraq-white">
              Born from <br /> <span className="text-boraq-teal-steel italic">necessity.</span>
            </h1>
            <div className="space-y-6 text-lg text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed">
              <p>
                Boraq didn't start in a boardroom. It started with a shared frustration among senior tech leads: the disconnect between ambitious business vision and shoddy, unscalable software execution.
              </p>
              <p>
                We saw enterprises burning millions on legacy agencies that promised digital transformation but delivered technical debt. We knew there was a better way. A way that prioritized engineering rigor, premium aesthetics, and measurable ROI.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            {/* Abstract Origin Graphic */}
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-lg mx-auto rounded-[3rem] p-2 glass-panel-heavy overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-boraq-teal-steel/20 to-transparent mix-blend-overlay z-0" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaborating"
                className="w-full h-full object-cover rounded-[2.5rem] filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 dark:opacity-40"
              />
              {/* Overlay UI elements */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel backdrop-blur-xl p-6 rounded-2xl border border-boraq-teal-steel/20">
                <div className="text-xs font-bold tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver uppercase mb-2">Our Mission</div>
                <div className="text-xl font-bold tracking-tight text-boraq-black dark:text-boraq-white">To engineer the future of tech, without compromise.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-boraq-black dark:text-boraq-white">The Pillars of Boraq</h2>
          <p className="text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mx-auto font-light leading-relaxed">The unshakeable principles that dictate how we operate, hire, and build.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Extreme Ownership', icon: Target, desc: 'We do not pass the buck. If we build it, we own its performance, security, and scalability.', color: 'from-blue-400/20 to-cyan-400/20' },
            { title: 'Radical Transparency', icon: Users, desc: 'No black boxes. Clients have direct access to our repositories, sprint boards, and senior engineers.', color: 'from-purple-400/20 to-pink-400/20' },
            { title: 'Continuous Evolution', icon: TrendingUp, desc: 'Technology moves fast. We move faster. We mandate aggressive continuous learning for all staff.', color: 'from-green-400/20 to-emerald-400/20' }
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, rotateX: 5, rotateY: -5 }}
              className="glass-panel p-10 rounded-3xl text-center group cursor-pointer transition-shadow duration-300 hover:shadow-xl relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-boraq-teal-deep/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-boraq-teal-steel" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-boraq-black dark:text-boraq-white">{value.title}</h3>
                <p className="text-boraq-gray-mid dark:text-boraq-gray-silver leading-relaxed font-light">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Milestone Timeline */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-boraq-black dark:text-boraq-white">Our <span className="text-boraq-teal-steel">Journey</span></h2>
          <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light">Click a milestone to explore</p>
        </div>
        <MilestoneTimeline />
      </section>

      {/* Human Element & Stats */}
      <ExpertTeam />
      <StatsCounter />
      <CallToAction />
    </div>
  );
}
