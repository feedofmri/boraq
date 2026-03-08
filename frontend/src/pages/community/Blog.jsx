import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '../../components/sections/CallToAction';
import Testimonials from '../../components/sections/Testimonials';


const posts = [
  {
    title: 'Why we migrated from Webpack to Vite',
    excerpt: 'A deep dive into our build tooling decisions and how we achieved 10x faster HMR across our project repositories.',
    date: 'Oct 12, 2026',
    readTime: '8 min read',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'The Psychology of Micro-Interactions',
    excerpt: 'How 200ms animations can fundamentally alter user trust and perceived application performance.',
    date: 'Oct 05, 2026',
    readTime: '6 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'State of the Agency: Q3 Review',
    excerpt: 'Revenue growth, new strategic hires, and our roadmap for launching Boraq Labs.',
    date: 'Sep 28, 2026',
    readTime: '4 min read',
    category: 'Company',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Blog() {
  const [search, setSearch] = useState('');

  const filteredPosts = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

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
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-boraq-gray-mid dark:text-boraq-gray-silver" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:border-boraq-teal-steel/50 focus:ring-1 focus:ring-boraq-teal-steel/50 transition-all text-sm text-boraq-black dark:text-boraq-white placeholder:text-boraq-gray-mid/50"
            />
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
          <Link to={`/blog/${filteredPosts[0].title.toLowerCase().replace(/ /g, '-')}`} className="block glass-panel p-2 rounded-[2.5rem] group cursor-pointer w-full border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
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
        {filteredPosts.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.slice(1).map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
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
        </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-lg">No articles match "<span className="font-bold text-boraq-black dark:text-boraq-white">{search}</span>"</p>
            <button onClick={() => setSearch('')} className="mt-4 text-sm text-boraq-teal-steel font-bold hover:underline">Clear search</button>
          </div>
        )}
      </section>

      <Testimonials />
      <CallToAction />
    </div>
  );
}
