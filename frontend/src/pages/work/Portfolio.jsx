import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code, Layout, Smartphone } from 'lucide-react';
import Testimonials from '../../components/sections/Testimonials';
import StatsCounter from '../../components/sections/StatsCounter';
import CallToAction from '../../components/sections/CallToAction';

const projects = [
  {
    id: 1,
    title: 'Nexus Fintech Platform',
    category: 'Web App',
    description: 'A high-performance trading dashboard handling thousands of transactions per second.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'WebSockets'],
    icon: Layout,
  },
  {
    id: 2,
    title: 'Aura AI Assistant',
    category: 'AI & ML',
    description: 'An intelligent voice semantic search engine for enterprise data lakes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
    icon: Code,
  },
  {
    id: 3,
    title: 'Vanguard Mobile',
    category: 'Mobile App',
    description: 'A natively compiled Flutter application for global supply chain logistics.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    tags: ['Flutter', 'Firebase', 'GCP'],
    icon: Smartphone,
  },
  {
    id: 4,
    title: 'Equinox Web3 Dex',
    category: 'Web3',
    description: 'A decentralized exchange with deep liquidity pools and minimal slippage.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=2128&auto=format&fit=crop',
    tags: ['Solidity', 'Next.js', 'Ethers.js'],
    icon: Code,
  },
];

const categories = ['All', 'Web App', 'Mobile App', 'AI & ML', 'Web3'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Selected <span className="text-boraq-cyan">Works.</span>
            </h1>
            <p className="text-lg md:text-2xl text-black/70 dark:text-white/70 font-light leading-relaxed">
              A curated showcase of our finest engineering endeavors. From globally scaled fintech platforms to localized AI solutions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border ${activeFilter === category
                ? 'bg-black text-white dark:bg-white dark:text-black border-transparent'
                : 'bg-white/5 border-black/10 dark:border-white/10 hover:border-boraq-cyan/50 text-black/70 dark:text-white/70'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-3xl overflow-hidden glass-panel flex flex-col h-[500px]"
              >
                {/* Image Container */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 dark:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent dark:from-black dark:via-black/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <project.icon className="w-5 h-5 text-boraq-cyan" />
                      <span className="text-sm font-medium text-boraq-cyan/90 tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full glass-panel-heavy flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
                  <p className="text-white/70 line-clamp-2 mb-6 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Trust & Conversion Sections */}
      <StatsCounter />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
