import { motion } from 'framer-motion';
import { Blocks, Key, Globe, Lock } from 'lucide-react';
import Testimonials from '../../components/sections/Testimonials';
import CallToAction from '../../components/sections/CallToAction';


const web3Features = [
  { title: 'Smart Contracts', desc: 'Audited, gas-optimized Solidity contracts for DeFi and NFT platforms.', icon: Blocks },
  { title: 'Decentralized Identity', desc: 'Secure, self-sovereign authentication systems.', icon: Key },
  { title: 'dApp Architecture', desc: 'High-performance React/Next.js frontends interacting seamlessly with the blockchain.', icon: Globe },
  { title: 'Tokenomics & Security', desc: 'Designing robust economic models and comprehensive vulnerability testing.', icon: Lock },
];

export default function Web3() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-cyan/20 text-boraq-cyan text-sm font-medium mb-6">
            Decentralized Ecosystems
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Architecting the <br /> <span className="text-boraq-cyan italic">new internet.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            We build robust, scalable Web3 infrastructure that prioritizes security, user experience, and true decentralization.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        {/* Isometric Blocks Graphic Placeholder */}
        <div className="w-full h-64 md:h-96 glass-panel rounded-[3rem] mb-16 relative flex items-center justify-center overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" />
          {/* Three glowing blocks */}
          <div className="flex gap-4 md:gap-8 items-center z-10 relative">
            <motion.div
              animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-20 h-20 md:w-32 md:h-32 bg-black/40 backdrop-blur-md rounded-xl md:rounded-2xl border border-boraq-cyan/50 rotate-45 transform-gpu shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center"
            >
              <Blocks className="w-8 h-8 md:w-12 md:h-12 -rotate-45 text-boraq-cyan opacity-80" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="w-24 h-24 md:w-40 md:h-40 bg-black/40 backdrop-blur-lg rounded-xl md:rounded-2xl border border-boraq-cyan bg-boraq-cyan/10 rotate-45 transform-gpu shadow-[0_0_50px_rgba(6,182,212,0.5)] z-10 flex items-center justify-center"
            >
              <Globe className="w-10 h-10 md:w-16 md:h-16 -rotate-45 text-white opacity-90" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="w-20 h-20 md:w-32 md:h-32 bg-black/40 backdrop-blur-md rounded-xl md:rounded-2xl border border-boraq-cyan/50 rotate-45 transform-gpu shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center"
            >
              <Lock className="w-8 h-8 md:w-12 md:h-12 -rotate-45 text-boraq-cyan opacity-80" />
            </motion.div>
          </div>
          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-boraq-cyan/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {web3Features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl group hover:border-boraq-cyan/30 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-boraq-cyan mb-6" />
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-black/60 dark:text-white/60">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Testimonials />
      <CallToAction />
    </div>
  );
}
