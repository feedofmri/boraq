import { motion } from 'framer-motion';
import { Cpu, Bot, Zap, Network } from 'lucide-react';
import Testimonials from '../../components/sections/Testimonials';
import CallToAction from '../../components/sections/CallToAction';


const capabilities = [
  { title: 'Generative AI Integration', desc: 'Securely implementing LLMs into your existing SaaS products.', icon: Bot },
  { title: 'Predictive Analytics', desc: 'Forecasting trends and behaviors using historical data pipelines.', icon: Cpu },
  { title: 'Workflow Automation', desc: 'Replacing manual bottlenecks with intelligent, condition-based triggers.', icon: Zap },
  { title: 'Neural Networks', desc: 'Custom deep learning models tailored to hyper-specific industry use cases.', icon: Network },
];

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
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              {/* Neural Network Graphic */}
              <div className="absolute inset-0 bg-boraq-teal-deep/10 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="relative h-full w-full glass-panel-heavy rounded-[3rem] border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 p-12 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  {/* Abstract Grid Lines */}
                  <div className="w-full h-full bg-[linear-gradient(rgba(130,169,180,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(130,169,180,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
                </div>
                <div className="relative z-10 grid grid-cols-3 gap-6">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse', repeatDelay: Math.random() * 2 }}
                      className="w-4 h-4 rounded-full bg-boraq-teal-steel shadow-[0_0_15px_rgba(130,169,180,0.8)]"
                    />
                  ))}
                </div>
              </div>
            </div>
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
      <Testimonials />
      <CallToAction />
    </div>
  );
}
