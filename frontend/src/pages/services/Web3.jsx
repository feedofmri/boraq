import { useState } from 'react';
import { motion } from 'framer-motion';
import { Blocks, Key, Globe, Lock, Pickaxe, Trophy } from 'lucide-react';
import { useTeamMembers } from '../../hooks/useApi';
import HeroTrustStrip from '../../components/sections/HeroTrustStrip';
import ServiceHumanSection from '../../components/sections/ServiceHumanSection';
import Testimonials from '../../components/sections/Testimonials';
import CallToAction from '../../components/sections/CallToAction';


const web3Features = [
  { title: 'Smart Contracts', desc: 'Audited, gas-optimized Solidity contracts for DeFi and NFT platforms.', icon: Blocks },
  { title: 'Decentralized Identity', desc: 'Secure, self-sovereign authentication systems.', icon: Key },
  { title: 'dApp Architecture', desc: 'High-performance React/Next.js frontends interacting seamlessly with the blockchain.', icon: Globe },
  { title: 'Tokenomics & Security', desc: 'Designing robust economic models and comprehensive vulnerability testing.', icon: Lock },
];

const blockColors = [
  'border-blue-400/50 bg-blue-400/10 shadow-blue-400/20',
  'border-purple-400/50 bg-purple-400/10 shadow-purple-400/20',
  'border-pink-400/50 bg-pink-400/10 shadow-pink-400/20',
  'border-cyan-400/50 bg-cyan-400/10 shadow-cyan-400/20',
  'border-green-400/50 bg-green-400/10 shadow-green-400/20',
  'border-yellow-400/50 bg-yellow-400/10 shadow-yellow-400/20',
  'border-orange-400/50 bg-orange-400/10 shadow-orange-400/20',
  'border-red-400/50 bg-red-400/10 shadow-red-400/20',
];

const blockIconColors = [
  'text-blue-400', 'text-purple-400', 'text-pink-400', 'text-cyan-400',
  'text-green-400', 'text-yellow-400', 'text-orange-400', 'text-red-400',
];

function InteractiveBlockchain() {
  const [blocks, setBlocks] = useState([
    { id: 0, hash: '0x0000', nonce: 0 },
    { id: 1, hash: '0xa3f2', nonce: 42 },
    { id: 2, hash: '0x7bc1', nonce: 117 },
  ]);
  const [mining, setMining] = useState(false);
  const [totalGas, setTotalGas] = useState(0.042);
  const [reward, setReward] = useState(null);

  const mineBlock = () => {
    if (mining) return;
    setMining(true);
    setReward(null);

    // Simulate mining delay
    setTimeout(() => {
      const hash = '0x' + Math.random().toString(16).slice(2, 6);
      const nonce = Math.floor(Math.random() * 999);
      const gasUsed = +(0.001 + Math.random() * 0.01).toFixed(4);
      setBlocks((prev) => [...prev, { id: prev.length, hash, nonce }]);
      setTotalGas((prev) => +(prev + gasUsed).toFixed(4));
      setReward(`+${gasUsed} ETH`);
      setMining(false);
      setTimeout(() => setReward(null), 2000);
    }, 800 + Math.random() * 700);
  };

  return (
    <div className="w-full glass-panel rounded-[3rem] mb-16 relative overflow-hidden border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(130,169,180,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-boraq-gray-mid dark:text-boraq-gray-silver/60">LIVE CHAIN</span>
            {mining && (
              <span className="inline-block text-yellow-400 animate-spin">
                <Pickaxe className="w-4 h-4" />
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-green-400">{totalGas} ETH earned</span>
            <span className="text-xs font-mono text-boraq-teal-steel">{blocks.length} blocks</span>
          </div>
        </div>

        {/* Chain */}
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {blocks.map((block, idx) => {
            const colorIdx = idx % blockColors.length;
            return (
              <div key={block.id} className="flex items-center gap-2 md:gap-3 shrink-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl border backdrop-blur-md flex flex-col items-center justify-center gap-0.5 shadow-lg ${blockColors[colorIdx]}`}
                >
                  <Blocks className={`w-4 h-4 md:w-5 md:h-5 ${blockIconColors[colorIdx]}`} />
                  <span className={`text-[8px] md:text-[9px] font-mono ${blockIconColors[colorIdx]}`}>#{block.id}</span>
                  <span className="text-[7px] font-mono text-boraq-gray-silver/40">{block.hash}</span>
                </motion.div>
                {idx < blocks.length - 1 && (
                  <div className={`w-4 md:w-6 h-[2px] shrink-0 ${idx < blocks.length - 2
                    ? 'bg-gradient-to-r from-boraq-teal-steel/60 to-boraq-teal-steel/30'
                    : 'bg-gradient-to-r from-boraq-teal-steel/30 to-boraq-teal-steel/10'
                    }`} />
                )}
              </div>
            );
          })}

          {/* Mine button */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <div className="w-4 md:w-6 h-[2px] bg-boraq-teal-steel/10" />
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.85 }}
              onClick={mineBlock}
              disabled={mining}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl border-2 border-dashed flex items-center justify-center cursor-pointer transition-all duration-300 ${mining
                ? 'border-yellow-400/50 bg-yellow-400/5 animate-pulse'
                : 'border-boraq-teal-steel/30 hover:border-purple-400 hover:bg-purple-400/10'
                }`}
            >
              <span className="text-2xl">
                {mining ? <Pickaxe className="w-5 h-5 text-yellow-400" /> : '+'}
              </span>
            </motion.button>
          </div>
        </div>

        {/* Footer with reward animation */}
        <div className="mt-4 text-center relative h-5">
          {reward ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-[11px] text-green-400 font-mono font-bold flex items-center justify-center gap-1"
            >
              <Trophy className="w-3 h-3" /> Block mined! Reward: {reward}
            </motion.p>
          ) : (
            <p className="text-[11px] text-boraq-gray-mid dark:text-boraq-gray-silver/50 font-mono">
              {mining ? 'Mining block...' : 'Click + to mine a new block'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Web3() {
  const { data: members } = useTeamMembers();
  const cto = (members || []).find(m => m.slug === 'rakib-hasan');

  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#82A9B4]/20 text-boraq-teal-steel text-sm font-bold mb-6">
            Decentralized Ecosystems
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">
            Architecting the <br /> <span className="text-boraq-teal-steel italic">new internet.</span>
          </h1>
          <p className="text-lg md:text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-3xl mx-auto font-light leading-relaxed">
            We build robust, scalable Web3 infrastructure that prioritizes security, user experience, and true decentralization.
          </p>

          {/* Human trust strip */}
          {cto && (
          <HeroTrustStrip
            centered
            lead={{
              name: cto.name,
              role: 'CTO: Web3 & Blockchain',
              avatar: cto.image,
            }}
          />
          )}
        </motion.div>
      </section>

      {/* Isometric Blocks + Features — original unique floating blocks visual */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {/* Interactive Block Mining */}
        <InteractiveBlockchain />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {web3Features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl group hover:border-boraq-teal-steel/30 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-boraq-teal-steel mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-boraq-black dark:text-boraq-white">{feature.title}</h3>
              <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Human trust section */}
      {cto && (
      <ServiceHumanSection
        teamLead={{
          name: cto.name,
          role: cto.role,
          avatar: cto.image,
          bio: cto.bio,
          funFact: cto.funFact,
        }}
        testimonial={{
          quote: "Boraq's Web3 expertise helped us launch a secure, transparent protocol. Their code audits gave us and our users real peace of mind.",
          author: 'Michael Chen',
          role: 'CTO, ChainLabs',
          avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200',
          result: 'Secure L2 protocol deployed',
        }}
        stats={[
          { label: 'Web3 Projects', value: '1+' },
          { label: 'User Satisfaction', value: '4.9/5' },
          { label: 'Blockchain Platforms', value: '1+' },
        ]}
        processNote="Rakib personally walks through every smart contract architecture and tokenomics model with your team."
      />
      )}

      <Testimonials />
      <CallToAction />
    </div>
  );
}
