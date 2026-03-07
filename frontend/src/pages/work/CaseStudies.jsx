import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Clock, Zap } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';

import { Link } from 'react-router-dom';

const cases = [
  {
    client: 'GlobalPay Inc.',
    industry: 'Fintech',
    title: 'Scaling cross-border settlements by 400%',
    challenge: 'A monolithic architecture was failing to handle peak transaction loads, resulting in severe latency and lost revenue.',
    solution: 'Migrated to a distributed microservices architecture using Go and Kafka, with a React/Next.js frontend for real-time monitoring.',
    metrics: [
      { label: 'Latency Reduced', value: '-85%', icon: Clock },
      { label: 'Tx / Second', value: '10k+', icon: Zap },
      { label: 'Revenue ROI', value: '3.2x', icon: BarChart3 }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    client: 'HealthSync',
    industry: 'Healthcare / AI',
    title: 'Automating patient triage with LLM pipelines',
    challenge: 'Human operators were overwhelmed by inbound queries, leading to extended wait times for critical patients.',
    solution: 'Deployed a HIPAA-compliant generative AI agent fine-tuned on medical lexicons to handle 70% of initial triage queries autonomously.',
    metrics: [
      { label: 'Autonomy', value: '72%', icon: Zap },
      { label: 'Response Time', value: '< 2s', icon: Clock },
      { label: 'Accuracy', value: '99.1%', icon: BarChart3 }
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function CaseStudies() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Impact, <span className="text-boraq-cyan italic">Quantified.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            We don't just ship code; we solve severe business bottlenecks. Explore how we've fundamentally transformed industry leaders through applied engineering.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-24">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col lg:flex-row gap-12 items-center"
            >
              {/* Graphic Side */}
              <div className={`flex-1 w-full ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-[2.5rem] glass-panel p-2 shadow-2xl relative group overflow-hidden">
                  <div className="absolute inset-0 bg-boraq-cyan/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-auto aspect-[4/3] object-cover rounded-[2rem] filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Glass floating card */}
                  <div className="absolute bottom-6 left-6 right-6 glass-panel-heavy backdrop-blur-xl p-6 rounded-2xl flex justify-between items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-20">
                    <div>
                      <div className="text-xs text-white/70 uppercase tracking-wider mb-1 px-2 py-1 bg-black/40 rounded-full inline-block">{study.industry}</div>
                      <div className="font-bold text-white text-lg">{study.client}</div>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-boraq-cyan flex items-center justify-center hover:scale-110 transition-transform">
                      <ArrowRight className="w-5 h-5 text-black" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{study.title}</h2>

                <div className="space-y-6 mb-10">
                  <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-red-500/50">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-black/50 dark:text-white/50 mb-2">The Challenge</h4>
                    <p className="text-black/80 dark:text-white/80">{study.challenge}</p>
                  </div>
                  <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-boraq-cyan/50">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-black/50 dark:text-white/50 mb-2">The Solution</h4>
                    <p className="text-black/80 dark:text-white/80">{study.solution}</p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="glass-panel p-4 rounded-xl text-center">
                      <metric.icon className="w-5 h-5 text-boraq-cyan mx-auto mb-2" />
                      <div className="text-2xl font-bold mb-1">{metric.value}</div>
                      <div className="text-xs text-black/50 dark:text-white/50 uppercase tracking-widest">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link to="#" className="inline-flex flex-col group">
                    <span className="font-medium flex items-center gap-2">
                      Read Full Methodology <ArrowRight className="w-4 h-4 group-hover:text-boraq-cyan transition-colors group-hover:translate-x-1 duration-300" />
                    </span>
                    <div className="h-[2px] w-0 bg-boraq-cyan group-hover:w-full transition-all duration-300 mt-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <CallToAction />
    </div>
  );
}
