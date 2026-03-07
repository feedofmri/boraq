import { motion } from 'framer-motion';
import { PenTool, Layers, Palette, MonitorPlay } from 'lucide-react';

const focusAreas = [
  { title: 'Brand Identity', desc: 'Crafting memorable, distinct visual languages that define market leaders.', icon: Palette },
  { title: 'Design Systems', desc: 'Scalable component libraries bridging design and engineering.', icon: Layers },
  { title: 'UX/UI Design', desc: 'Intuitive, conversion-optimized interfaces for web and mobile.', icon: MonitorPlay },
  { title: 'Prototyping', desc: 'High-fidelity, interactive models to validate concepts before code.', icon: PenTool },
];

export default function UIBranding() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-cyan/20 text-boraq-cyan text-sm font-medium mb-6">
            Creative Studio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Design that <span className="text-boraq-cyan italic">converts.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            We don't just make things look pretty. We engineer visual hierarchies, interaction models, and brand personalities that drive engagement and trust.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Visual Showcase Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:row-span-2 rounded-[2.5rem] p-1 glass-panel-heavy overflow-hidden min-h-[500px] relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-boraq-cyan/20 via-transparent to-pink-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-2 rounded-[2.25rem] bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">Pixel Perfect.</h3>
                <p className="text-black/60 dark:text-white/60">Every detail meticulously scrutinized.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-2xl bg-black dark:bg-white shadow-2xl animate-bounce" style={{ animationDuration: '3s' }} />
                <div className="w-16 h-16 rounded-full bg-boraq-cyan/80 shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '3s' }} />
                <div className="w-16 h-16 rounded-tl-2xl rounded-br-2xl bg-gray-500/50 backdrop-blur shadow-xl animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '3s' }} />
              </div>
            </div>
          </motion.div>

          {focusAreas.slice(0, 2).map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl group hover:border-boraq-cyan/30 transition-colors"
            >
              <area.icon className="w-8 h-8 text-boraq-cyan mb-6" />
              <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
              <p className="text-black/60 dark:text-white/60">{area.desc}</p>
            </motion.div>
          ))}
          {focusAreas.slice(2, 4).map((area, i) => (
            <motion.div
              key={i + 2}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 2) * 0.1 }}
              className="glass-panel p-8 rounded-3xl group hover:border-boraq-cyan/30 transition-colors"
            >
              <area.icon className="w-8 h-8 text-boraq-cyan mb-6" />
              <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
              <p className="text-black/60 dark:text-white/60">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
