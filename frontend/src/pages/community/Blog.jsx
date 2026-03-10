import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '../../components/sections/CallToAction';
import Testimonials from '../../components/sections/Testimonials';
import { useBlogPosts } from '../../hooks/useApi';

const categories = ['All', 'Web & App', 'UI & Branding', 'AI & Automation', 'Vision & Speech', 'Smart Device', 'Web3'];
const POSTS_PER_PAGE = 9;

export default function Blog() {
  const { data: blogPosts, loading } = useBlogPosts();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Latest first
  const posts = useMemo(() => [...(blogPosts || [])].reverse(), [blogPosts]);

  const filteredPosts = posts.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const gridPosts = filteredPosts.slice(1);
  const paginatedGridPosts = gridPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );
  const gridTotalPages = Math.ceil(gridPosts.length / POSTS_PER_PAGE);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">
            Transmission <span className="text-boraq-teal-steel italic">Signals.</span>
          </h1>
          <p className="text-lg md:text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Deep technical essays, design philosophy, and transparent company updates directly from our leadership and engineering teams.
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-boraq-gray-mid dark:text-boraq-gray-silver" />
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search articles..."
              className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:border-boraq-teal-steel/50 focus:ring-1 focus:ring-boraq-teal-steel/50 transition-all text-sm text-boraq-black dark:text-boraq-white placeholder:text-boraq-gray-mid/50"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 backdrop-blur-md border ${activeCategory === cat
                  ? 'text-boraq-white dark:text-boraq-black border-transparent'
                  : 'bg-boraq-white/5 border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 hover:border-boraq-teal-steel/50 text-boraq-gray-mid dark:text-boraq-gray-silver'
                  }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeBlogFilter"
                    className="absolute inset-0 bg-boraq-black dark:bg-boraq-white rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        {/* Featured Post */}
        {filteredPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link to={`/blog/${filteredPosts[0].id}`} className="block glass-panel p-2 rounded-[2.5rem] group cursor-pointer w-full border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
            <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden">
              <img src={filteredPosts[0].image} alt={filteredPosts[0].title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-boraq-black/95 via-boraq-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-boraq-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-boraq-teal-steel text-boraq-black text-[10px] font-bold uppercase tracking-widest">{filteredPosts[0].category}</span>
                  <span className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-boraq-white/70"><Clock className="w-4 h-4" /> {filteredPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{filteredPosts[0].title}</h2>
                <p className="text-lg text-boraq-white/70 max-w-2xl hidden md:block font-light leading-relaxed">{filteredPosts[0].excerpt}</p>
              </div>
            </div>
          </Link>
        </motion.div>
        )}

        {/* Grid Posts */}
        {paginatedGridPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
          {paginatedGridPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="block glass-panel rounded-3xl overflow-hidden group hover:border-boraq-teal-steel/30 transition-colors h-full border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-boraq-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col h-[calc(100%-16rem)]">
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-boraq-teal-steel">{post.category}</span>
                    <span className="text-boraq-gray-silver/30">•</span>
                    <span className="text-boraq-gray-mid dark:text-boraq-gray-silver">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-boraq-teal-steel transition-colors text-boraq-black dark:text-boraq-white">{post.title}</h3>
                  <p className="text-boraq-gray-mid dark:text-boraq-gray-silver mb-6 flex-grow font-light leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center text-[10px] font-bold tracking-widest uppercase gap-2 mt-auto text-boraq-black dark:text-boraq-white group-hover:text-boraq-teal-steel transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-lg">No articles match your search</p>
            <button onClick={() => { setSearch(''); setActiveCategory('All'); setCurrentPage(1); }} className="mt-4 text-sm text-boraq-teal-steel font-bold hover:underline">Clear filters</button>
          </div>
        )}

        {/* Results count */}
        <motion.p
          key={filteredPosts.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-mono text-boraq-gray-mid/50 dark:text-boraq-gray-silver/40 mt-6 text-center"
        >
          {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}{gridTotalPages > 1 ? ` — Page ${currentPage} of ${gridTotalPages}` : ''}
        </motion.p>

        {/* Pagination */}
        {gridTotalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-11 h-11 rounded-full glass-panel flex items-center justify-center disabled:opacity-30 cursor-pointer hover:border-boraq-teal-steel/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-boraq-black dark:text-boraq-white" />
            </motion.button>
            {[...Array(gridTotalPages)].map((_, i) => (
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
              onClick={() => setCurrentPage((p) => Math.min(gridTotalPages, p + 1))}
              disabled={currentPage === gridTotalPages}
              className="w-11 h-11 rounded-full glass-panel flex items-center justify-center disabled:opacity-30 cursor-pointer hover:border-boraq-teal-steel/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-boraq-black dark:text-boraq-white" />
            </motion.button>
          </div>
        )}
      </section>

      <Testimonials />
      <CallToAction />
    </div>
  );
}
