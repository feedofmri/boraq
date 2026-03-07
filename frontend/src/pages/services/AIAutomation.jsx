import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Zap, Network, Check, Trophy } from 'lucide-react';
import HeroTrustStrip from '../../components/sections/HeroTrustStrip';
import ServiceHumanSection from '../../components/sections/ServiceHumanSection';
import Testimonials from '../../components/sections/Testimonials';
import CallToAction from '../../components/sections/CallToAction';


const capabilities = [
  { title: 'Generative AI Integration', desc: 'Securely implementing LLMs into your existing SaaS products.', icon: Bot },
  { title: 'Predictive Analytics', desc: 'Forecasting trends and behaviors using historical data pipelines.', icon: Cpu },
  { title: 'Workflow Automation', desc: 'Replacing manual bottlenecks with intelligent, condition-based triggers.', icon: Zap },
  { title: 'Neural Networks', desc: 'Custom deep learning models tailored to hyper-specific industry use cases.', icon: Network },
];

const nodeColors = [
  'bg-blue-400 shadow-blue-400/60',
  'bg-purple-400 shadow-purple-400/60',
  'bg-pink-400 shadow-pink-400/60',
  'bg-cyan-400 shadow-cyan-400/60',
  'bg-green-400 shadow-green-400/60',
  'bg-yellow-400 shadow-yellow-400/60',
  'bg-orange-400 shadow-orange-400/60',
  'bg-red-400 shadow-red-400/60',
  'bg-indigo-400 shadow-indigo-400/60',
  'bg-teal-400 shadow-teal-400/60',
  'bg-rose-400 shadow-rose-400/60',
  'bg-violet-400 shadow-violet-400/60',
  'bg-emerald-400 shadow-emerald-400/60',
  'bg-amber-400 shadow-amber-400/60',
  'bg-fuchsia-400 shadow-fuchsia-400/60',
  'bg-sky-400 shadow-sky-400/60',
];

function InteractiveNeuralNet() {
  const [activeNodes, setActiveNodes] = useState(new Set());
  const trained = activeNodes.size >= 12;
  const accuracy = Math.min(99.9, 42.0 + activeNodes.size * 4.8);

  const toggleNode = (idx) => {
    setActiveNodes((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div className="relative w-full max-w-md aspect-square">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="relative h-full w-full glass-panel-heavy rounded-[3rem] border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-5 pb-3 border-b border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 flex justify-between items-center">
          <span className="text-xs font-mono text-boraq-gray-mid dark:text-boraq-gray-silver/60">neural_net.model</span>
          <span className={`text-xs font-mono font-bold ${trained ? 'text-green-400' : 'text-boraq-teal-steel'}`}>
            {trained ? <span className="flex items-center justify-end gap-1"><Check className="w-3 h-3" /> TRAINED</span> : `${accuracy.toFixed(1)}% accuracy`}
          </span>
        </div>

        {/* Progress bar */}
        <div className="px-6 pt-3">
          <div className="h-1.5 w-full rounded-full bg-boraq-gray-silver/10 dark:bg-boraq-teal-deep/10 overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${trained ? 'bg-gradient-to-r from-green-400 to-emerald-400' : 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'}`}
              animate={{ width: `${(activeNodes.size / 16) * 100}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />
          </div>
        </div>

        {/* 4×4 Grid */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="grid grid-cols-4 gap-4">
            {[...Array(16)].map((_, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.4, rotate: 10 }}
                whileTap={{ scale: 0.8, rotate: -10 }}
                animate={activeNodes.has(i) ? { scale: [1, 1.2, 1] } : {}}
                transition={activeNodes.has(i) ? { repeat: Infinity, duration: 2, repeatDelay: Math.random() * 2 } : {}}
                onClick={() => toggleNode(i)}
                className={`w-7 h-7 md:w-8 md:h-8 rounded-full cursor-pointer transition-all duration-300 ${
                  activeNodes.has(i)
                    ? `${nodeColors[i]} shadow-[0_0_18px]`
                    : 'bg-boraq-gray-silver/20 dark:bg-boraq-teal-deep/20 hover:bg-boraq-gray-silver/40 dark:hover:bg-boraq-teal-deep/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-5 text-center">
          {trained ? (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] text-green-400 font-mono font-bold flex items-center justify-center gap-1"
            >
              <Trophy className="w-3 h-3" /> Model trained! 99.9% accuracy achieved
            </motion.p>
          ) : (
            <p className="text-[11px] text-boraq-gray-mid dark:text-boraq-gray-silver/50 font-mono">
              Click neurons to train → {activeNodes.size}/16 active
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AIAutomation() {
  return (
    <div className="w-full pb-32">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          <div className="flex-1 lg:pr-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#82A9B4]/20 text-boraq-teal-steel text-sm font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-boraq-teal-steel animate-pulse" />
              Artificial Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-boraq-black dark:text-boraq-white">
              Intelligence, <br /> <span className="text-boraq-teal-steel italic">Operationalized.</span>
            </h1>
            <p className="text-lg md:text-xl text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed">
              We bridge the gap between AI research and enterprise reality. Deploy production-ready machine learning models that optimize efficiency and create new revenue streams.
            </p>

            {/* Human trust strip */}
            <HeroTrustStrip
              lead={{
                name: 'Elena Rodriguez',
                role: 'Lead AI Engineer',
                avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
              }}
            />
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <InteractiveNeuralNet />
          </div>
        </motion.div>
      </section>

      {/* Platform Capabilities */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-boraq-black dark:text-boraq-white">Core Capabilities</h2>
          <p className="text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl font-light">From foundational models to fine-tuned autonomous agents.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-boraq-teal-deep/5 dark:bg-boraq-white/5 flex items-center justify-center mb-6 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 group-hover:border-boraq-teal-steel/50 transition-colors">
                <cap.icon className="w-6 h-6 text-boraq-teal-steel" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-boraq-black dark:text-boraq-white">{cap.title}</h3>
              <p className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver leading-relaxed font-light">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW: Human trust section */}
      <ServiceHumanSection
        teamLead={{
          name: 'Elena Rodriguez',
          role: 'Lead AI Engineer',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
          bio: 'PhD in Machine Learning from MIT. 12+ published papers. Elena personally designs every model architecture and ensures your AI solution is production-ready, not just a proof of concept.',
          funFact: 'Watercolor painter & AI ethics advocate',
        }}
        testimonial={{
          quote: 'The level of transparency is unprecedented. We felt like we had an in-house engineering team, not an external agency.',
          author: 'Amanda Lee',
          role: 'Founder, HealthSync',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
          result: '40% cost reduction',
        }}
        stats={[
          { label: 'ML Models Deployed', value: '30+' },
          { label: 'Avg. Accuracy', value: '96.4%' },
          { label: 'Data Points Processed', value: '2B+' },
        ]}
        processNote="Elena walks you through every model decision in plain language — no black boxes, full transparency."
      />

      <Testimonials />
      <CallToAction />
    </div>
  );
}
