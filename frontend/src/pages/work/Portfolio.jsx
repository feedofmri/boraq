import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code, Layout, Smartphone, Eye, Zap, Cpu, Globe, Search } from 'lucide-react';
import Testimonials from '../../components/sections/Testimonials';
import StatsCounter from '../../components/sections/StatsCounter';
import CallToAction from '../../components/sections/CallToAction';

const projects = [
  {
    id: 'nexus-fintech',
    title: 'Nexus Fintech Platform',
    category: 'Web & App',
    description: 'A high-performance trading dashboard handling thousands of transactions per second.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'WebSockets'],
    icon: Layout,
  },
  {
    id: 'aura-ai',
    title: 'Aura AI Assistant',
    category: 'AI & Automation',
    description: 'An intelligent voice semantic search engine for enterprise data lakes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
    icon: Cpu,
  },
  {
    id: 'vanguard-mobile',
    title: 'Vanguard Mobile',
    category: 'Web & App',
    description: 'A natively compiled Flutter application for global supply chain logistics.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    tags: ['Flutter', 'Firebase', 'GCP'],
    icon: Smartphone,
  },
  {
    id: 'equinox-web3',
    title: 'Equinox Web3 Dex',
    category: 'Web3 Platform',
    description: 'A decentralized exchange with deep liquidity pools and minimal slippage.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=2128&auto=format&fit=crop',
    tags: ['Solidity', 'Next.js', 'Ethers.js'],
    icon: Globe,
  },
  {
    id: 'vision-edge-ai',
    title: 'Vision Edge AI',
    category: 'Vision & Speech',
    description: 'Real-time computer vision system for industrial safety and monitoring.',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop',
    tags: ['PyTorch', 'OpenCV', 'NVIDIA'],
    icon: Eye,
  },
  {
    id: 'smart-grid-iot',
    title: 'Smart Grid IoT',
    category: 'Smart Device',
    description: 'Enterprise IoT mesh network for intelligent energy management.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    tags: ['C++', 'MQTT', 'Azure IoT'],
    icon: Zap,
  }
];

const categories = ['All', 'Web & App', 'UI & Branding', 'AI & Automation', 'Vision & Speech', 'Smart Device', 'Web3 Platform'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = !search ||
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">
              Engineering <span className="text-boraq-teal-steel italic">Excellence.</span>
            </h1>
            <p className="text-lg md:text-2xl text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed">
              A premium showcase of our most ambitious technical endeavors across six key specializations.
            </p>
          </div>
          <div className="w-full md:w-80 relative shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-boraq-gray-mid dark:text-boraq-gray-silver" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:border-boraq-teal-steel/50 focus:ring-1 focus:ring-boraq-teal-steel/50 transition-all text-sm text-boraq-black dark:text-boraq-white placeholder:text-boraq-gray-mid/50"
            />
          </div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-6 pb-12 overflow-x-auto no-scrollbar">
        <div className="flex flex-nowrap md:flex-wrap gap-4 min-w-max pb-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 backdrop-blur-md border ${activeFilter === category
                ? 'text-boraq-white dark:text-boraq-black border-transparent'
                : 'bg-boraq-white/5 border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 hover:border-boraq-teal-steel/50 text-boraq-gray-mid dark:text-boraq-gray-silver'
                }`}
            >
              {activeFilter === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-boraq-black dark:bg-boraq-white rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </div>
        <motion.p
          key={filteredProjects.length}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-mono text-boraq-gray-mid/50 dark:text-boraq-gray-silver/40 mt-2"
        >
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </motion.p>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden glass-panel flex flex-col h-[500px] transition-transform duration-300"
              >
                <Link to={`/case-studies/${project.id}`} className="block h-full w-full relative overflow-hidden">
                  {/* Image Container */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 dark:opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-boraq-black/95 via-boraq-black/40 to-transparent dark:from-boraq-black dark:via-boraq-black/60" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end text-boraq-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <project.icon className="w-5 h-5 text-boraq-teal-steel" />
                        <span className="text-xs font-bold text-boraq-teal-steel/90 tracking-widest uppercase">
                          {project.category}
                        </span>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-full glass-panel-heavy flex items-center justify-center cursor-pointer border border-boraq-teal-steel/30"
                      >
                        <ArrowUpRight className="w-6 h-6 text-boraq-white" />
                      </motion.div>
                    </div>
                    <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
                    <p className="text-boraq-white/80 line-clamp-2 mb-6 max-w-lg font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full bg-boraq-white/10 backdrop-blur-md border border-boraq-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-lg">No projects match your search</p>
            <button onClick={() => { setSearch(''); setActiveFilter('All'); }} className="mt-4 text-sm text-boraq-teal-steel font-bold hover:underline">Clear filters</button>
          </div>
        )}
      </section>

      {/* Trust & Conversion Sections */}
      <StatsCounter />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
