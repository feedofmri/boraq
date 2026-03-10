import { useState } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layers, Palette, MonitorPlay } from 'lucide-react';
import { useTeamMembers } from '../../hooks/useApi';
import HeroTrustStrip from '../../components/sections/HeroTrustStrip';
import ServiceHumanSection from '../../components/sections/ServiceHumanSection';
import Testimonials from '../../components/sections/Testimonials';
import CallToAction from '../../components/sections/CallToAction';


const focusAreas = [
  { title: 'Brand Identity', desc: 'Crafting memorable, distinct visual languages that define market leaders.', icon: Palette },
  { title: 'Design Systems', desc: 'Scalable component libraries bridging design and engineering.', icon: Layers },
  { title: 'UX/UI Design', desc: 'Intuitive, conversion-optimized interfaces for web and mobile.', icon: MonitorPlay },
  { title: 'Prototyping', desc: 'High-fidelity, interactive models to validate concepts before code.', icon: PenTool },
];

const shapeColors = [
  'bg-blue-400 shadow-blue-400/50',
  'bg-pink-400 shadow-pink-400/50',
  'bg-purple-500 shadow-purple-500/50',
  'bg-yellow-400 shadow-yellow-400/50',
  'bg-green-400 shadow-green-400/50',
  'bg-orange-400 shadow-orange-400/50',
  'bg-cyan-400 shadow-cyan-400/50',
  'bg-red-400 shadow-red-400/50',
];

const initialShapes = [
  { id: 0, x: 20, y: 20, size: 80, radius: 'rounded-2xl', colorIdx: 0, rotation: 0 },
  { id: 1, x: 140, y: 60, size: 70, radius: 'rounded-full', colorIdx: 1, rotation: 0 },
  { id: 2, x: 60, y: 160, size: 90, radius: 'rounded-tl-3xl rounded-br-3xl', colorIdx: 2, rotation: 0 },
  { id: 3, x: 180, y: 180, size: 50, radius: 'rounded-lg', colorIdx: 3, rotation: 45 },
  { id: 4, x: 30, y: 280, size: 60, radius: 'rounded-full', colorIdx: 4, rotation: 0 },
  { id: 5, x: 160, y: 280, size: 65, radius: 'rounded-2xl', colorIdx: 5, rotation: 15 },
];

function DesignPlayground() {
  const [shapes, setShapes] = useState(initialShapes);

  const cycleColor = (id) => {
    setShapes((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, colorIdx: (s.colorIdx + 1) % shapeColors.length } : s
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="md:row-span-2 rounded-[2.5rem] p-1 glass-panel-heavy overflow-hidden min-h-[500px] relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-2 rounded-[2.25rem] bg-boraq-white/50 dark:bg-boraq-black/50 backdrop-blur-xl border border-boraq-gray-silver/20 dark:border-boraq-teal-deep/10 p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-boraq-black dark:text-boraq-white">Pixel Perfect.</h3>
            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light text-xs mt-1">Drag shapes • Double-click to change color</p>
          </div>
          <div className="flex gap-1">
            {shapeColors.slice(0, 6).map((c, i) => (
              <div key={i} className={`w-3 h-3 rounded-full ${c.split(' ')[0]}`} />
            ))}
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden rounded-2xl bg-boraq-black/[0.03] dark:bg-boraq-white/[0.02] border border-dashed border-boraq-gray-silver/15 dark:border-boraq-teal-deep/15">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {shapes.map((shape) => (
            <motion.div
              key={shape.id}
              drag
              dragConstraints={{ top: 0, left: 0, right: 200, bottom: 300 }}
              dragElastic={0.1}
              whileDrag={{ scale: 1.15, zIndex: 50 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ rotate: shape.rotation + 45 }}
              onDoubleClick={() => cycleColor(shape.id)}
              className={`absolute cursor-grab active:cursor-grabbing ${shape.radius} ${shapeColors[shape.colorIdx]} shadow-[0_0_25px] transition-colors duration-500`}
              style={{
                width: shape.size,
                height: shape.size,
                left: shape.x,
                top: shape.y,
                rotate: shape.rotation,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function UIBranding() {
  const { data: members } = useTeamMembers();
  const coo = (members || []).find(m => m.slug === 'ma-huan-sheikh-meem');

  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-teal-steel/20 text-boraq-teal-steel text-sm font-bold mb-6">
            Creative Studio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">
            Design that <span className="text-boraq-teal-steel italic">converts.</span>
          </h1>
          <p className="text-lg md:text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-3xl mx-auto font-light leading-relaxed">
            We don't just make things look pretty. We engineer visual hierarchies, interaction models, and brand personalities that drive engagement and trust.
          </p>

          {/* Human trust strip */}
          {coo && (
          <HeroTrustStrip
            centered
            lead={{
              name: coo.name,
              role: 'COO — UI/UX & Branding',
              avatar: coo.image,
            }}
          />
          )}
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Interactive Design Playground */}
          <DesignPlayground />

          {focusAreas.slice(0, 2).map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl group hover:border-boraq-teal-steel/30 transition-colors"
            >
              <area.icon className="w-8 h-8 text-boraq-teal-steel mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-boraq-black dark:text-boraq-white">{area.title}</h3>
              <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light">{area.desc}</p>
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

      {/* NEW: Human trust section */}
      {coo && (
      <ServiceHumanSection
        teamLead={{
          name: coo.name,
          role: coo.role,
          avatar: coo.image,
          bio: coo.bio,
          funFact: coo.funFact,
        }}
        testimonial={{
          quote: 'Boraq\'s design team transformed our brand with Moushum — a nature-inspired identity that perfectly captured our vision.',
          author: 'Nusrat Jahan',
          role: 'Creative Director',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
          result: 'Complete brand identity delivered',
        }}
        stats={[
          { label: 'Interfaces Designed', value: '11+' },
          { label: 'User Satisfaction', value: '4.9/5' },
          { label: 'Brand Projects', value: '11+' },
        ]}
        processNote="Meem personally leads every design sprint — you'll review live prototypes together in weekly sessions."
      />
      )}

      <Testimonials />
      <CallToAction />
    </div>
  );
}
