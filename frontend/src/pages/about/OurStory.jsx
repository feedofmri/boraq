import { motion } from 'framer-motion';
import { Target, TrendingUp, Users } from 'lucide-react';
import ExpertTeam from '../../components/sections/ExpertTeam';
import StatsCounter from '../../components/sections/StatsCounter';
import CallToAction from '../../components/sections/CallToAction';

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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Born from <br /> <span className="text-boraq-cyan italic">necessity.</span>
            </h1>
            <div className="space-y-6 text-lg text-black/70 dark:text-white/70 font-light leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-br from-boraq-cyan/20 to-transparent mix-blend-overlay z-0" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaborating"
                className="w-full h-full object-cover rounded-[2.5rem] filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 dark:opacity-40"
              />
              {/* Overlay UI elements */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel backdrop-blur-xl p-6 rounded-2xl border border-white/20">
                <div className="text-sm font-medium text-black/80 dark:text-white/80 mb-2">Our Mission</div>
                <div className="text-xl font-bold tracking-tight">To engineer the future of tech, without compromise.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">The Pillars of Boraq</h2>
          <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto">The unshakeable principles that dictate how we operate, hire, and build.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Extreme Ownership', icon: Target, desc: 'We do not pass the buck. If we build it, we own its performance, security, and scalability.' },
            { title: 'Radical Transparency', icon: Users, desc: 'No black boxes. Clients have direct access to our repositories, sprint boards, and senior engineers.' },
            { title: 'Continuous Evolution', icon: TrendingUp, desc: 'Technology moves fast. We move faster. We mandate aggressive continuous learning for all staff.' }
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-10 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-boraq-cyan/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-boraq-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-black/60 dark:text-white/60 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Human Element & Stats */}
      <ExpertTeam />
      <StatsCounter />
      <CallToAction />
    </div>
  );
}
