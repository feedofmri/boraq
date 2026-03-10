import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layout, Smartphone, Cpu, Globe, Search, Brush, ChevronLeft, ChevronRight } from 'lucide-react';
import Testimonials from '../../components/sections/Testimonials';
import StatsCounter from '../../components/sections/StatsCounter';
import CallToAction from '../../components/sections/CallToAction';
import { useCaseStudies } from '../../hooks/useApi';

// Icon mapping by category
const categoryIcons = {
  'Web & App': Layout,
  'UI & Branding': Brush,
  'AI & Automation': Cpu,
  'Vision & Speech': Smartphone,
  'Smart Device': Globe,
  'Web3 Platform': Globe,
};

// Placeholder gradient for case studies without a cover image
const placeholderGradients = [
  'from-boraq-teal-deep/40 to-boraq-teal-steel/20',
  'from-indigo-900/40 to-purple-800/20',
  'from-emerald-900/40 to-teal-700/20',
  'from-rose-900/40 to-orange-800/20',
];

const categories = ['All', 'Web & App', 'UI & Branding', 'AI & Automation'];
const ITEMS_PER_PAGE = 8;

export default function Portfolio() {
  const { data: caseStudies, loading } = useCaseStudies();
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Reverse to show latest case studies first
  const sortedProjects = useMemo(() => [...(caseStudies || [])].reverse(), [caseStudies]);

  const filteredProjects = sortedProjects.filter((project) => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = !search ||
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setCurrentPage(1);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

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
              Our <span className="text-boraq-teal-steel italic">Work.</span>
            </h1>
            <p className="text-lg md:text-2xl text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed">
              {sortedProjects.length} real case studies — from concept to launch. Explore our portfolio across web, mobile, branding, and AI.
            </p>
          </div>
          <div className="w-full md:w-80 relative shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-boraq-gray-mid dark:text-boraq-gray-silver" />
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
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
              onClick={() => handleFilterChange(category)}
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
          Showing {paginatedProjects.length} of {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}{totalPages > 1 ? ` — Page ${currentPage} of ${totalPages}` : ''}
        </motion.p>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {paginatedProjects.map((project, idx) => {
              const IconComponent = categoryIcons[project.category] || Layout;
              const gradient = placeholderGradients[idx % placeholderGradients.length];

              return (
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
                    {/* Image / Gradient Container */}
                    <div className="absolute inset-0 z-0">
                      {project.cover ? (
                        <img
                          src={project.cover}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 dark:opacity-60"
                          loading="lazy"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-boraq-black/95 via-boraq-black/40 to-transparent dark:from-boraq-black dark:via-boraq-black/60" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-end text-boraq-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-5 h-5 text-boraq-teal-steel" />
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
                      <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                      <p className="text-boraq-white/60 text-sm mb-3 font-medium">{project.subtitle}</p>
                      <p className="text-boraq-white/80 line-clamp-2 mb-6 max-w-lg font-light">
                        {project.overview}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
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
              );
            })}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-lg">No projects match your search</p>
            <button onClick={() => { setSearch(''); setActiveFilter('All'); setCurrentPage(1); }} className="mt-4 text-sm text-boraq-teal-steel font-bold hover:underline">Clear filters</button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-11 h-11 rounded-full glass-panel flex items-center justify-center disabled:opacity-30 cursor-pointer hover:border-boraq-teal-steel/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-boraq-black dark:text-boraq-white" />
            </motion.button>

            {[...Array(totalPages)].map((_, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 cursor-pointer ${
                  currentPage === i + 1
                    ? 'bg-boraq-black dark:bg-boraq-white text-boraq-white dark:text-boraq-black shadow-lg'
                    : 'glass-panel text-boraq-gray-mid dark:text-boraq-gray-silver hover:border-boraq-teal-steel/30'
                }`}
              >
                {i + 1}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-11 h-11 rounded-full glass-panel flex items-center justify-center disabled:opacity-30 cursor-pointer hover:border-boraq-teal-steel/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-boraq-black dark:text-boraq-white" />
            </motion.button>
          </motion.div>
        )}
      </section>

      {/* Trust & Conversion Sections */}
      <StatsCounter />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
